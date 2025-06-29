import express from "express";
import morgan from "morgan";
const app = express();
const PORT = process.env.port;

/* import movieRouter from "./routes/movieRec.js";
import userRouter from "./routes/users.js"; */

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

/* app.use("/api/movie", movieRouter);
app.use("/api/user", userRouter);
 */
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
