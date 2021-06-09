import styled from 'styled-components/macro';
import { useState } from 'react';
import RatingStar from '../components/Rating.js';

function MarktCard({ markt, onAddComment }) {
  const [comment, setComment] = useState('');

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onAddComment(comment, markt);
      setComment('');
    }
  }
  console.log(markt);
  console.log(1, comment);
  return (
    <Section>
      <h3>{markt.name}</h3>
      <p>{markt.street}</p>
      <p>{markt.address}</p>
      <p>{markt.description}</p>
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
      {markt.comments.map((comment, index) => (
        <>
          <Span key={index + comment}>{comment}</Span>
        </>
      ))}
      <Rating>
        <RatingStar />
      </Rating>
      <Button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href =
            'https://www.google.de/maps/dir///@48.6205166,10.4120485,14z';
        }}
      >
        Go to Maps
      </Button>
    </Section>
  );
}

export default MarktCard;

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

const Button = styled.button`
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
