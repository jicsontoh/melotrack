const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recordSchema = new Schema({
  country: { type: String, required: true },
  depart_date: { type: String, required: true },
  arrive_date: { type: String, required: true },
  days: { type: Integer },
});

module.exports = mongoose.model("Record", recordSchema);
