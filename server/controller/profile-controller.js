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
  const { profileId } = req.params;
  const updatedProfile = req.body;
  Profiles.findById(
    { _id: profileId },
    updatedProfile,
    { new: true },
    (error, doc) => {
      if (error) {
        res.json({ message: 'could not get this profile.' });
        return;
      }
      res.json(doc);
    }
  );
}

export { postProfiles, getProfiles };
