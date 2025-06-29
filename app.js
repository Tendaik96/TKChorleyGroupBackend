import express from "express";
import morgan from "morgan";
const app = express();
const PORT = 3000;

 import reportsRouter from "./routes/reportsRouter.js";
/*import userRouter from "./routes/users.js"; */

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

 app.use("/api/category", reportsRouter);
/*app.use("/api/user", userRouter);
 */
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
