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
const readAllAlbums = async (_, res) => {
  try {
    const { rows } = await db.query("SELECT * FROM Albums");
    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
const readSingleAlbum = async (req, res) => {
  try {
    const id = req.params.id;
    const {
      rows: [album],
    } = await db.query("SELECT * FROM Albums WHERE id = $1", [id]);

    if (!album) {
      return res.status(404).json({ message: `album ${id} does not exist` });
    }

    res.status(200).json(album);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

module.exports = { createAlbum, readAllAlbums, readSingleAlbum };
