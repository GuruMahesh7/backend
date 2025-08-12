import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import couponRoutes from "./routes/couponRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS Setup
app.use(
  cors({
    origin: "http://localhost:5173", // Allow frontend origin
    credentials: true, // Optional: if you're using cookies or auth
  })
);

app.use(express.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "testDB", // or your DB name
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));

// ✅ API Routes

app.use("/api/coupons", couponRoutes);

// ✅ Health Check
app.get("/", (req, res) => {
  res.send("🚀 Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
