import mongoose, { Schema } from "mongoose";

const questionSchema = new Schema({
  correctOption: {
    type: String,
  },
  examType: {
    type: String,
  },
  examYear: {
    type: String,
  },
  subject: {
    type: String,
  },
  image: {
    type: String,
  },
  option: {
    a: {
      type: String,
    },
    b: {
      type: String,
    },
    c: {
      type: String,
    },
    d: {
      type: String,
    },
    e: {
      type: String,
    },
  },
  question: {
    type: String,
  },
  solution: {
    type: String,
  },
});

// Create and export the Mongoose model using the mainSchema
const Question =
  mongoose.models.QuestionDataModal ||
  mongoose.model("Question", questionSchema);

export default Question;
