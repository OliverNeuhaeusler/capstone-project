import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import BurgerMenu from './BurgerMenu.js';
function App() {
  return (
    <div>
      <Header>
        <h1>Mittelalter-Märkte</h1>
      </Header>
      <main>
        <BurgerMenu />
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route path="/markt">Märkte</Route>
          <Route path="/favorites">Favoriten</Route>
          <Route path="/createmarkt">Markt erstellen</Route>
          <Route path="/profil">Profil</Route>
          <Route path="/contact">Kontakt</Route>
          <Route path="/impressum">Impressum</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;

const Header = styled.header`
  display: flex;

  h1 {
    display: flex;
    background: hsl(37, 48%, 38%);
    border: groove 0.5rem goldenrod;
    border-radius: 0.8rem;
    color: hsl(37, 19%, 70%);
    justify-content: center;
    left: 0;
    margin: 0 auto;
    padding: 1rem;
    position: fixed;
    top: 0;
    width: 100%;
  }
`;
