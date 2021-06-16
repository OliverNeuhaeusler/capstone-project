import MarketCard from '../pages/MarktCard.js';

export default function Bookmarked({ bookmarkedMarkets }) {
  {
    bookmarkedMarkets.map((market) => <MarketCard />);
  }
}
