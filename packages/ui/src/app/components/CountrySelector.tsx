import React from 'react';
import styled from 'styled-components';
import useCountries from '../hooks/useCountries';
import { SelectedCountryContext } from '../context/SelectedCountryContext';
import { mediaQuery, spacing } from '../const';
import { Container } from './Container';

const CountrySelect: React.FC = () => {
  const { data: countries } = useCountries();
  const { country, selectCountry } = React.useContext(SelectedCountryContext);

  React.useEffect(() => {
    // set initial country after they get loaded
    if (countries && !country) {
      selectCountry(countries[0].id);
    }
  }, [countries]);

  return (
    <Element>
      <TabContainer>
        {countries?.map(({ id, name }) => (
          <Tab key={id} onClick={() => selectCountry(id)} selected={country === id}>{name}</Tab>
        ))}
      </TabContainer>
    </Element>
  );
};

export default CountrySelect;

const backgroundColor = '#dba';
const selectedColor = '#b98';

const Element = styled.div`
  background-color: ${backgroundColor};
`;

const TabContainer = styled(Container)`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;

  @media ${mediaQuery.phone} {
    flex-flow: column;
  }
`;

const Tab = styled.div<{ selected: boolean }>`
  width: 100%;
  flex-grow: 1;
  padding: ${spacing.base} ${spacing.small};
  text-align: center;

  border: 1px solid transparent;
  border-top-left-radius: ${spacing.base};
  border-top-right-radius: ${spacing.base};
  background-color: ${({ selected }) => selected ? selectedColor : backgroundColor};

  cursor: ${({ selected }) => selected ? 'default' : 'pointer'};

  font-size: 1.15rem;
  @media ${mediaQuery.tablet} {
    font-size: 1rem;
  }
`;