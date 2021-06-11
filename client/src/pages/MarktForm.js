import { useState } from 'react';
import styled from 'styled-components/macro';
export default function MarketForm({ onAddMarket }) {
  const initialMarketState = {
    name: '',
    street: '',
    address: '',
    description: '',
    images: [],
    comments: [],
  };

  const [market, setMarket] = useState(initialMarketState);

  function updateMarket(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setMarket({ ...market, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    onAddMarket(market);
    setMarket(initialMarketState);
  }

  return (
    <div>
      <Form onSubmit={handleFormSubmit}>
        <h2>Markt erstellen.</h2>
        <label htmlFor="marketName">Markt Name</label>
        <input
          type="text"
          name="name"
          onChange={updateMarket}
          value={market.name}
        />
        <label htmlFor="street">Straße</label>
        <input
          type="name"
          name="street"
          onChange={updateMarket}
          value={market.street}
        />
        <label htmlFor="address"> PLZ / ORT </label>
        <input
          type="text"
          name="address"
          onChange={updateMarket}
          value={market.address}
        />
        <label htmlFor="description"> Beschreibung </label>
        <input
          type="text"
          name="description"
          onChange={updateMarket}
          value={market.description}
        />
        <Button isPrimary onClick={handleFormSubmit}>
          Markt erstellen.
        </Button>
        <Button type="reset" onClick={() => setMarket(initialMarketState)}>
          Reset
        </Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: auto;
  max-width: 25rem;
  label,
  legend {
    font-weight: bold;
    span {
      font-weight: normal;
    }
  }
  legend {
    margin-bottom: 0.5rem;
    padding: 0;
  }
  input,
  select {
    padding: 0.5rem;
    margin-bottom: 0.3rem;
  }

  img {
    width: 80px;
  }
`;

const Button = styled.button`
  padding: 1.5rem;
  border-radius: 0.4rem;
  border: none;
  background: ${(props) =>
    props.isPrimary ? 'hsl(158, 18%, 30%)' : 'hsla(158, 18%, 30%, 0.3)'};
  cursor: pointer;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  font-size: 1.2rem;
  color: ${(props) =>
    props.isPrimary ? 'hsl(37, 19%, 90%)' : 'hsl(37, 19%, 30%)'}; ;
`;
