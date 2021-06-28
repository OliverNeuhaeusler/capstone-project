import styled from 'styled-components/macro';
import HomeImage from '../assets/MittelaltermarktApp.jpeg';
function Home() {
  return (
    <Section>
      <h2>Seied Willkommen Mittelalterfan.</h2>
      <p>
        Hier findest du alle Mittelaltermärkte mit Bewertungen der Besucher,
        Bilder und kurze Infos zum Markt.
      </p>
      <p>
        Falls ein Markt noch nicht mit dabei ist füget ihn doch gerne hinzu. Nun
        wünsche ich dir viel Spaß beim suchen deines nächsten Marktes. Seid
        gegrüßt
      </p>
      <Img src={HomeImage} alt="" />
    </Section>
  );
}

export default Home;

const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
  padding: 1rem;
  text-align: center;
`;

const Img = styled.img`
  min-width: 20%;
  width: 50%;
`;
