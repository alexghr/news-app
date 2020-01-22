import React from 'react';
import styled from 'styled-components';
import Select from './Select';
import useCountries from '../hooks/useCountries';
import { SelectedCountryContext } from '../context/SelectedCountryContext';

const Element = styled.div`
`;

const CountrySelect: React.FC = () => {
  const { data: countries } = useCountries();
  const { country, setCountry } = React.useContext(SelectedCountryContext);
  const countrySelectItems = countries ? countries.map(({ id, name }) => ({ value: id, label: name })) : [];

  React.useEffect(() => {
    // set initial country after they get loaded
    if (countries && !country) {
      setCountry(countries[0].id);
    }
  }, [countries]);

  return (
    <Element>
      <Select options={countrySelectItems} selected={country} onChange={setCountry} />
    </Element>
  );
}

export default CountrySelect;