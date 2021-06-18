import React, { useState } from 'react';
import styled from 'styled-components/macro';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <LoginForm onSubmit={handleSubmit}>
        <article id="email">
          <label htmlFor="Email">Email:</label>
          <input
            id="Email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </article>
        <article id="password">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </article>
        <button type="submit" onClick={handleSubmit}>
          Login
        </button>
      </LoginForm>
    </>
  );
}

const LoginForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  left: 72%;
  top: 2.5%;

  article {
    padding: 1rem;
  }

  label {
    color: hsl(37, 19%, 90%);
    padding: 0.5rem;
  }
`;
