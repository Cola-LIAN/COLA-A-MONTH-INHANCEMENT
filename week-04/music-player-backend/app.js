//External Dependencies
const express = require('express');
const app = express();
const PORT = 3001;
let cors = require('cors');

//Internal Denpendencies
const musicList = require('./music/music');
console.log(musicList);
app.use(cors());

app.get('/', (req, res) => {
  res.json(musicList);
  res.send(200);
});


app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
})