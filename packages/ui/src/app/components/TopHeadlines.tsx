import React from 'react';
import { SelectedCountryContext } from '../context/SelectedCountryContext';
import useHeadlines from '../hooks/useHeadlines';
import styled from 'styled-components';
import LoadingIndicator from './LoadingIndicator';

const TopHeadlines: React.FC = () => {
  const { country } = React.useContext(SelectedCountryContext);
  const { data, loading, error } = useHeadlines(country);

  return (
    <Element>
      {loading && <LoadingIndicator />}
      {data && data.map(({ title }) => <Article>{title}</Article>)}
      {error && <>There was an error loading your news. Try refreshing this page</>}
    </Element>
  );
};

export default TopHeadlines;

const Element = styled.div`
  padding: 16px 0;
`;

const Article = styled.div``;