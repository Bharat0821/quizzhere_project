import e from "cors";
import {configDotenv} from "dotenv";
import express from "express";
import connectDB from "./database/db.js";
import userRoute from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
// import quizRoute from "./routes/quiz.route.js";

configDotenv();
//call database connection here
connectDB();

const app = express();

const PORT= 8080;

//default middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  origin: "http://localhost:5173",
   credentials: true
}));



//apis
app.use("/api/v1/user", userRoute);
// app.use("/api/v1/quiz", quizRoute);

// "http://localhost:8080/api/v1/user/register"

app.listen(PORT, () => {
  console.log(`Server is running on #http://localhost:${PORT}`);
});


