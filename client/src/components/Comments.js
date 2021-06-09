import { useState } from 'react';
import styled from 'styled-components/macro';

export default function Comment({ comments }) {
  const [comment, setComment] = useState('');

  function handleChange(event) {
    setComment(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      setComment('');
    }
  }
  console.log(1, comment);
  return (
    <>
      <label htmlFor="comment">Kommentare</label>
      <Tag>
        <TagCloud>
          {comments &&
            comments.map((comment, index) => (
              <>
                <span key={index + comment}>{comment}</span>
              </>
            ))}
          <input
            type="text"
            name="comment"
            value={comment}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
        </TagCloud>
      </Tag>
    </>
  );
}

const Tag = styled.section`
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

  span {
    margin: 0.2rem;
    background: hsl(37, 48%, 38%);
    color: hsl(37, 19%, 70%);
    padding: 0.3rem;
    border-radius: 0.3rem;
  }
`;

const TagCloud = styled.article`
  display: inline-flex;
  flex-wrap: wrap;
`;
