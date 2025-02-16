//Entry point for the backend server.

import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import productRoutes from './routes/productRoutes.js'; // Import your route

dotenv.config();
const app = express();

app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable cross-origin requests

// Use product routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));