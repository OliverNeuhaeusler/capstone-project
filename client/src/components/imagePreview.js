import styled from 'styled-components/macro';

export default function ImagePreview({ market, imageWidth }) {
  return (
    <ImageWrapper>
      {market.images.map((image, index) => (
        <Img width={imageWidth} key={index + image} src={image} />
      ))}
    </ImageWrapper>
  );
}

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
  padding: 0.4rem;
`;
