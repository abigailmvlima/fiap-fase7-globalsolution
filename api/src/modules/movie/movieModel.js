import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  note: {
    type: Number
  },
  duration: {
    type: String
  },
  sinopsis: {
    type: String
  }
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
