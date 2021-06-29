import jwt from 'jsonwebtoken';
import Profile from '../models/profile.model.js';

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

export { getProfiles };
