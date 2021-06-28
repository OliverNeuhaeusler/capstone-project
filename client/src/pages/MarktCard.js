/* import { useState } from 'react'; */
import styled from 'styled-components/macro';
import Comments from '../components/Comments.js';
import ImageGallery from '../components/DetailImage.js';
import RatingStar from '../components/Rating.js';
import Manus from '../assets/manuscript.png';

function MarketCard({
  market,
  onAddToFav,
  isFavorite,
  onAddComment,
  onAddRating,
}) {
  /*  const [detailImage, setDetailImage] = useState(true); */
  return (
    <Section>
      <Bookmark
        onClick={() => onAddToFav(market)}
        src={Manus}
        alt="bookmark this"
        isFavorite={isFavorite(market)}
      />
      <h3>{market.name}</h3>
      <p>{market.street}</p>
      <p>{market.address}</p>
      <p>{market.description}</p>
      <ImageGallery market={market} imageWidth={60} />
      <label htmlFor="comment">Kommentare</label>
      <Comments market={market} onAddComment={onAddComment} />
      <Rating>
        <RatingStar onAddRating={onAddRating} market={market} />
      </Rating>
      <Button
        href={
          'https://maps.google.de/maps?q=' +
          encodeURI(market.street) +
          ',' +
          encodeURI(market.address)
        }
        target="_blank"
      >
        Go to Maps
      </Button>
    </Section>
  );
}

export default MarketCard;

const Section = styled.section`
  align-items: center;
  background: var(--PrimaryCard);
  border: groove 0.1rem goldenrod;
  border-radius: 1rem;
  color: hsl(37, 19%, 90%);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  justify-content: center;
  margin: 1rem auto;
  min-width: 15rem;
  width: 40%;
  position: relative;
  text-align: center;
  z-index: 1;

  p {
    margin: 0.1rem;
    padding: 0 1rem;
    text-align: center;
  }
`;

const Rating = styled.span`
  margin: 0.6rem;
  z-index: 0;
`;

const Button = styled.a`
  background: hsl(158, 10%, 20%);
  border-radius: 0.4rem;
  border: none;
  color: hsl(37, 19%, 95%);
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  margin: 0.5rem auto 1rem;
  padding: 0.6rem;
`;

const Bookmark = styled.img`
  cursor: pointer;
  opacity: ${(props) => (props.isFavorite ? '1' : '0.5')};
  position: absolute;
  right: 3%;
  top: -2%;
  width: 1.875rem;
`;
