const { model, Schema } = require('mongoose');

const cursosSchema = new Schema({
  name: String,
  title: String,
  subtitle: String,
  image: String,
  clases: [
    {
      name: String,
      titulo: String,
      subtitulo: String,
      video: String
    }
  ]
});

module.exports = model('cursos', cursosSchema);
