import express from "express";
import { configDotenv } from "dotenv";
import connectDB from "./database/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import userRoute from "./routes/user.route.js";
import quizRoute from "./routes/quiz.route.js";
import questionRoute from "./routes/question.route.js";

configDotenv();
await connectDB();

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      process.env.FRONTEND_URL || "https://quizzhere.onrender.com"
    ],
    credentials: true,
  })
);

app.use("/api/v1/user", userRoute);
app.use("/api/v1/quiz", quizRoute);
app.use("/api/v1/question", questionRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});