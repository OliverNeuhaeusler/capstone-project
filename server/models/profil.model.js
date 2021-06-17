import mongoose from 'mongoose';

const profilSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  street: String,
  address: String,
  email: String,
  password: String,
  image: Array,
});

const Profil = mongoose.model('Profil', profilSchema);

export default Profil;
