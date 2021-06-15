import Rating from 'react-rating';
import EmptyAxt from '../assets/RatingAxtEmpty.png';
import FullAxt from '../assets/RatingAxtFull.png';

export default function RatingStar({ market, onAddRating }) {
  function getDivide(rating) {
    const sum = rating.reduce((a, b) => a + b, 0);
    const divide = sum / rating.length;
    return divide.toFixed(1);
  }

  function handleRatingOnClick(rate) {
    onAddRating(rate, market);
  }

  return (
    <>
      <Rating
        emptySymbol={<img src={EmptyAxt} alt="" style={{ width: '2rem' }} />}
        fullSymbol={<img src={FullAxt} alt="" style={{ width: '2rem' }} />}
        initialRating={market.rating.length > 0 ? getDivide(market.rating) : 0}
        onClick={handleRatingOnClick}
      />
      <p>Rating: {market.rating.length > 0 ? getDivide(market.rating) : 0}/5</p>
    </>
  );
}
