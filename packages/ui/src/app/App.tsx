import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { SelectedCountryProvider } from './context/SelectedCountryContext';
import CountrySelect from './components/CountrySelector';
import TopHeadlines from './components/TopHeadlines';
import { spacing } from './const';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <Element>
        <Main>
          <SelectedCountryProvider>
            <CountrySelect />
            <TopHeadlines />
          </SelectedCountryProvider>
        </Main>

        <Attribution>
          This website is powered by <a href="https://newsapi.org">NewsAPI.org</a>
        </Attribution>
      </Element>
    </>
  );
}

export default App;

const Element = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
`;

const Main = styled.main`
  flex-grow: 1;
  height: 100%;
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

const Attribution = styled.p`
  color: #666;
  text-align: center;
  margin-top: ${spacing.base};

  & > a {
    color: inherit;
  }
`;