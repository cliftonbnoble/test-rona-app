import styled from 'styled-components';
import useStats from '../utils/useStats';

const StatGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;
const StatBlock = styled.div`
  background: #f2f2f2;
  font-size: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  display: grid;
  align-items: center;
  justify-items: center;
  text-align: center;
`;
function thousands_separators(num)
  {
    var num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  console.log(stats, loading, error);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;
  
  const death = stats.deaths.value
  const confirmed = stats.confirmed.value
  const recovered = stats.recovered.value
  const percent = death*100/confirmed

thousands_separators(confirmed)

  return (
    <StatGrid>
      <StatBlock>
        <h3>Confirmed:</h3>
        <span>{thousands_separators(confirmed)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Deaths:</h3>
        <span>{thousands_separators(death)}</span>
      </StatBlock>
      
      <StatBlock>
        <h3>Recovered:</h3>
        <span>{thousands_separators(recovered)}</span>
      </StatBlock>
      <StatBlock>
        <h3>Death Rate %:</h3>
        <span>{percent.toFixed(2)}%</span>
      </StatBlock>
    </StatGrid>
  );
}