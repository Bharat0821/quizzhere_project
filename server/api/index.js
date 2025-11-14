import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "../database/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// Routes
import userRoute from "../routes/user.route.js";
import quizRoute from "../routes/quiz.route.js";
import questionRoute from "../routes/question.route.js";

configDotenv();
await connectDB(); 

const app = express();

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "https://quizzhere2110.vercel.app"
    ],
    credentials: true,
  })
);

// API Routes
app.use("/api/v1/user", userRoute);
app.use("/api/v1/quiz", quizRoute);
app.use("/api/v1/question", questionRoute);

// Export Express App for Vercel
export default app;
