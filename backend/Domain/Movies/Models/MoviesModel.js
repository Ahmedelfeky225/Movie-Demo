const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const moviesSchema = new Schema({
  title: { type: String, required: true },
  release_date: { type: Date, required: true },
  rating: { type: Number, required: true, min: 0, max: 10 },
  overview: { type: String, required: true },
  poster_photo: { type: String, required: true },
  genres: {
    type: [String], // Array of genre names (strings)
    required: true,
  },
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  vote_count: { type: Number, required: true },
  views: { type: Number, required: true },
  photo: { type: String, required: true },
  trailer: { type: String, required: true },
  link: { type: String, required: true },
<<<<<<< HEAD
=======
  Original_link: { type: String, required: true },
>>>>>>> 2102966eb7478d8c5548581d89f6fa65bfe99382
});

const Movies = mongoose.model("Movies", moviesSchema);

module.exports = Movies;
