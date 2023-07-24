import mongoose from "mongoose";

// Define Mongoose schema for subjects
const subjectSchema = new mongoose.Schema({
  id: {
    type: String,
    default: "111ddd",
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  examYears: [Number],
});

// Define Mongoose schema for examTypes
const examTypeSchema = new mongoose.Schema({
  id: {
    type: String,
    default: "222fff",
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  examCat: {
    type: String,
    required: true,
  },
  subjects: [subjectSchema],
});

// Define Mongoose schema for examsData
const examsDataSchema = new mongoose.Schema({
  result: {
    type: Number,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  examTypes: [examTypeSchema],
});

// Create and export the Mongoose model
const Exam =
  mongoose.models.ExamsDataModel || mongoose.model("Exam", examsDataSchema);

export default Exam;
