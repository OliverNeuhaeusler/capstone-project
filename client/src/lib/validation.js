const validatePassword = (password) =>
  password.match(
    /^(((?=\.*[a-z])(?=\.*[A-Z]))|((?=\.*[a-z])(?=.*[0-9]))|((?=\.*[A-Z])(?=\.*[0-9])))(?=\.{8,})/
  );
const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
const validateName = (name) => name.length >= 2;
const validateStreet = (street) =>
  /^([A-Za-zäöüßsd.,-]+?)\s*([A-Za-zäöüßsd.,-]*?)\s*(\w+)?$/.test(street);
const validateAddress = (address) => /(\d{5})\s*([A-Za-zäöüß])/.test(address);

const validateLogin = (login) =>
  validatePassword(login.password) && validateEmail(login.email);

const validateForm = (market) =>
  validateName(market.name) &&
  validateStreet(market.street) &&
  validateAddress(market.address);

export { validateLogin, validateForm };
