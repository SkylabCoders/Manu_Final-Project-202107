const { model, Schema } = require('mongoose');

const cursoSchema = new Schema({
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
      type: Schema.type.ObjectId, ref: 'Clase'
    }
  ]
});

module.exports = model('Course', cursoSchema);
