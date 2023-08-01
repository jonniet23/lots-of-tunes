const express = require("express");
const { readAllAlbums, readSingleAlbum } = require("../controllers/album");
const albumRouter = express.Router();

albumRouter.get("/albums/", readAllAlbums);
albumRouter.get("/albums/:id/", readSingleAlbum);

module.exports = albumRouter;
