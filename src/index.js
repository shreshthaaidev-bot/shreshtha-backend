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
