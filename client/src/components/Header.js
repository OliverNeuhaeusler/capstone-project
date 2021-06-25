import styled from 'styled-components/macro';
import Login from './Login.js';
export default function Headers({ loggedIn, setLoggedIn, onLogOut }) {
  return (
    <Header>
      <h1>Mittelalter-Märkte</h1>
      {loggedIn ? (
        <StyledButton onClick={onLogOut}>Logout</StyledButton>
      ) : (
        <Login loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      )}
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  position: fixed;
  z-index: 100;
  background: hsl(37, 48%, 38%);
  border: groove 0.5rem goldenrod;
  border-radius: 0.8rem;
  color: hsl(37, 19%, 70%);
  justify-content: center;
  left: 0;
  margin: 0 auto;
  padding: 1rem;
  top: 0;
  width: 100%;

  h1 {
    margin: 0;
    padding: 0;
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
  position: fixed;
  left: 90%;
  top: 3.5%;
`;
