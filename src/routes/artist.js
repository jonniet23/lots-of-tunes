const express = require("express");
const { createArtist, getAllArtists } = require("../controllers/artist");

const artistRouter = express.Router();

artistRouter.post("/", createArtist);
artistRouter.get("/", getAllArtists);
module.exports = artistRouter;
