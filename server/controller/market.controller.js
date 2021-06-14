import Market from '../models/market.model.js';

function postMarkets(req, res) {
  const market = new Market({
    name: req.body.name,
    street: req.body.street,
    address: req.body.address,
    description: req.body.description,
    images: req.body.images,
    comments: req.body.comments,
  });
  market
    .save()
    .then((marketSaved) => res.json(marketSaved))
    .catch((error) => res.json(error));
}

function getMarkets(req, res) {
  Market.find().then((market) => res.json(market));
}

export { postMarkets, getMarkets };
