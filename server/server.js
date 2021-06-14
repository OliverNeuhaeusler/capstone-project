import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import marketRoutes from './routes/market.routes.js';

const connectionString = 'mongodb://localhost:27017/medieval-market';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const server = express();
server.use(express.json());
server.use(cors());
server.use(marketRoutes);

server.get('/', (req, res) => res.json({ status: 'Server is running. ' }));

server.listen(4000);
