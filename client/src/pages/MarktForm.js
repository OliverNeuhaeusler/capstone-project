import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { validateForm } from '../lib/validation.js';
import ImagePreview from '../components/imagePreview.js';

export default function MarketForm({ onAddMarket, loggedIn }) {
  const initialMarketState = {
    name: '',
    street: '',
    address: '',
    description: '',
    images: [],
    comments: [],
    rating: [],
  };

  const [market, setMarket] = useState(initialMarketState);
  const [imageUploads, setImageUploads] = useState([]);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    uploadImage(imageUploads);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUploads]);

  function updateMarket(event) {
    const fieldName = event.target.name;
    let fieldValue = event.target.value;

    setMarket({ ...market, [fieldName]: fieldValue });
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    if (validateForm(market)) {
      onAddMarket(market);
      setMarket(initialMarketState);
      setIsError(false);
    } else {
      setIsError(true);
    }
  }

  function uploadImage(imageUploads) {
    const fileListAsArray = Array.from(imageUploads);
    const imagesPromises = fileListAsArray.map((imageUpload) => {
      const formData = new FormData();

      formData.append('file', imageUpload);
      formData.append('upload_preset', 'idavh6zu');

      return fetch('https://api.cloudinary.com/v1_1/dtxy1yc95/image/upload', {
        method: 'PUT',
        body: formData,
      }).then((response) => response.json());
    });
    Promise.all(imagesPromises).then((imagesResults) => {
      const imageURLs = imagesResults.map(
        (imageResult) => imageResult.secure_url
      );
      setMarket({ ...market, images: imageURLs });
    });
  }

  return (
    <>
      {loggedIn ? (
        <div>
          <Form onSubmit={handleFormSubmit}>
            <h2>Markt erstellen</h2>
            <ErrorBox data-testid="form-error-display" isError={isError}>
              <p>You have an error in your form.</p>
            </ErrorBox>
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
            <input
              type="file"
              multiple
              onChange={(e) => {
                setImageUploads(e.target.files);
              }}
            ></input>
            <ImagePreview imageWidth={60} market={market} />
            <Button isPrimary onClick={handleFormSubmit}>
              Markt erstellen.
            </Button>
            <Button type="reset" onClick={() => setMarket(initialMarketState)}>
              Reset
            </Button>
          </Form>
        </div>
      ) : (
        <P>Bitte melde dich zuerst an.</P>
      )}
    </>
  );
}

const Form = styled.form`
  display: grid;
  gap: 0.5rem;
  margin: auto;
  max-width: 25rem;
  padding: 0 2rem;
  text-align: center;

  label {
    font-weight: bold;
  }

  input {
    padding: 0.5rem;
    margin-bottom: 0.3rem;
  }
`;

const Button = styled.button`
  background: ${(props) =>
    props.isPrimary ? 'var(--PrimaryButtonDark)' : 'var(--PrimaryButtonLight)'};
  border: none;
  border-radius: 0.4rem;
  color: ${(props) =>
    props.isPrimary ? 'hsl(37, 19%, 90%)' : 'hsl(37, 19%, 30%)'};
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: ${(props) => (props.isPrimary ? '600' : '100')};
  padding: 1.5rem;
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  border-radius: 0.5rem;
  color: hsl(340, 95%, 95%);
  font-size: ${(props) => (props.isError ? '1rem' : '1px')};
  font-weight: bold;
  max-height: ${(props) => (props.isError ? '100%' : '1px')};
  opacity: ${(props) => (props.isError ? 1 : 0)};
  padding: ${(props) => (props.isError ? '1.2rem' : 0)};
  transition: all 1s ease-in-out;
`;

const P = styled.p`
  align-items: center;
  background: var(--PrimaryCard);
  border: groove 0.1rem var(--PrimaryBorder);
  border-radius: 1rem;
  color: hsl(37, 19%, 90%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  margin: 1rem auto;
  min-width: calc((100% -2rem) / 3);
  padding: 1rem;
  position: relative;
  width: 15rem;
  z-index: 1;
`;
