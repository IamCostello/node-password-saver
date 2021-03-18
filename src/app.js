import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import passwordRoutes from "./api/routes/password.js";
import catchError from "./api/middlewares/catchError.js";
import Passwords from "./models/Passwords.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;
dotenv.config({ path: "./.env" });
app.use(morgan("tiny"));

app.use("/", passwordRoutes);

app.use(catchError);

mongoose
  .connect(process.env.CLUSTER_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    const saved = Passwords.findOne();
    return saved;
  })
  .then((passwordCollection) => {
    if (!passwordCollection) {
      const passwords = new Passwords({
        saved: [],
      });
      passwords.save();
    }
  })
  .then((res) =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((error) => console.log(error));
