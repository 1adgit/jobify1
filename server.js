import * as dotenv from "dotenv";
dotenv.config();
import express, { response } from "express";
const app = express();
import morgan from "morgan";
//routers
import jobRouter from "./routes/jobRouter.js";
import mongoose from "mongoose";
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

try {
  const getData = async () => {
    const response = await fetch(
      "https://www.course-api.com/react-useReducer-cart-project"
    );
    const cartData = await response.json();
    console.log(cartData);
  };

  getData();
} catch (error) {
  console.log(error);
}
app.use(express.json());
app.get("/", (req, res) => {
  res.send("hello world");
});
app.post("/", (req, res) => {
  console.log(req);
  res.json({ message: "data received", data: req.body });
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
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});
const port = process.env.PORT || 5100;
try{
  await mongoose.connect(process.env.MONGO_URL)
  app.listen(port, () => {
    console.log(`server running on ${port}`);
  });
} catch(error){

  console.log();
  process.exit(1);

}

