//External Dependencies
require ('dotenv').config();
const express = require('express');
const app = express();
const PORT = 3001;
let cors = require('cors');

//Internal Denpendencies
const musicList = require('./music/music');
const mongndbQueryWithPromise = require('./mongoDBconnection');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json(musicList);
});

app.get('/mongo', async (req, res) => {
  const musicList2 = await mongndbQueryWithPromise();
  res.status(200).json(musicList2);
})

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
})