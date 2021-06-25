import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Bookmarked from './components/Bookmark.js';
import BurgerMenu from './components/BurgerMenu.js';
import Headers from './components/Header.js';
import Searchbar from './components/Searchbar.js';
import Burger from './components/Burger/Burger.js';
import { theme } from './components/Burger/Theme/theme.js';
import Home from './pages/Home.js';
import MarketForm from './pages/MarktForm.js';
import CreateProfile from './pages/CreateProfile.js';
import ProfileCard from './pages/Profile.js';
import { saveToLocalStorage, loadFromLocalStorage } from './lib/localStorage';
import { deleteToken } from './lib/tokenStorage.js';

function App() {
  const [markets, setMarkets] = useState(loadFromLocalStorage('Markets') ?? []);
  const [bookmarkedMarkets, setBookmarkedMarkets] = useState(
    loadFromLocalStorage('bookmarkedMarkets') ?? []
  );
  const [filteredMarkets, setFilteredMarkets] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [open, setOpen] = useState(false);

  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:5000/market')
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

  function addMarket(market) {
    fetch('http://localhost:5000/market', {
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
        fetch('http://localhost:5000/market/' + marketToUpdate._id, {
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
  function logOut() {
    deleteToken();
    setLoggedIn(false);
    history.push('/');
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Headers
          onLogOut={logOut}
          loggedIn={loggedIn}
          setLoggedIn={setLoggedIn}
        />
        <main>
          <Burger open={open} setOpen={setOpen} />
          <BurgerMenu open={open} setOpen={setOpen} />
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
              <MarketForm onAddMarket={addMarket} loggedIn={loggedIn} />
            </Route>
            <Route path="/createProfile">
              <CreateProfile />
            </Route>
            <Route path="/profile">
              <ProfileCard loggedIn={loggedIn} />
            </Route>
            <Route path="/contact">Kontakt</Route>
            <Route path="/impressum">Impressum</Route>
          </Switch>
        </main>
      </ThemeProvider>
    </div>
  );
}

export default App;
