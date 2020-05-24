const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const speciesEntrySchema = new Schema(
  {
    speciesName: { type: String, required: true },
    photo: { type: String, required: true },
  },
  { timestamps: true }
);

const speciesEntry = mongoose.model("speciesEntry", speciesEntrySchema);
module.exports = speciesEntry;
