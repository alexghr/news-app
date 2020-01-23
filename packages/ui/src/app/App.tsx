import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { SelectedCountryProvider } from './context/SelectedCountryContext';
import CountrySelect from './components/CountrySelector';
import TopHeadlines from './components/TopHeadlines';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Element>
        <SelectedCountryProvider>
          <CountrySelect />
          <TopHeadlines />
        </SelectedCountryProvider>
      </Element>
    </>
  );
}

export default App;

const Element = styled.div`
`;

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 16px;
  }
`;