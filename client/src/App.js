import { useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { saveToLocalStorage, loadFromLocalStorage } from './lib/localStorage';
import styled from 'styled-components/macro';
import Home from './pages/Home.js';
import BurgerMenu from './BurgerMenu.js';
import MarketCard from './pages/MarktCard.js';
import MarketForm from './pages/MarktForm.js';

function App() {
  const [markets, setMarkets] = useState(loadFromLocalStorage('Markets') ?? []);
  const [bookmarkedMarkets, setBookmarkedMarkets] = useState(
    loadFromLocalStorage('bookmarkedMarkets') ?? []
  );
  const [filteredMarkets, setFilteredMarkets] = useState([]);
  console.log(filteredMarkets);
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
    setFilteredMarkets(markets);
  }, [markets]);

  useEffect(() => {
    saveToLocalStorage('Markets', markets);
  }, [markets]);

  useEffect(() => {
    saveToLocalStorage('bookmarkedMarkets', bookmarkedMarkets);
  }, [bookmarkedMarkets]);

  function addMarket(market) {
    setMarkets([...markets, market]);
  }

  function toggleFav(clickedMarket) {
    isFavorite(clickedMarket)
      ? removeFromFav(clickedMarket)
      : addToFav(clickedMarket);
  }

  function addToFav(marketToAdd) {
    const bookmarkedMarket = markets.find(
      (market) => market.name === marketToAdd.name
    );
    setBookmarkedMarkets([...bookmarkedMarkets, bookmarkedMarket]);
  }

  function removeFromFav(marketToRemove) {
    const remainingMarkets = bookmarkedMarkets.filter(
      (market) => market.name !== marketToRemove.name
    );
    setBookmarkedMarkets(remainingMarkets);
  }

  function isFavorite(market) {
    return bookmarkedMarkets.some(
      (bookmarkedMarket) => bookmarkedMarket.name === market.name
    );
  }

  function searchedMarkets(event) {
    const inputField = event.target;
    const searchTerm = inputField.value;
    const filteredMarkets = markets.filter((market) => {
      return market.name
        .toLowerCase()
        .includes(
          searchTerm.toLowerCase() ||
            market.address.toLowerCase().includes(searchTerm.toLowerCase())
        );
    });
    setFilteredMarkets(filteredMarkets);
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
            <Home />
          </Route>
          <Route path="/market">
            <SearchboxInput
              type="text"
              placeholder="Suche hier deinen Markt."
              onChange={searchedMarkets}
            />
            {filteredMarkets.map((filteredMarkets) => (
              <MarketCard
                market={filteredMarkets}
                onAddComment={addComment}
                onAddToFav={toggleFav}
                isFavorite={isFavorite}
              />
            ))}
          </Route>
          <Route path="/favorites">
            {bookmarkedMarkets.map((market) => (
              <MarketCard
                market={market}
                onAddComment={addComment}
                onAddToFav={toggleFav}
                isFavorite={isFavorite}
              />
            ))}
          </Route>
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

const SearchboxInput = styled.input`
  display: block;
  margin: 1rem auto 0.8rem;
  width: 30%;
  min-width: 300px;
`;
