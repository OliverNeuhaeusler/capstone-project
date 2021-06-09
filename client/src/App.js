import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { saveToLocalStorage, loadFromLocalStorage } from './lib/localStorage';
import styled from 'styled-components/macro';
import BurgerMenu from './BurgerMenu.js';
import MarktCard from './pages/MarktCard.js';
import MarktForm from './pages/MarktForm.js';

function App() {
  const [markts, setMarkts] = useState(loadFromLocalStorage('Märkte') ?? []);

  function addComment(comment, marktToUpdate) {
    const updatedMarkets = markts.map((markt) => {
      // @TODO: Replace .name with ._id later when markets are fetched from API / DB
      if (markt.name === marktToUpdate.name) {
        markt.comments.push(comment);
      }
      return markt;
    });

    setMarkts(updatedMarkets);
  }

  useEffect(() => {
    saveToLocalStorage('Märkte', markts);
  }, [markts]);

  function addMarkt(markt) {
    setMarkts([...markts, markt]);
  }

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
          <Route path="/markt">
            {markts.map((markt) => (
              <MarktCard markt={markt} onAddComment={addComment} />
            ))}
          </Route>
          <Route path="/favorites">Favoriten</Route>
          <Route path="/createmarkt">
            <MarktForm onAddMarkt={addMarkt} />
          </Route>
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
  z-index: 100;

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
