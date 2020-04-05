import { useState } from 'react';
import useStats from '../utils/useStats';
import Stats from './Stats';
import styled from 'styled-components';

const StatGrid = styled.div`
  display: grid;
  // grid-template-columns: repeat(1, 1fr);
  grid-gap: 1rem;
  justify-items: center;
`;

export default function CountrySelector() {
  const { stats: countries, loading, error } = useStats(
    'https://covid19.mathdro.id/api/countries'
  );
  const [selectedCountry, setSelectedCountry] = useState('USA');
  if (loading) return <p>Loading...</p>;
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  let oldStructure = {
    countries: {},
    iso3: {}
    };

    for (let country of countries.countries) {
      oldStructure.countries[country.name] = country.iso2;
      oldStructure.iso3[country.iso2] = country.iso3;
    }
  

  return (
    <div>
      <StatGrid>
      <h2>Currently Showing {selectedCountry}</h2>
      <select
        onChange={e => {
          setSelectedCountry(e.target.value);
        }}
      >
        {Object.entries(oldStructure.countries).map(([country, code]) => (
          <option
            selected={selectedCountry === oldStructure.iso3[code]}
            key={code}
            defaultValue={oldStructure.iso3[code]}
          >
            {country}
          </option>
        ))}
      </select>
      </StatGrid>
      <Stats
        url={`https://covid19.mathdro.id/api/countries/${selectedCountry}`}
      ></Stats>
    </div>
  );
}