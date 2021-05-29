const mongoose = require("mongoose");

const GithubRepoSchema = new mongoose.Schema({
  githubRepo: {
    type: String,
    // required: true,
  },

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Signup",
    // required: true,
  },
});

const GithubRepoModel = mongoose.model("userdata", GithubRepoSchema);

module.exports = GithubRepoModel;
