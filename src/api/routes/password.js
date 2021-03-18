import { Router } from "express";
import validatePassword from "../middlewares/validatePassword.js";

const passwordRoutes = Router();

passwordRoutes.get("/", async (req, res, next) => {
  try {
    res.send("get");
  } catch (error) {
    next(error);
  }
});

passwordRoutes.post("/", [validatePassword], async (req, res, next) => {
  const password = req.body.password;

  try {
    res.send("post");
  } catch (error) {
    next(error);
  }
});

passwordRoutes.post("/verify", [validatePassword], async (req, res, next) => {
  const password = req.body.password;

  try {
    res.send("verify");
  } catch (error) {
    next(error);
  }
});

export default passwordRoutes;
