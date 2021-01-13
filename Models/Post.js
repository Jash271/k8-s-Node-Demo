const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  Title: {
    type: String,
  },
  Description: {
    type: String,
  },
});

module.exports = mongoose.model('Post', PostSchema);
