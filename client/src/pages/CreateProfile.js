import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { validateProfile } from '../lib/validation.js';
import registerUser from '../components/registerUser.js';

export default function CreateProfile() {
  const initialProfileState = {
    firstName: '',
    secondName: '',
    street: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    image: [],
  };

  const [profile, setProfile] = useState(initialProfileState);
  const [isError, setIsError] = useState(false);

  const history = useHistory();
  function updateProfile(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setProfile({ ...profile, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    if (validateProfile(profile)) {
      registerUser(profile);
      setProfile(initialProfileState);
      setIsError(false);
      history.push('/profile');
    } else {
      setIsError(true);
    }
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <h2>Profil erstellen</h2>
        <ErrorBox data-testid="form-error-display" isError={isError}>
          <p>You have an error in your form.</p>
        </ErrorBox>
        <label htmlFor="firstName">Vorname: </label>
        <input
          type="text"
          name="firstName"
          onChange={updateProfile}
          value={profile.firstName}
        />
        <label htmlFor="secondName">Nachname:</label>
        <input
          type="text"
          name="secondName"
          onChange={updateProfile}
          value={profile.secondName}
        />
        <label htmlFor="street">Straße:</label>
        <input
          type="text"
          name="street"
          onChange={updateProfile}
          value={profile.street}
        />
        <label htmlFor="address"> PLZ / ORT: </label>
        <input
          type="text"
          name="address"
          onChange={updateProfile}
          value={profile.address}
        />
        <label htmlFor="email"> Email: </label>
        <input
          type="email"
          name="email"
          onChange={updateProfile}
          value={profile.email}
        />
        <label htmlFor="password"> Passwort </label>
        <input
          type="password"
          name="password"
          onChange={updateProfile}
          value={profile.password}
        />
        <Button isPrimary onClick={handleFormSubmit}>
          Profil erstellen.
        </Button>
        <Button type="reset" onClick={() => setProfile(initialProfileState)}>
          Reset
        </Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: auto;
  max-width: 25rem;
  label,
  legend {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  legend {
    margin-bottom: 0.5rem;
    padding: 0;
  }
  input,
  select {
    padding: 0.5rem;
    margin-bottom: 0.3rem;
  }

  img {
    width: 80px;
  }
`;

const Button = styled.button`
  padding: 1.5rem;
  border-radius: 0.4rem;
  border: none;
  background: ${(props) =>
    props.isPrimary ? 'hsl(158, 18%, 30%)' : 'hsla(158, 18%, 30%, 0.3)'};
  cursor: pointer;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  font-size: 1.2rem;
  color: ${(props) =>
    props.isPrimary ? 'hsl(37, 19%, 90%)' : 'hsl(37, 19%, 30%)'}; ;
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  color: hsl(340, 95%, 95%);
  padding: ${(props) => (props.isError ? '1.2rem' : 0)};
  border-radius: 0.5rem;
  opacity: ${(props) => (props.isError ? 1 : 0)};
  max-height: ${(props) => (props.isError ? '100%' : '1px')};
  transition: all 1s ease-in-out;
  font-size: ${(props) => (props.isError ? '1rem' : '1px')};
  font-weight: bold;
`;
