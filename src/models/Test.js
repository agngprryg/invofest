import mongoose from "mongoose";

const TestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  nim: {
    type: Number,
    required: true,
  },
  alamat: {
    type: String,
    required: true,
  },
});

const Test = mongoose.models.NewTest || mongoose.model("NewTest", TestSchema);

export default Test;
