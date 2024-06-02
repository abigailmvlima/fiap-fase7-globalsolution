import express from "express";
import mongoose from "mongoose";
import userRoutes from "./modules/user/userRoutes";
import movieRoutes from "./modules/movie/movieRoutes";
import categoryRoutes from "./modules/category/categoryRoutes";

import monitoringRoutes from "./modules/monitoring/monitoringRoutes";
import managementRoutes from "./modules/management/managementRoutes";
import reportingRoutes from "./modules/reporting/reportingRoutes";

import loginRoutes from "./modules/login/loginRoutes";
import authenticateToken from "./modules/middleware/authMiddleware";
import authRoute from "./modules/middleware/authRoute";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cron from "node-cron";

dotenv.config();

const app = express();

// Set the limit for express.json()
app.use(express.json({ limit: "100mb" }));
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "100mb", extended: true }));

const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27019/cineplus";

mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

const router = express.Router();

const allowedOrigins = ["http://localhost:3000"];
app.use(
  cors({
    origin: allowedOrigins,
    credentials: true, // Allow sending cookies
    methods: ["GET", "HEAD", "PUT", "PATCH", "POST", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/auth", loginRoutes);
router.use(authenticateToken);
app.use(router);

app.use("/movie", authRoute, movieRoutes);
app.use("/users", authRoute, userRoutes);
app.use("/category", authRoute, categoryRoutes);
app.use("/monitoring", authRoute, monitoringRoutes);
app.use("/management", authRoute, managementRoutes);
app.use("/reporting", authRoute, reportingRoutes);

app.get("/version", (req, res) => {
  res.status(200).json({
    version: "1.0.0",
    description: "CinePlus API - Initial version",
    lastUpdated: "2024-05-07",
  });
});

const PORT = process.env.PORT || 3526;

cron.schedule("*/10 * * * *", () => {
  
  // cordenada a serem monitoradas
  const coordinates = [
    [102.0, 17.0], 
    [103.0, 18.0], 
  ];
  
  fetchAndSaveImagesForCoordinates(coordinates);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
