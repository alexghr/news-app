import React from 'react';
import styled from 'styled-components';
import Select from './Select';
import useCountries from '../hooks/useCountries';
import { SelectedCountryContext } from '../context/SelectedCountryContext';

const CountrySelect: React.FC = () => {
  const { data: countries } = useCountries();
  const { country, selectCountry } = React.useContext(SelectedCountryContext);
  const countrySelectItems = countries ? countries.map(({ id, name }) => ({ value: id, label: name })) : [];

  React.useEffect(() => {
    // set initial country after they get loaded
    if (countries && !country) {
      setCountry(countries[0].id);
    }
  }, [countries]);

  return (
    <Element>
      Country: <Select options={countrySelectItems} selected={country} onChange={selectCountry} />
    </Element>
  );
};

export default CountrySelect;

const Element = styled.div`
  background-color: #ddbbaa;
  font-size: 1.5rem;
  padding: 16px 8px ;
`;