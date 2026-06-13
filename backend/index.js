import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
// import cookieParser from 'cookie-parser';

// Load environment variables early
dotenv.config();

// Create the Express app
const app = express();

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(express.json());
// app.use(cookieParser());

// 🚀 2. CRITICAL UPDATE: Configure CORS to allow secure cookies
app.use(cors({
  origin: process.env.CLIENT_ORIGIN || ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175'], // Your frontend URL
  credentials: true                // Allows cookies to travel across origins
}));

// Serve static images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Import Routers (after app and middleware are configured)
import publicRouter from './routes/public.js';
import authRouter from './routes/auth.js';
import bookingRouter from './routes/booking.js';

// Configuration
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGODB_URI;

// Connect to MongoDB (Commented out to prevent crash during testing)
/*
mongoose.connect(MONGO_URI)
  .then(() => {
    console.log("=========================================");
    console.log("🚀 MongoDB Connection Established Successfully!");
    console.log("=========================================");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Failed!", err.message);
  });
*/

// Base Test Route
app.get('/', (req, res) => {
  res.send('Server is running smoothly!');
});

// LINK ROUTERS HERE
app.use('/api', publicRouter);
app.use('/api/auth', authRouter);
app.use('/api/bookings', bookingRouter);

// Start Server
app.listen(PORT, () => {
  console.log(`📡 Server running on port ${PORT}`);
});