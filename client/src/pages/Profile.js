import { useEffect, useState } from 'react';
import { loadToken } from '../lib/tokenStorage.js';

function ProfileCard() {
  const [profile, setProfile] = useState([]);
  console.log(1, profile);

  function getProfile() {
    return fetch('http://localhost:4000/profile', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'auth-token': loadToken(),
      },
    }).then((res) => res.json());
  }

  useEffect(() => {
    getProfile().then((profile) => setProfile(profile));
  }, []);

  return (
    <section>
      <h3>
        {profile.firstName}
        {profile.secondName}
      </h3>
      <p>{profile.street}</p>
      <p>{profile.address}</p>
    </section>
  );
}

export default ProfileCard;
