import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import couponRoutes from "./routes/couponRoutes.js";
import process from "process";

dotenv.config();
console.log("Loaded MONGO_URI:", process.env.MONGO_URI);


const app = express();


app.use(
  cors({
<<<<<<< HEAD
    origin: "*",
    credentials: true, 
=======
    origin: "*", // Allow frontend origin
    credentials: true, // Optional: if you're using cookies or auth
>>>>>>> d64e984d81caaaf0c2918d32250a185ba11f6b9c
  })
);

app.use(express.json());

mongoose
<<<<<<< HEAD
  .connect(process.env.MONGO_URI, {
    dbName: "testDB", 
=======
  .connect(process.env.MONGO_URI || "mongodb+srv://mongoguru:guru@cluster0.xh9qpgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
    dbName: "testDB", // or your DB name
>>>>>>> d64e984d81caaaf0c2918d32250a185ba11f6b9c
  })
  .then(() => console.log(" MongoDB connected"))
  .catch((err) => console.error("MongoDB connection failed:", err));



app.use("/api/coupons", couponRoutes);


app.get("/", (req, res) => {
  res.send(" Backend is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});
