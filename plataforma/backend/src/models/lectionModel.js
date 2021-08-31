const { model, Schema } = require('mongoose');

const lectionSchema = new Schema({
  title: String,
  subtitle: String,
  description: String,
  image: String,
  video: String,
  comments: [
    {
      user: String,
      comment: String
    }
  ]
});

module.exports = model('Lection', lectionSchema);
