import compression from "compression";
import cors from "cors";
import express from "express";
import { UserRoutes } from "./modules/user/user.routes";

const app = express();

// Middleware
app.use(cors()); // Enables Cross-Origin Resource Sharing
app.use(compression()); // Compresses response bodies for faster delivery
app.use(express.json()); // Parse incoming JSON requests

// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

app.use("/api/v1/users", UserRoutes)

// Default route for testing
app.get("/", (req, res) => {
  res.send(`Prisma Blog App Server is running on the port ${process.env.PORT} `);
});


// 404 Handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route Not Found",
  });
});

export default app;
