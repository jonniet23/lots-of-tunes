const express = require("express");
const {
  createArtist,
  getAllArtists,
  getSingleArtist,
  updateArtist,
  deleteArtist,
} = require("../controllers/artist");
const { createAlbum } = require("../controllers/album");

const artistRouter = express.Router();

artistRouter.post("/", createArtist);
artistRouter.get("/", getAllArtists);
artistRouter.get("/:id", getSingleArtist);
artistRouter.patch("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);
artistRouter.post("/:artistId/albums", createAlbum);

module.exports = artistRouter;
