import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview scheduled", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["part-time", "full-time", "internship"],
      default: "internship",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
