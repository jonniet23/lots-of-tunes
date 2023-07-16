const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Hello World!");
});

const artistRouter = require('./routes/artistRouter');
app.use('/artists', artistRouter);

app.post('/artists', (req ,res) => {
  return res.status(201)
})
module.exports = app;