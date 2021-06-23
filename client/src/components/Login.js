import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import { saveToken, deleteToken } from '../lib/tokenStorage.js';
import logInUser from './loginUser.js';

export default function Login() {
  const [profile, setProfile] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [changePage, setChangePage] = useState(false);
  const [wrongData, setWrongData] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    logInUser(profile)
      .then((result) => {
        if (result.message !== 'success') {
          setWrongData(true);
        } else {
          saveToken(result.token);
          setIsSuccess(true);
        }
      })
      .catch(() => setWrongData(true));
  }

  const handleInputChange = (event) => {
    event.persist();
    setProfile((profile) => ({
      ...profile,
      [event.target.name]: event.target.value,
    }));
  };

  function logOut() {
    deleteToken();
    setIsLoggedOut(true);
  }

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
        {isSuccess && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>Login successful</p>
              <StyledButton onClick={() => setLoggedIn(true)}>
                I like
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {loggedIn && <Redirect to="/profile" />}
        {wrongData && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>User or Password wrong</p>
              <StyledButton onClick={() => setIsError(true)}>
                Try it again
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {isError && <Redirect to="/" />}
        <StyledButton onClick={logOut}>Logout</StyledButton>
        {isLoggedOut && (
          <StyledBackgroundModal>
            <StyledModal>
              <p>Logout successful</p>
              <StyledButton onClick={() => setChangePage(true)}>
                Komme bald wieder
              </StyledButton>
            </StyledModal>
          </StyledBackgroundModal>
        )}
        {changePage && <Redirect to="/profile" />}
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

const StyledBackgroundModal = styled.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

const StyledModal = styled.div`
  color: hsl(37, 19%, 70%);
  background: hsl(20, 38%, 26%);
  height: 20%;
  width: 50%;
  display: flex;
  justify-content: center;
  border-radius: 1.25rem;
  align-items: center;
  flex-direction: column;
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
