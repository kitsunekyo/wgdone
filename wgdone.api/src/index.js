const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const { startDatabase } = require('./database/mongo');
const { AdsCollection } = require('./database/collections/ads');

const PORT = 3000;

const app = express();

const ads = [
  {
    title: 'hello world'
  }
];

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/', async (req, res) => {
  res.send(await AdsCollection.getAds());
});

app.post('/', async (req, res) => {
  const newAd = req.body;
  await AdsCollection.insertAd(newAd);
  res.send({ message: 'New ad inserted.' });
});

// endpoint to delete an ad
app.delete('/:id', async (req, res) => {
  await AdsCollection.deleteAd(req.params.id);
  res.send({ message: 'Ad removed.' });
});

// endpoint to update an ad
app.put('/:id', async (req, res) => {
  const updatedAd = req.body;
  await AdsCollection.updateAd(req.params.id, updatedAd);
  res.send({ message: 'Ad updated.' });
});

startDatabase().then(async () => {
  await AdsCollection.insertAd({ title: 'Hello, now from the in-memory database!' });

  app.listen(PORT, () => {
    console.log(`App listening on Port ${PORT}`);
  });
});
