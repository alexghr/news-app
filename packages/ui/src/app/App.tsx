import React from 'react';
import styled from 'styled-components';
import { SelectedCountryProvider } from './context/SelectedCountryContext';
import CountrySelect from './components/CountrySelector';

const Element = styled.div`
  background-color: red;
`;

const App: React.FC = () => {
  return (
    <Element>
      <SelectedCountryProvider>
        <CountrySelect />
      </SelectedCountryProvider>
    </Element>
  );
}

export default App;