// import crypto from "crypto";

// const salt = "secret";
// const hash = crypto.pbkdf2(
//   "password",
//   salt,
//   100000,
//   64,
//   "sha256",
//   (error, key) => {
//     if (error) {
//       throw error;
//     }
//     console.log(key.toString("hex"));
//   }
// );

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import passwordRoutes from "./api/routes/password.js";
import catchError from "./api/middlewares/catchError.js";

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
  .then(() =>
    app.listen(port, () => console.log(`Server running on port ${port}`))
  )
  .catch((error) => console.log(error));
