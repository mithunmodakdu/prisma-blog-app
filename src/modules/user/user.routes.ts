import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();
router.get("/", UserControllers.getAllUsers)
router.post("/", UserControllers.createUser);

export const UserRoutes = router;