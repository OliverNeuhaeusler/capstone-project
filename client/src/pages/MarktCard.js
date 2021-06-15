import styled from 'styled-components/macro';
import { useState } from 'react';
import RatingStar from '../components/Rating.js';

function MarketCard({ market, onAddComment, onAddRating }) {
  const [comment, setComment] = useState('');

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onAddComment(comment, market);
      setComment('');
    }
  }

  return (
    <Section>
      <h3>{market.name}</h3>
      <p>{market.street}</p>
      <p>{market.address}</p>
      <p>{market.description}</p>
      <p>Bilder</p>
      <label htmlFor="comment">Kommentare</label>
      <Comment>
        <CommentCloud>
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </CommentCloud>
      </Comment>
      {market.comments.map((comment, index) => (
        <>
          <Span key={index + comment}>{comment}</Span>
        </>
      ))}
      <Rating>
        <RatingStar onAddRating={onAddRating} market={market} />
      </Rating>
      <Button
        href={
          'https://maps.google.de/maps?q=' +
          encodeURI(market.street) +
          ',' +
          encodeURI(market.address)
        }
        target="_blank"
      >
        Go to Maps
      </Button>
    </Section>
  );
}

export default MarketCard;

const Section = styled.section`
  display: flex;
  background: hsla(142, 30%, 25%, 0.6);
  border: groove 0.1rem goldenrod;
  border-radius: 1rem;
  color: hsl(37, 19%, 90%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  width: 15rem;
  min-width: calc((100% -2rem) / 3);
  margin: 1rem auto;
  position: relative;
  z-index: 1;

  p {
    margin: 0.1rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const Comment = styled.section`
  display: inline-flex;
  flex-basis: content;
  gap: 0.2rem;
  font-family: sans-serif;
  border: 2px groove goldenrod;
  border-radius: 0.6rem;
  padding: 0.5rem;

  input {
    display: inline-flex;
    padding: 0.5rem;
    margin: 0.4rem;
  }
`;
const Span = styled.span`
  margin: 0.5rem;
  background: hsl(37, 48%, 38%);
  border: groove 0.1rem goldenrod;
  border-radius: 0.8rem;
  color: hsl(37, 19%, 90%);
  padding: 0.5rem;
  border-radius: 0.3rem;
`;

const CommentCloud = styled.article`
  display: inline-flex;
  flex-wrap: wrap;
`;

const Rating = styled.span`
  margin: 0.6rem;
  z-index: 0;
`;

const Button = styled.a`
  padding: 0.6rem;
  border-radius: 0.4rem;
  border: none;
  background: hsl(158, 10%, 20%);
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: hsl(37, 19%, 95%);
  margin: 0.5rem;
`;
