import { Router } from "express";
import { fetchPasswords, savePassword } from "../../services/password.js";
import validatePassword from "../middlewares/validatePassword.js";

const passwordRoutes = Router();

passwordRoutes.get("/", async (req, res, next) => {
  try {
    const savedPasswords = await fetchPasswords();
    res.status(200).json({ savedPasswords });
  } catch (error) {
    next(error);
  }
});

passwordRoutes.post("/", [validatePassword], async (req, res, next) => {
  const password = req.body.password;

  try {
    const passwordHashData = await savePassword(password);
    res
      .status(201)
      .json({ message: "Password saved successfuly", passwordHashData });
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
