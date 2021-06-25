import Profile from '../models/profile.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const register = (req, res, next) => {
  bcrypt.hash(req.body.password, 10, function (err, hashedPass) {
    if (err) {
      res.json({
        error: err,
      });
    }
    let profile = new Profile({
      firstName: req.body.firstName,
      secondName: req.body.secondName,
      street: req.body.street,
      address: req.body.address,
      email: req.body.email,
      password: hashedPass,
    });
    profile
      .save()
      .then((profile) => {
        res.json({
          message: 'success',
        });
      })
      .catch((error) => {
        console.error(error.message);
        res.json({
          message: 'Email already taken',
        });
      });
  });
};

const login = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  Profile.findOne({ email: email }).then((profile) => {
    if (profile) {
      bcrypt.compare(password, profile.password, function (err, result) {
        if (err) {
          res.json({
            error: err,
          });
        }
        if (result) {
          const token = jwt.sign(
            { email: profile.email, profileId: profile._id },
            process.env.TOKEN_S,
            {
              expiresIn: '1h',
            }
          );
          res.json({
            message: 'success',
            token,
          });
        } else {
          res.json({
            message: 'wrongPassword',
          });
        }
      });
    } else {
      res.json({
        message: 'noUser',
      });
    }
  });
};

export { register, login };
