import Profil from '../models/profil.model.js';

function postProfils(req, res) {
  const profil = new Profil({
    firstName: req.body.firstName,
    secondName: req.body.secondName,
    street: req.body.street,
    address: req.body.address,
    email: req.body.email,
    password: req.body.password,
    image: req.body.image,
  });
  profil
    .save()
    .then((profilSaved) => res.json(profilSaved))
    .catch((error) => res.json(error));
}

function getProfils(req, res) {
  const { profilId } = req.params;
  const updatedProfil = req.body;
  Profils.findById(
    { _id: profilId },
    updatedProfil,
    { new: true },
    (error, doc) => {
      if (error) {
        res.json({ message: 'could not get this market.' });
        return;
      }
      res.json(doc);
    }
  );
}

export { postProfils, getProfils };
