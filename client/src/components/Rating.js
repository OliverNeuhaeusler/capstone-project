import React, { useState } from 'react';
import Rating from 'react-rating';

export default function RatingStar() {
  const [rating1, setRating1] = useState(0);
  return (
    <>
      <Rating initialRating={rating1} onClick={(rate) => setRating1(rate)} />
      <p>Rating: {rating1}</p>
    </>
  );
}
