import React from 'react';
import styled from 'styled-components';
import { SelectedCountryProvider } from './context/SelectedCountryContext';
import CountrySelect from './components/CountrySelector';
import TopHeadlines from './components/TopHeadlines';

const App: React.FC = () => {
  return (
    <Element>
      <SelectedCountryProvider>
        <CountrySelect />
        <TopHeadlines />
      </SelectedCountryProvider>
    </Element>
  );
}

export default App;

const Element = styled.div`
  max-width: 64rem;
  margin: auto;
`;