import jwt from 'jsonwebtoken';
import Profile from '../models/profile.model.js';

function postProfiles(req, res) {
  const profile = new Profile({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    street: req.body.street,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
  });
  profile
    .save()
    .then((profileSaved) => res.json(profileSaved))
    .catch((error) => res.json(error));
}

function getProfiles(req, res) {
  const token = req.header('auth-token');
  const decodedToken = jwt.decode(token);
  const profileId = decodedToken.profileId;
  Profile.findOne({ _id: profileId }).then((profile) => {
    res.json({
      firstName: profile.firstName,
      secondName: profile.secondName,
      street: profile.street,
      address: profile.address,
      email: profile.email,
      image: profile.image,
      profileId: profile._id,
    });
  });
}

export { postProfiles, getProfiles };
