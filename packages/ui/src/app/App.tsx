import React from 'react';
import styled from 'styled-components';
import { SelectedCountryProvider } from './context/SelectedCountryContext';
import CountrySelect from './components/CountrySelector';
import TopHeadlines from './components/TopHeadlines';

const Element = styled.div`
  background-color: red;
`;

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