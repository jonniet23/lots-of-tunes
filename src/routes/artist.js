const express = require("express");
const {
  createArtist,
  getAllArtists,
  getSingleArtist,
} = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter.post("/", createArtist);
artistRouter.get("/", getAllArtists);
artistRouter.get("/:id", getSingleArtist);

module.exports = artistRouter;
