import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "Category",
    },
    note: {
      type: String,
    },
    duration: {
      type: String,
    },
    sinopsis: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret._id;
        delete ret.__v;
      },
    },
    toObject: {
      virtuals: true,
      versionKey: false,
      transform: function (doc, ret) {
        delete ret.__v;
        delete ret._id;
      },
    },
  }
);

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;
