import express from "express";
import User from "../db/Schema/userSchema.js";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    await User.create(req.body);
    res
      .status(200)
      .json({ message: "Registration form Submitted Successfully" });
  } catch (e) {
    res.json({ message: e.message });
  }
});

export default router;
