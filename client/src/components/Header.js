import styled from 'styled-components/macro';
import Login from './Login.js';
export default function Headers({ profiles }) {
  return (
    <Header>
      <h1>Mittelalter-Märkte</h1>
      <Login profiles={profiles} />
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
