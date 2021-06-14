import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <LoginForm>
      <form onSubmit={handleSubmit}>
        <article size="lg" controlId="email">
          <label htmlFor="Email">Email</label>
          <input
            id="Email"
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </article>
        <article size="lg" controlId="password">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </article>
        <button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </button>
      </form>
    </LoginForm>
  );
}

const LoginForm = styled.section`
  display: fles;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
