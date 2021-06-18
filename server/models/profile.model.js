import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  firstName: String,
  secondName: String,
  street: String,
  address: String,
  email: String,
  password: String,
  image: Array,
});

const Profile = mongoose.model('Profile', profileSchema);

export default Profile;
