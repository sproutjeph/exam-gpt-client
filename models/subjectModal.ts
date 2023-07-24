import mongoose, { Schema } from "mongoose";

const subjectSchema = new Schema({
  name: String,
  exam: String,
  examYears: [
    {
      examYear: Number,

      isActive: Boolean,
    },
  ],
});

const Subject =
  mongoose.models.User || mongoose.model("Subject", subjectSchema);

export default Subject;
