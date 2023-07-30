const express = require("express");
const {
  createArtist,
  getAllArtists,
  getSingleArtist,
  updateArtist,
  deleteArtist,
} = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter.post("/", createArtist);
artistRouter.get("/", getAllArtists);
artistRouter.get("/:id", getSingleArtist);
artistRouter.patch("/:id", updateArtist);
artistRouter.delete("/:id", deleteArtist);
module.exports = artistRouter;
