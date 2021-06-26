import styled from 'styled-components/macro';

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
        wünsche ich dir viel spaß beim suchen deines nächsten Marktes. Seid
        gegrüßt
      </p>
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
