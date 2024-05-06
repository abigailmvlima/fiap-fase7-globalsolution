import mongoose from 'mongoose';

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  releaseYear: {
    type: Number
  },
  genres: [{
    type: String
  }]
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;
