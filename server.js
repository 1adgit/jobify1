import 'express-async-errors';
import * as dotenv from "dotenv";
dotenv.config();
import express, { response } from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";



//routers
import jobRouter from "./routes/jobRouter.js";
import authRouter from "./routes/authRouter.js";

//middleware
import errorHandlerMiddleware from './middleware/errorHandlerMiddleware.js';
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}


app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});

// //get all jobs
// app.get("/api/v1/jobs", (req, res) => {
//   res.status(200).json({ jobs });
// });

// //create a job
// app.post("/api/v1/jobs");

// //get single job
// app.get("/api/v1/jobs/:id");

// //edit a job
// app.patch("/api/v1/jobs/:id");

// //delete a job
// app.delete("/api/v1/jobs/:id");
app.use("/api/v1/jobs", jobRouter);
app.use("/api/v1/auth", authRouter);
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
} catch (error) {
  console.log();
  process.exit(1);
}
