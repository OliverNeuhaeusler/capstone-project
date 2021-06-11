import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import EmptyAxt from '../assets/RatingAxtEmpty.png';
import FullAxt from '../assets/RatingAxtFull.png';
import { saveToLocalStorage, loadFromLocalStorage } from '../lib/localStorage';

export default function RatingStar() {
  const [rating1, setRating1] = useState(loadFromLocalStorage('Rating') ?? []);

  useEffect(() => {
    saveToLocalStorage('Rating', rating1);
  }, [rating1]);

  function getDivide(rating1) {
    const sum = rating1.reduce((a, b) => a + b, 0);
    const divide = sum / rating1.length;
    return divide.toFixed(1);
  }

  function handleRatingOnClick(rate) {
    setRating1([...rating1, rate]);
  }
  console.log(1, rating1);
  return (
    <>
      <Rating
        emptySymbol={<img src={EmptyAxt} alt="" style={{ width: '2rem' }} />}
        fullSymbol={<img src={FullAxt} alt="" style={{ width: '2rem' }} />}
        initialRating={rating1}
        onClick={handleRatingOnClick}
      />
      <p>Rating: {rating1.length > 0 ? getDivide(rating1) : 0}/5</p>
    </>
  );
}
