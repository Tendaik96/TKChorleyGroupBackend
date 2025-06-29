import express from "express";
import morgan from "morgan";
import cors from "cors"

const app = express();
const PORT = 3005;

 import reportsRouter from "./routes/reportsRouter.js";

 app.use(
   cors({
     origin: "http://localhost:3000", // allow requests only from this origin
     methods: ["GET"], // allow only GET requests
     allowedHeaders: ["Content-Type"], // allow this header
   })
 );

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.json());

 app.use("/api/category", reportsRouter);
/*app.use("/api/user", userRouter);
 */
app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`);
});
