const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.get('/city', async (req, res) => {
  axios
    .request({
      url: 'https://api.rajaongkir.com/starter/city',
      method: 'GET',
      headers: {
        key: process.env.RAJAONGKIR_API,
      },
    })
    .then(function (response) {
      res.send(response.data.rajaongkir.results);
    })
    .catch((err) => res.send({ err }));
});

app.post('/cost', (req, res) => {
  const { origin, destination, weight, courier } = req.body;

  axios
    .request({
      url: 'https://api.rajaongkir.com/starter/cost',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        key: process.env.RAJAONGKIR_API,
      },
      data: `origin=${origin}&destination=${destination}&weight=${weight}&courier=${courier}`,
    })
    .then(function (response) {
      res.send(response.data.rajaongkir);
    })
    .catch((err) => res.send({ err }));
});

app.listen(3001, () => {
  console.log('Server is listening to port 3001');
});
