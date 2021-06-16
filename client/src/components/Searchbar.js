import styled from 'styled-components/macro';
import MarketCard from '../pages/MarktCard.js';

export default function Searchbar({
  filteredMarkets,
  searchedMarkets,
  addComment,
  addRating,
  toggleFav,
  isFavorite,
}) {
  return (
    <>
      <SearchboxInput
        type="text"
        placeholder="Suche hier deinen Markt."
        onChange={searchedMarkets}
      />
      {filteredMarkets &&
        filteredMarkets.map((filteredMarket) => (
          <MarketCard
            market={filteredMarket}
            onAddComment={addComment}
            onAddRating={addRating}
            onAddToFav={toggleFav}
            isFavorite={isFavorite}
          />
        ))}
    </>
  );
}

const SearchboxInput = styled.input`
  display: block;
  margin: 1rem auto 0.8rem;
  width: 30%;
  min-width: 300px;
`;