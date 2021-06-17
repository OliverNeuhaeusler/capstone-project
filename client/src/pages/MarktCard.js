import styled from 'styled-components/macro';
import Comments from '../components/Comments.js';
import ImagePreview from '../components/imagePreview.js';
import RatingStar from '../components/Rating.js';
import Manus from '../assets/manuscript.png';

function MarketCard({
  market,
  onAddToFav,
  isFavorite,
  onAddComment,
  onAddRating,
}) {
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
      <ImagePreview imageWidth={60} market={market} />
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
  display: flex;
  background: hsla(142, 30%, 25%, 0.6);
  border: groove 0.1rem goldenrod;
  border-radius: 1rem;
  color: hsl(37, 19%, 90%);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: auto;
  width: 15rem;
  min-width: calc((100% -2rem) / 3);
  margin: 1rem auto;
  position: relative;
  z-index: 1;

  p {
    margin: 0.1rem;
    text-align: center;
    padding: 0 1rem;
  }
`;

const Rating = styled.span`
  margin: 0.6rem;
  z-index: 0;
`;

const Button = styled.a`
  padding: 0.6rem;
  border-radius: 0.4rem;
  border: none;
  background: hsl(158, 10%, 20%);
  cursor: pointer;
  font-weight: 600;
  font-size: 1rem;
  color: hsl(37, 19%, 95%);
  margin: 0.5rem;
`;

<<<<<<< HEAD
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
  width: 60px;
  padding: 0.4rem;
`;

=======
>>>>>>> main
const Bookmark = styled.img`
  width: 30px;
  opacity: ${(props) => (props.isFavorite ? '1' : '0.5')};
  position: absolute;
  right: 3%;
  top: -3%;
  cursor: pointer;
`;
