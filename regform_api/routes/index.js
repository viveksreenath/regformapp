import express from "express";
import UserRoutes from "./userroute.js";

const router = express.Router();

router.use(UserRoutes);

export default router;
