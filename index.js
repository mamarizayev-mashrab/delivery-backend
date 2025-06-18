import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js"; // joylashuvga qarab tuzating
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";
import dotenv from "dotenv";

// .env faylni o‘qish
dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(express.json());
app.use(cors());

// Static fayllar
app.use("/images", express.static("uploads"));

// DB ulanish
connectDB();

// Routes
app.use("/api/food", foodRouter);
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);

// Test route
app.get("/", (req, res) => {
  res.send("API is working on Render!");
});

// 🚀 Render uchun kerak: serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
