import dotenv from 'dotenv';
import express from 'express';
import fetch from 'node-fetch';

dotenv.config();
const router = express.Router();

router.get('/products', async (req, res) => {
    try {
        const response = await fetch('https://api.printful.com/store/products', {
            headers: {
                'Authorization': `Bearer ${PRINTFUL_API_TOKEN}`
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        res.json(data.result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router;