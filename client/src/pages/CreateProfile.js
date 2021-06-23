import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
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

  const [isSuccess, setIsSuccess] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userExist, setUserExist] = useState(false);

  function updateProfile(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setProfile({ ...profile, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    registerUser(profile)
      .then((result) => {
        if (result.message === 'success') {
          setIsSuccess(true);
        } else if (result.message === 'Email already taken') {
          setUserExist(true);
        }
      })
      .catch(() => setUserExist(false));
    if (validateProfile(profile)) {
      /* onAddProfile(profile); */
      setProfile(initialProfileState);
      setIsError(false);
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
        <label htmlFor="confirmPassword"> Passwort bestätigen: </label>
        <input
          type="password"
          name="confirmPassword"
          onChange={updateProfile}
          value={profile.confirmPassword}
        />

        <Button isPrimary onClick={handleFormSubmit}>
          Profil erstellen.
        </Button>
        <Button type="reset" onClick={() => setProfile(initialProfileState)}>
          Reset
        </Button>
      </Form>
      {isSuccess && (
        <StyledBackgroundModal>
          <StyledModal>
            <p>Sign Up successful</p>
            <StyledButton onClick={() => setIsRegistered(true)}>
              I Dare
            </StyledButton>
          </StyledModal>
        </StyledBackgroundModal>
      )}
      {isRegistered && <Redirect to="/profile" />}

      {userExist && (
        <StyledBackgroundModal>
          <StyledModal>
            <p>Email taken!</p>
            <StyledButton onClick={() => setIsError(true)}>
              I Pussy Out
            </StyledButton>
          </StyledModal>
        </StyledBackgroundModal>
      )}
      {isError && <Redirect to="/" />}
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

const StyledBackgroundModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledModal = styled.div`
  color: #fff;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5);
  height: 20%;
  width: 50%;
  display: flex;
  justify-content: center;
  border-radius: 20px;
  align-items: center;
  flex-direction: column;
`;

const StyledButton = styled.button`
  color: #fbfcfd;
  background: transparent;
  border: 1px solid #fbfcfd;
  border-radius: 20px;
  outline: none;
  cursor: pointer;
  padding: 10px 25px;
  margin: 5px;
`;
