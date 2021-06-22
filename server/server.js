import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import marketRoutes from './routes/market.routes.js';
import profileRoutes from './routes/profile.routes.js';
import authRoutes from './routes/auth.routes.js';
import dirname from './lib/pathHelpers.js';
const __dirname = dirname(import.meta.url);

const connectionString = 'mongodb://localhost:27017/medieval-market';
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
  autoIndex: true,
});

const server = express();
server.use(express.json());
server.use(cors());
server.get('/health', (req, res) =>
  res.json({ status: 'Server is running. ' })
);
server.use(marketRoutes);
server.use(profileRoutes);
server.use(authRoutes);

server.use(express.static(path.join(__dirname, '../client/build')));
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const port = process.env.PORT || 4000;
server.listen(port);
