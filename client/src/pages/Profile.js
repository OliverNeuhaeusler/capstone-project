<<<<<<< HEAD
import { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components/macro';
import { loadToken, deleteToken } from '../lib/tokenStorage.js';

function ProfileCard() {
  const [profile, setProfile] = useState([]);
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const [changePage, setChangePage] = useState(false);
  console.log(6, isLoggedOut);
  console.log(7, changePage);
  useEffect(() => {
    getProfile().then((profile) => setProfile(profile));
  }, []);

  function getProfile() {
    return fetch('http://localhost:4000/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': loadToken(),
      },
    }).then((res) => res.json());
  }

  function logOut() {
    deleteToken();
    setIsLoggedOut(true);
  }

  return (
    <Section>
      <article>
        <h3>{profile.firstName}</h3>
        <h3>{profile.secondName}</h3>
      </article>
      <p>{profile.street}</p>
      <p>{profile.address}</p>
      <StyledButton isPrimary onClick={logOut}>
        Logout
      </StyledButton>
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
      {changePage && <Redirect to="/" />}
=======
import styled from 'styled-components/macro';

function ProfileCard({}) {
  return (
    <Section>
      <h3>
        {profile.firstName}
        {profile.secondName}
      </h3>
      <p>{profile.street}</p>
      <p>{profile.address}</p>
>>>>>>> main
    </Section>
  );
}

<<<<<<< HEAD
const Section = styled.section`
  display: flex;
  background: hsla(142, 30%, 25%, 0.6);
  border: groove 0.1rem goldenrod;
  border-radius: 1rem;
  color: hsl(37, 19%, 90%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  width: 15rem;
  min-width: calc((100% -2rem) / 3);
  margin: 1rem auto;
  position: relative;
  z-index: 1;

  article {
    display: flex;
  }
  h3 {
    padding-left: 0.5rem;
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
  color: ${(props) =>
    props.isPrimary ? 'hsl(20, 38%, 26%)' : 'hsl(37, 19%, 70%)'};
  background: transparent;
  border: ${(props) =>
    props.isPrimary
      ? '0.1rem solid hsl(20, 38%, 26%)'
      : '0.1rem solid hsl(37, 19%, 70%)'};
  border-radius: 1.25rem;
  outline: none;
  cursor: pointer;
  padding: 0.625rem 1.563rem;
  margin: 0.313rem;
`;

=======
>>>>>>> main
export default ProfileCard;
