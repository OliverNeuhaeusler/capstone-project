import { useState } from 'react';
import styled from 'styled-components';

export default function RenderImanges(pics, onUpdateImages) {
  const [images, setImages] = useState([]);

  function fileSelectHandler(e) {
    console.log(e.target.files);
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      console.log(fileArray);
      onUpdateImages(pics);
      setImages((prevImages) => prevImages.concat(fileArray));
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
    }
  }

  function renderImages(source) {
    return source.map((photo) => {
      return <img src={photo} key={photo} alt="" />;
    });
  }

  return (
    <>
      <input type="file" multiple id="file" onChange={fileSelectHandler} />
      <label htmlFor="file"></label>
      <Span>{renderImages(images)}</Span>
    </>
  );
}

const Span = styled.span`
  width: 100px;
`;
