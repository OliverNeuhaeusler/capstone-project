import styled from 'styled-components/macro';

export default function Headers() {
  return (
    <Header>
      <h1>Mittelalter-Märkte</h1>
    </Header>
  );
}

const Header = styled.header`
  background: hsl(37, 48%, 38%);
  border: groove 0.5rem goldenrod;
  border-radius: 0.8rem;
  color: hsl(37, 19%, 70%);
  display: flex;
  justify-content: center;
  left: 0;
  margin: 0 auto;
  padding: 1rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  h1 {
    margin: 0;
    padding: 0;
  }
`;
