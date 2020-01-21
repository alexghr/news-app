import React from 'react';
import styled from 'styled-components';
import Select from './Select';
import useCountries from './hooks/useCountries';

const Element = styled.div`
  background-color: red;
`;

const App: React.FC = () => {
  const { data: countries } = useCountries();
  const [country, setCountry] = React.useState<string | undefined>(undefined);
  const countrySelectItems = countries ? countries.map(({ id, name }) => ({ value: id, label: name })) : [];

  React.useEffect(() => {
    // set initial country after they get loaded
    if (countries) {
      setCountry(countries[0].id);
    }
  }, [countries]);

  return (
    <Element>
      <Select options={countrySelectItems} selected={country} onChange={setCountry} />
    </Element>
  );
}

export default App;