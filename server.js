import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import couponRoutes from "./routes/couponRoutes.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// ✅ CORS setup to allow frontend to access backend
const corsOptions = {
  origin: ["https://https://react-git-main-gurus-projects-d757589a.vercel.app/.vercel.app"], // your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};
app.use(cors(corsOptions));

app.use(express.json());

// ✅ Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
  dbName: "testDB",
})
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err.message));

console.log("Connecting to:", process.env.MONGO_URI);

// ✅ Routes
app.use("/api", couponRoutes);
app.use("/api", userRoutes);

// ✅ Use process.env.PORT for Render compatibility
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));