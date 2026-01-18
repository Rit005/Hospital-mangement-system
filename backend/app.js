import express from "express";
import { config } from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import userRouter from "./router/userRouter.js";
import appointmentRouter from "./router/appointmentRouter.js";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

config({ path: "./config/config.env" });

const app = express();

/* ✅ ALLOWED ORIGINS */
const allowedOrigins = [
  "http://localhost:5173",
  "https://hospital-management-blond-eta.vercel.app",
];

/* ✅ CORS CONFIG (CRITICAL) */
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("CORS not allowed"));
      }
    },
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

/* ✅ HEALTH CHECK */
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Server running",
  });
});

/* ROUTES */
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/appointment", appointmentRouter);

/* DB */
dbConnection();

/* ERROR HANDLER */
app.use(errorMiddleware);

export default app;
