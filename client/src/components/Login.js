import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import { saveToken } from '../lib/tokenStorage.js';
import logInUser from './loginUser.js';

export default function Login({ setLoggedIn }) {
  const [profile, setProfile] = useState({});

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    logInUser(profile)
      .then((result) => {
        if (result.message !== 'success') {
          alert('Falsche Passwort oder Email');
        } else {
          setLoggedIn(true);
          saveToken(result.token);
          history.push('/profile');
        }
      })
      .catch((error) => console.error(error.message));
  }

  const handleInputChange = (event) => {
    event.persist();
    setProfile((profile) => ({
      ...profile,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
        <article id="email">
          <label htmlFor="Email">Email:</label>
          <input
            id="Email"
            autoFocus
            name="email"
            type="email"
            value={profile.email}
            onChange={handleInputChange}
          />
        </article>
        <article id="password">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            value={profile.password}
            onChange={handleInputChange}
          />
        </article>
        <StyledButton onClick={handleSubmit}>Login</StyledButton>
      </LoginForm>
    </>
  );
}

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  left: 70%;
  top: 2.5%;

  article {
    padding: 1rem;
  }

  label {
    color: hsl(37, 19%, 90%);
    padding: 0.5rem;
  }
`;

const StyledButton = styled.button`
  color: hsl(20, 38%, 26%);
  background: hsl(37, 19%, 70%);
  border: 1px solid hsl(37, 19%, 70%);
  border-radius: 1.25rem;
  outline: none;
  cursor: pointer;
  padding: 0.3rem 0.7rem;
  margin: 0.313ewm;
`;
