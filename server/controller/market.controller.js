import Market from '../models/market.model.js';

function postMarkets(req, res) {
  const market = new Market({
    name: req.body.name,
    street: req.body.street,
    address: req.body.address,
    description: req.body.description,
    images: req.body.images,
    comments: req.body.comments,
    rating: req.body.rating,
  });
  market
    .save()
    .then((marketSaved) => res.json(marketSaved))
    .catch((error) => res.json(error));
}

function getMarkets(req, res) {
  Market.find().then((market) => res.json(market));
}

function updateMarkets(req, res) {
  const { marketId } = req.params;
  const updatedMarket = req.body;
  Market.findByIdAndUpdate(
    { _id: marketId },
    updatedMarket,
    { new: true },
    (error, doc) => {
      if (error) {
        res.json({ message: 'could not update this market.' });
        return;
      }
      res.json(doc);
    }
  );
}

export { postMarkets, getMarkets, updateMarkets };
