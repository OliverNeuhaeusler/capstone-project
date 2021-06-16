import MarketCard from '../pages/MarktCard.js';

export default function Bookmarked({
  bookmarkedMarkets,
  addComment,
  addRating,
  toggleFav,
  isFavorite,
}) {
  return (
    <>
      {bookmarkedMarkets.map((market) => (
        <MarketCard
          market={market}
          onAddComment={addComment}
          onAddRating={addRating}
          onAddToFav={toggleFav}
          isFavorite={isFavorite}
        />
      ))}
    </>
  );
}
