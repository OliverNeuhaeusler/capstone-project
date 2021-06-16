import { useState } from 'react';
import styled from 'styled-components/macro';

export default function Comments({ market, onAddComment }) {
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
    <>
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
    </>
  );
}

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
