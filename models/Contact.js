const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  firstnamename: {
    type: String,
  },
  lastname: {
    type: String,
  },

  email: {
    type: String,
  },

  message: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const ContactModel = mongoose.model("contactusinfo", ContactSchema);

module.exports = ContactModel;
