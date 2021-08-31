const { model, Schema } = require('mongoose');

const teacherSchema = new Schema({
  name: String,
  usuary: String,
  presentation: String,
  image: String,
  country: String
});

module.exports = model('Teacher', teacherSchema);
