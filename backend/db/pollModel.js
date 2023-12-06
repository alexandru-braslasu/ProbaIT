const mongoose = require("mongoose");

const PollSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',
    required: true,
    unique: false
  },
  title: {
    type: String,
    required: true,
  },
  options: [{
    option_text: String,
    number_of_votes: {
        type: Number,
        default: 0,
    }
  }],
  poll_type: {
    type: String,
    required: true,
    default: "Single choice",
  }
});

// export UserSchema
module.exports = mongoose.model.Polls || mongoose.model("Polls", PollSchema);