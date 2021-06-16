const validatePassword = (password) =>
  password.includes(
    '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})'
  );
const validateEmail = (email) =>
  email.includes(
    "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/"
  );
const validateName = (name) => name.length >= 2;
const validateStreet = (street) =>
  street.includes(
    '/^([a-zäöüßsd.,-]+?)s*([ds]+(?:s?[-|+/]s?d+)?s*[a-z]?)?s*(d{5})s*(.+)?$/i'
  );
const validateAddress = (address) =>
  address.includes('d{5}sw.s(\bw*\bs){1,2}w*.');

const validateLogin = (login) =>
  validatePassword(login.password) && validateEmail(login.email);

export default validateLogin;
