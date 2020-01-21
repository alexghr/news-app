import React from 'react';
import styled from 'styled-components';
import Select from './Select';
import { countries } from './countries';

const Element = styled.div`
  background-color: red;
`;

const App: React.FC = () => {
  const [country, selectCountry] = React.useState(countries[0].value);

  React.useEffect(() => {
    console.log('selected country %s', country);
  }, [country]);

  return (
    <Element>
      <Select options={countries} selected={country} onChange={selectCountry} />
    </Element>
  );
}

export default App;