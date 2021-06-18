import { useHistory, useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Bookmarked from './components/Bookmark.js';
import BurgerMenu from './components/BurgerMenu.js';
import Headers from './components/Header.js';
import Home from './pages/Home.js';
import MarketForm from './pages/MarktForm.js';
import CreateProfile from './pages/CreateProfile.js';
import Searchbar from './components/Searchbar.js';
import { saveToLocalStorage, loadFromLocalStorage } from './lib/localStorage';

function App() {
  const [markets, setMarkets] = useState(loadFromLocalStorage('Markets') ?? []);
  const [profiles, setProfiles] = useState([]);
  const [bookmarkedMarkets, setBookmarkedMarkets] = useState(
    loadFromLocalStorage('bookmarkedMarkets') ?? []
  );
  const [filteredMarkets, setFilteredMarkets] = useState([]);

  console.log(1, profiles);

  useEffect(() => {
    fetch('http://localhost:4000/profils')
      .then((result) => result.json())
      .then((profileFromApi) => setProfiles(profileFromApi))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:4000/market')
      .then((result) => result.json())
      .then((marketFromApi) => setMarkets(marketFromApi))
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    saveToLocalStorage('Markets', markets);
    setFilteredMarkets(markets);
  }, [markets]);

  useEffect(() => {
    saveToLocalStorage('bookmarkedMarkets', bookmarkedMarkets);
  }, [bookmarkedMarkets]);

  function addProfile(profile) {
    fetch('http://localhost:4000/profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(profile),
    })
      .then((result) => result.json())
      .then((profile) => setProfiles([...profiles, profile]))
      .then()
      .catch((error) => console.error(error));
  }

  function addMarket(market) {
    fetch('http://localhost:4000/market', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(market),
    })
      .then((result) => result.json())
      .then((market) => setMarkets([...markets, market]))
      .catch((error) => console.error(error));
  }

  function toggleFav(clickedMarket) {
    isFavorite(clickedMarket)
      ? removeFromFav(clickedMarket)
      : addToFav(clickedMarket);
  }

  function addToFav(marketToAdd) {
    const bookmarkedMarket = markets.find(
      (market) => market._id === marketToAdd._id
    );
    setBookmarkedMarkets([...bookmarkedMarkets, bookmarkedMarket]);
  }

  function removeFromFav(marketToRemove) {
    const remainingMarkets = bookmarkedMarkets.filter(
      (market) => market._id !== marketToRemove._id
    );
    setBookmarkedMarkets(remainingMarkets);
  }

  function isFavorite(market) {
    return bookmarkedMarkets.some(
      (bookmarkedMarket) => bookmarkedMarket._id === market._id
    );
  }

  function searchMarketName(market, searchTerm) {
    return market.name.toLowerCase().includes(searchTerm.toLowerCase());
  }

  function searchMarketAddress(market, searchTerm) {
    return market.address.toLowerCase().includes(searchTerm.toLowerCase());
  }

  function searchedMarkets(event) {
    const inputField = event.target;
    const searchTerm = inputField.value;
    const filteredMarkets =
      searchTerm !== ''
        ? markets.filter(
            (market) =>
              searchMarketName(market, searchTerm) ||
              searchMarketAddress(market, searchTerm)
          )
        : markets;
    setFilteredMarkets(filteredMarkets);
  }

  function updateMarket(marketProperty, commentOrRating, marketToUpdate) {
    const upToDateMarkets = markets.filter(
      (market) => market._id !== marketToUpdate._id
    );
    markets.map((market) => {
      if (market._id === marketToUpdate._id) {
        market[marketProperty].push(commentOrRating);
        fetch('http://localhost:4000/market/' + marketToUpdate._id, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(marketToUpdate),
        })
          .then((result) => result.json())
          .then((updatedMarket) => {
            setMarkets([...upToDateMarkets, updatedMarket]);
          })
          .catch((error) => console.error(error));
      }
      return market;
    });
  }

  function addComment(comment, marketToUpdate) {
    updateMarket('comments', comment, marketToUpdate);
  }

  function addRating(rating, marketToUpdate) {
    updateMarket('rating', rating, marketToUpdate);
  }

  return (
    <div>
      <Headers />
      <main>
        <BurgerMenu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/market">
            <Searchbar
              filteredMarkets={filteredMarkets}
              searchedMarkets={searchedMarkets}
              addComment={addComment}
              addRating={addRating}
              toggleFav={toggleFav}
              isFavorite={isFavorite}
            />
          </Route>
          <Route path="/favorites">
            <Bookmarked
              bookmarkedMarkets={bookmarkedMarkets}
              addComment={addComment}
              addRating={addRating}
              toggleFav={toggleFav}
              isFavorite={isFavorite}
            />
          </Route>
          <Route path="/createmarket">
            <MarketForm onAddMarket={addMarket} />
          </Route>
          <Route path="/createProfile">
            <CreateProfile onAddProfile={addProfile} />
          </Route>
          <Route path="/profile"></Route>
          <Route path="/contact">Kontakt</Route>
          <Route path="/impressum">Impressum</Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
