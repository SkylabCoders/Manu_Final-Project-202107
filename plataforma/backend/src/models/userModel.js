const { model, Schema } = require('mongoose');

const userSchema = new Schema({
  user: String,
  title: String,
  location: String,
  image: String,
  country: String,
  rol: String,
  courses: [String],
  certificates: [
    {
      name: String,
      titulo: String,
      url: String
    }
  ]
});

module.exports = model('User', userSchema);
