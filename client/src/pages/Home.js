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
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  flex-direction: column;
`;
