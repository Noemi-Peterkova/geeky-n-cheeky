import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch"; // Ensure node-fetch is installed

dotenv.config();
const router = express.Router();

// Helper function to fetch full product details by ID
const fetchProductDetails = async (id) => {
  try {
    const response = await fetch(`https://api.printful.com/store/products/${id}`, {
      headers: {
        Authorization: `Bearer ${process.env.PRINTFUL_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch product ${id}: ${response.statusText}`);
    }

    const productData = await response.json();
    return productData.result;
  } catch (error) {
    console.error("Error fetching product details:", error);
    return null;
  }
};

// Route: GET /api/products
router.get("/", async (req, res) => {
  try {
    const response = await fetch("https://api.printful.com/store/products", {
      headers: {
        Authorization: `Bearer ${process.env.PRINTFUL_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Printful API Error: ${response.statusText}`);
    }

    const data = await response.json();

    // Fetch additional details for each product
    const detailedProducts = await Promise.all(
      data.result.map(async (product) => {
        const details = await fetchProductDetails(product.id);

        if (!details) return null; // Skip if fetching details failed

        return {
          id: product.id,
          name: details.sync_product.name,
          thumbnail_url: details.sync_product.thumbnail_url,
          retail_price: details.sync_variants[0]?.retail_price || "Price unavailable",
        };
      })
    );

    // Filter out any failed requests (null values)
    const filteredProducts = detailedProducts.filter((product) => product !== null);

    res.json(filteredProducts);
  } catch (error) {
    console.error("Error fetching products from Printful:", error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
});

export default router;
