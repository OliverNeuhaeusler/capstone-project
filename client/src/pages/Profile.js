import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { loadToken } from '../lib/tokenStorage.js';

function ProfileCard({ loggedIn }) {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile));
  }, []);

  function getProfile() {
    return fetch('/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': loadToken(),
      },
    }).then((res) => res.json());
  }

  return (
    <Section>
      {loggedIn ? (
        <>
          <article>
            <h3>{profile.firstName}</h3>
            <h3>{profile.secondName}</h3>
          </article>
          <p>{profile.street}</p>
          <p>{profile.address}</p>
        </>
      ) : (
        <p>Bitte melde dich zuerst an.</p>
      )}
    </Section>
  );
}

const Section = styled.section`
  align-items: center;
  background: var(--PrimaryCard);
  border: groove 0.1rem var(--PrimaryBorder);
  border-radius: 1rem;
  color: hsl(37, 19%, 90%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  margin: 1rem auto;
  min-width: calc((100% -2rem) / 3);
  position: relative;
  width: 15rem;
  z-index: 1;

  article {
    display: flex;
  }
  h3 {
    padding-left: 0.5rem;
  }
`;

export default ProfileCard;
