import styled from 'styled-components/macro';
import { useState } from 'react';
import RatingStar from '../components/Rating.js';

function MarktCard({ markt, comments, onAddComment }) {
  const [comment, setComment] = useState('');

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      onAddComment(comment);
      setComment('');
    }
  }
  console.log(markt);
  console.log(1, comment);
  return (
    <Section>
      <h3>{markt.name}</h3>
      <p>{markt.street}</p>
      <p>{markt.adress}</p>
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
      {comments &&
        comments.map((comment, index) => (
          <>
            <Span key={index + comment}>{comment}</Span>
          </>
        ))}
      <Rating>
        <RatingStar />
      </Rating>
    </Section>
  );
}

export default MarktCard;

const Section = styled.section`
  display: flex;
  border: groove 0.1rem goldenrod;
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
