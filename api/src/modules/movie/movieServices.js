import Movie from "./movieModel.js";
import Category from "../category/categoryModel.js";

export async function createMovie(data) {
  try {
    const movie = new Movie(data);
    return await movie.save();
  } catch (error) {
    throw error;
  }
}

export async function getAllMovies() {
  try {
    return await Movie.find({})
      .populate({
        path: "category",
        select: "-__v", // Exclui o campo __v de category
      })
      .select("-__v");
  } catch (error) {
    throw error;
  }
}

export async function getMovieById(movieId) {
  try {
    const movie = await Movie.findById(movieId);
    if (!movie) throw new Error("Movie not found");
    return movie;
  } catch (error) {
    throw error;
  }
}

export async function updateMovie(movieId, updateData) {
  try {
    const movie = await Movie.findByIdAndUpdate(movieId, updateData, {
      new: true,
    });
    if (!movie) throw new Error("Movie not found for update");
    return movie;
  } catch (error) {
    throw error;
  }
}

export async function deleteMovie(movieId) {
  try {
    const movie = await Movie.findByIdAndDelete(movieId);
    if (!movie) throw new Error("Movie not found for deletion");
    return movie;
  } catch (error) {
    throw error;
  }
}
