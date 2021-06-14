import mongoose from 'mongoose';

const marketSchema = new mongoose.Schema({
  name: String,
  street: String,
  address: String,
  description: String,
  images: Array,
  comments: Array,
});

const Market = mongoose.model('Markets', marketSchema);

export default Market;
