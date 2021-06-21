const validatePassword = (password) =>
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(
    password
  );
const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
const validateName = (name) => name.length >= 2;
const validateStreet = (street) =>
  /^([A-Za-zäöüßsd.,-]+?)\s*([A-Za-zäöüßsd.,-]*?)\s*(\w+)?$/.test(street);
const validateAddress = (address) => /(\d{5})\s*([A-Za-zäöüß])/.test(address);

const validateProfile = (profil) =>
  validatePassword(profil.password) &&
  validateEmail(profil.email) &&
  validateName(profil.firstName) &&
  validateName(profil.secondName) &&
  validateStreet(profil.street) &&
  validateAddress(profil.address);

const validateForm = (market) =>
  validateName(market.name) &&
  validateStreet(market.street) &&
  validateAddress(market.address);

export { validateProfile, validateForm };
