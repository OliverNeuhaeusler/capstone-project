import { useState } from "react";
import styled from "styled-components/macro";

export default function Profil() {
    const initialProfilState = {
        firstName: '',
        secondName: '',
        street: '',
        address: '',
        email: '',
        password: '',
        confirmPassword: '',
        image: [],
    }

    const [profil, setProfil] = useState(initialProfilState);
    const [imageUploads, setImageUploads] = useState([]);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
      uploadImage(imageUploads);
    }, [imageUploads]);
  
    function updateProfil(event) {
      const fieldName = event.target.name;
      let fieldValue = event.target.value;
  
      setProfil({ ...profil, [fieldName]: fieldValue });
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
    <div>
      <Form onSubmit={handleFormSubmit}>
        <h2>Profil erstellen.</h2>
        <ErrorBox data-testid="form-error-display" isError={isError}>
          <p>You have an error in your form.</p>
        </ErrorBox>
        <label htmlFor="profilName">Name: </label>
        <input
          type="text"
          name="name"
          onChange={updateProfil}
          value={profil.firstName}
        />
        <label htmlFor="secondName">Nachname:</label>
        <input 
        type="text" 
        name="secondName" 
        onChange={updateProfil}
        value={profil.secondName} />
        <label htmlFor="street">Straße:</label>
        <input
          type="text"
          name="street"
          onChange={updateProfil}
          value={profil.street}
        />
        <label htmlFor="address"> PLZ / ORT </label>
        <input
          type="text"
          name="address"
          onChange={updateProfil}
          value={profil.address}
        />
        <label htmlFor="email"> Beschreibung </label>
        <input
          type="email"
          name="email"
          onChange={updateProfil}
          value={profil.email}
        />
        <label htmlFor="password"> Beschreibung </label>
        <input
          type="password"
          name="password"
          onChange={updateProfil}
          value={profil.password}
        />
        <label htmlFor="confirmPassword"> Beschreibung </label>
        <input
          type="password"
          name="confirmPassword"
          onChange={updateProfil}
          value={profil.confirmPassword}
        />
        <input
          type="file"
          multiple
          onChange={(e) => {
            setImageUploads(e.target.files);
          }}
        ></input>
        <ImageWrapper>
          {market.images.map((images, index) => (
            <Img key={index + images} src={images} />
          ))}
        </ImageWrapper>
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

}