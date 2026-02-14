
import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./public/temp/.env" });

import { app } from "./app.js";
import connectDB from "./db/index.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server running");
    });
  })
  .catch((err) => {
    console.log("MONGO DB connect fail", err);
  });
