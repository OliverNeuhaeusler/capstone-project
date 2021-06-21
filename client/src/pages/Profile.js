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
    </Section>
  );
}

export default ProfileCard;
