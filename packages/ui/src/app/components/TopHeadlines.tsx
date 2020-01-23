import React from 'react';
import { SelectedCountryContext } from '../context/SelectedCountryContext';
import useHeadlines from '../hooks/useHeadlines';
import styled from 'styled-components';
import LoadingIndicator from './LoadingIndicator';
import { mediaQuery, spacing } from '../const';
import { Container } from './Container';

const TopHeadlines: React.FC = () => {
  const { country } = React.useContext(SelectedCountryContext);
  const { data, loading, error } = useHeadlines(country);

  return (
    <Element>
      {loading && <LoadingIndicator />}
      {data && (
        <ArticleContainer>
          {data.map(({ url, urlToImage, title, description }) => (
            <ExternalLink href={url} key={url}>
              <Article>
                <Img src={urlToImage} />
                <Title>{title}</Title>
                <Description>{description}</Description>
              </Article>
            </ExternalLink>
          ))}
        </ArticleContainer>
      )}
      {error && <>There was an error loading your news. Try refreshing this page</>}
    </Element>
  );
};

export default TopHeadlines;

const Element = styled(Container)`
  margin: ${spacing.large} auto;

  @media ${mediaQuery.tablet} {
    margin: ${spacing.base};
  }

  @media ${mediaQuery.phone} {
    margin: ${spacing.small};
  }
`;

const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: ${spacing.large};

  @media ${mediaQuery.tablet} {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: ${spacing.base}
  }

  @media ${mediaQuery.phone} {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${spacing.small};
  }
`;

const ExternalLink = styled.a`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const Article = styled.article`
`;

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background-color: black;

  @media ${mediaQuery.tablet} {
    height: 150px;
  }

  @media ${mediaQuery.phone} {
    height: 100px;
  }
`;

const Title = styled.span`
  display: block;
  font-weight: bold;
  text-decoration: underline;
`;

const Description = styled.p`
`;