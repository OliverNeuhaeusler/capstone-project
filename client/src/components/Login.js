import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components/macro';
import logInUser from '../lib/loginUser.js';
import { saveToken } from '../lib/tokenStorage.js';

export default function Login({ setLoggedIn, getProfile }) {
  const [profile, setProfile] = useState([]);

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
          getProfile();
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
        <label htmlFor="Email">Email:</label>
        <input
          id="Email"
          autoFocus
          name="email"
          type="email"
          value={profile.email}
          onChange={handleInputChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          value={profile.password}
          onChange={handleInputChange}
        />
        <StyledButton onClick={handleSubmit}>Login</StyledButton>
      </LoginForm>
    </>
  );
}

const LoginForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  article {
    padding: 1rem;
  }

  label {
    color: hsl(37, 19%, 90%);
    padding: 0.5rem;
  }
`;

const StyledButton = styled.button`
  background: hsl(37, 19%, 70%);
  border: 1px solid hsl(37, 19%, 70%);
  border-radius: 1.25rem;
  color: hsl(20, 38%, 26%);
  cursor: pointer;
  margin: 1rem 1rem;
  outline: none;
  padding: 0.3rem 0.7rem;
`;
