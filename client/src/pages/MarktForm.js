import { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
<<<<<<< HEAD
import { validateForm } from '../lib/validation.js';
=======
import ImagePreview from '../components/imagePreview.js';
>>>>>>> main

export default function MarketForm({ onAddMarket }) {
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
<<<<<<< HEAD
  const [isError, setIsError] = useState(false);
=======

>>>>>>> main
  useEffect(() => {
    uploadImage(imageUploads);
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
    <div>
      <Form onSubmit={handleFormSubmit}>
        <h2>Markt erstellen.</h2>
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
<<<<<<< HEAD
        <ImageWrapper>
          {market.images.map((images, index) => (
            <Img key={index + images} src={images} />
          ))}
        </ImageWrapper>
=======
        <ImagePreview imageWidth={30} market={market} />
>>>>>>> main
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

const ImageWrapper = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0.5rem;
  justify-content: center;
  height: auto;
  align-items: center;
`;

const Img = styled.img`
  width: 30px;
  padding: 0.4rem;
`;

const ErrorBox = styled.div`
  background: hsl(340, 60%, 50%);
  color: hsl(340, 95%, 95%);
  padding: ${(props) => (props.isError ? '1.2rem' : 0)};
  border-radius: 0.5rem;
  opacity: ${(props) => (props.isError ? 1 : 0)};
  max-height: ${(props) => (props.isError ? '100%' : '1px')};
  transition: all 1s ease-in-out;
  font-size: ${(props) => (props.isError ? '1rem' : '1px')};
  font-weight: bold;
`;
