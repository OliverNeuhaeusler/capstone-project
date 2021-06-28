import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { validateProfile } from '../lib/validation.js';
import registerUser from '../lib/registerUser.js';

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
  font-weight: bold;
  gap: 0.5rem;
  margin: auto;
  max-width: 25rem;
  padding: 0 2rem;
  text-align: center;

  input {
    margin-bottom: 0.3rem;
    padding: 0.5rem;
  }
`;

const Button = styled.button`
  border-radius: 0.4rem;
  border: none;
  background: ${(props) =>
    props.isPrimary ? 'var(--PrimaryButtonDark)' : 'var(--PrimaryButtonLight)'};
  color: ${(props) =>
    props.isPrimary ? 'hsl(37, 19%, 90%)' : 'hsl(37, 19%, 30%)'};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  padding: 1.5rem;
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  border-radius: 0.5rem;
  color: hsl(340, 95%, 95%);
  font-size: ${(props) => (props.isError ? '1rem' : '1px')};
  font-weight: bold;
  max-height: ${(props) => (props.isError ? '100%' : '1px')};
  opacity: ${(props) => (props.isError ? 1 : 0)};
  transition: all 1s ease-in-out;
  padding: ${(props) => (props.isError ? '1.2rem' : 0)};
`;
