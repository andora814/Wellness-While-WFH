const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Pose = new Schema(
  {
    english: { type: String, required: true },
    sanskrit: { type: String, required: true },
    benefits: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
);

module.exports = mongoose.model('poses', Pose);
