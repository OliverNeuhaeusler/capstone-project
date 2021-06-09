import React, { useState } from 'react';
import Rating from 'react-rating';
import EmptyAxt from '../assets/RatingAxtEmpty.png';
import FullAxt from '../assets/RatingAxtFull.png';
export default function RatingStar() {
  const [rating1, setRating1] = useState(0);
  return (
    <>
      <Rating
        emptySymbol={<img src={EmptyAxt} alt="" style={{ width: '2rem' }} />}
        fullSymbol={<img src={FullAxt} alt="" style={{ width: '2rem' }} />}
        initialRating={rating1}
        onClick={(rate) => setRating1(rate)}
      />
      <p>Rating: {rating1}</p>
    </>
  );
}
