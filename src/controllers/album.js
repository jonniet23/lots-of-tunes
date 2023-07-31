const db = require("../db");

const createAlbum = async (req, res) => {
  const { name, year } = req.body;
  const { artistId } = req.params;

  try {
    const {
      rows: [album],
    } = await db.query(
      `INSERT INTO Albums (name, year, artistid) VALUES ($1, $2, $3) RETURNING *`,
      [name, year, artistId]
    );
    res.status(201).json(album);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { createAlbum };
