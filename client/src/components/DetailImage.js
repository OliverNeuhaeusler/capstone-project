import styled from 'styled-components/macro';
import { useState } from 'react';

export default function ImageGallery({ market, imageWidth }) {
  const [imageToShow, setImageToShow] = useState('');
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  const imageCards = market.images.map((image) => (
    <Img onClick={() => showImage(image)} src={image} width={imageWidth} />
  ));

  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  function showNext(e) {
    e.stopPropagation();
    let currentIndex = market.images.indexOf(imageToShow);
    if (currentIndex >= market.images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = market.images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  }

  function showPrev(e) {
    e.stopPropagation();
    let currentIndex = market.images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = market.images[currentIndex - 1];
      setImageToShow(nextImage);
    }
  }

  return (
    <>
      <div>{imageCards}</div>
      {lightboxDisplay ? (
        <LightBox id="lightbox" onClick={hideLightBox}>
          <StyledButton onClick={showPrev}>⭠</StyledButton>
          <LightBoxImg id="lightbox-img" src={imageToShow} />
          <StyledButton onClick={showNext}>⭢</StyledButton>
        </LightBox>
      ) : (
        ''
      )}
    </>
  );
}

const LightBoxImg = styled.img`
  object-fit: cover;
  max-width: 70%;
  min-width: 40%;
`;

const LightBox = styled.div`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  height: 100%;
  justify-content: space-between;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000000;
`;

const Img = styled.img`
  cursor: pointer;
  object-fit: cover;
  padding: 0.4rem;
  min-width: 70px;
`;

const StyledButton = styled.button`
  background: hsl(37, 19%, 70%);
  border: none;
  border-radius: 100vw;
  color: hsl(20, 38%, 26%);
  cursor: pointer;
  margin: 1rem 1rem;
  outline: none;
  padding: 0.5rem 1rem 0.4rem;
`;
