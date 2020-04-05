import { createGlobalStyle } from 'styled-components';
import useStats from '../utils/useStats';
import Stats from '../components/Stats';
import CountrySelector from '../components/CountrySelector';

const GlobalStyle = createGlobalStyle`
  html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  h1 {
    text-align: center;
  }
  h2 {
    text-align: center;
  }
`;

export default function IndexPage() {
  return (
    <div>
      <h1>R😷na App 🤒</h1>
        <h1>World Wide Cases</h1>
        <GlobalStyle />
      <Stats url="https://covid19.mathdro.id/api"></Stats>
      <CountrySelector></CountrySelector>
    </div>
  );
}