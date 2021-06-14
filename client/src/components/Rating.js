import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import EmptyAxt from '../assets/RatingAxtEmpty.png';
import FullAxt from '../assets/RatingAxtFull.png';
import { saveToLocalStorage, loadFromLocalStorage } from '../lib/localStorage';

export default function RatingStar({ market, onAddRating }) {
  const [rating, setRating] = useState(loadFromLocalStorage('Rating') ?? []);
  useEffect(() => {
    saveToLocalStorage('Rating', rating);
  }, [rating]);

  function getDivide(rating) {
    const sum = rating.reduce((a, b) => a + b, 0);
    const divide = sum / rating.length;
    return divide.toFixed(1);
  }

  function handleRatingOnClick(rate) {
    onAddRating(rating, market);
    setRating([...rating, rate]);
  }

  return (
    <>
      <Rating
        emptySymbol={<img src={EmptyAxt} alt="" style={{ width: '2rem' }} />}
        fullSymbol={<img src={FullAxt} alt="" style={{ width: '2rem' }} />}
        initialRating={rating}
        onClick={handleRatingOnClick}
      />
      <p>Rating: {rating.length > 0 ? getDivide(rating) : 0}/5</p>
    </>
  );
}
