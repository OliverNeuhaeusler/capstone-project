import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { saveToLocalStorage, loadFromLocalStorage } from './lib/localStorage';
import styled from 'styled-components/macro';
import BurgerMenu from './BurgerMenu.js';
import MarketCard from './pages/MarktCard.js';
import MarketForm from './pages/MarktForm.js';

function App() {
  const [markets, setMarkets] = useState(loadFromLocalStorage('Markets') ?? []);

  function addComment(comment, marketToUpdate) {
    const updatedMarkets = markets.map((market) => {
      // @TODO: Replace .name with ._id later when markets are fetched from API / DB
      if (market.name === marketToUpdate.name) {
        market.comments.push(comment);
      }
      return market;
    });

    setMarkets(updatedMarkets);
  }

  useEffect(() => {
    saveToLocalStorage('Markets', markets);
  }, [markets]);

  function addMarket(market) {
    setMarkets([...markets, market]);
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
          <Route path="/market">
            {markets.map((market) => (
              <MarketCard market={market} onAddComment={addComment} />
            ))}
          </Route>
          <Route path="/favorites">Favoriten</Route>
          <Route path="/createmarket">
            <MarketForm onAddMarket={addMarket} />
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
