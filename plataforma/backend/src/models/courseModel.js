const { model, Schema } = require('mongoose');

const courseSchema = new Schema({
  name: String,
  title: String,
  subtitle: String,
  description: String,
  image: String,
  category: String,
  teacher: String,
  level: String,
  duration: String,
  creation: String,
  temary: [
    {
      type: Schema.Types.ObjectId, ref: 'Lection'
    }
  ]
});

module.exports = model('Course', courseSchema);
