import compose from 'koa-compose';
import route from 'koa-route';
import { getTopHeadlines } from './news-api';
import { Middleware } from 'koa';
import { GetCountriesApiResponse, GetHeadlinesApiResponse } from '@alexghr/news-common';

const getCountries: Middleware = ktx => {
  const resp: GetCountriesApiResponse = {
    status: 'success',
    data: [
      {
        id: 'gb',
        name: 'United Kingdom'
      },
      {
        id: 'us',
        name: 'United States'
      },
      {
        id: 'fr',
        name: 'France'
      },
      {
        id: 'au',
        name: 'Australia'
      },
      {
        id: 'in',
        name: 'India'
      }
    ]
  };

  ktx.status = 200;
  ktx.body = resp;
};

const getHeadlines: Middleware = async ktx => {
  const country = ktx.URL.searchParams.get('country');

  if (!country) {
    const resp: GetHeadlinesApiResponse = { status: 'error', error: 'bad_parameter' };
    ktx.status = 400;
    ktx.body = resp;
    return;
  }

  try {
    const articles = await getTopHeadlines(country);
    const resp: GetHeadlinesApiResponse = {
      status: 'success',
      data: articles
    }

    ktx.status = 200;
    ktx.body = resp;
  } catch (err) {
    console.error('Failed to get top headlines for country=%s: %o', country, err);

    const resp: GetHeadlinesApiResponse = {
      status: 'error',
      error: 'upstream_error'
    }

    ktx.status = 500;
    ktx.body = resp;
  }
};

export default function api() {
  const base = '/api/v1';

  return compose([
    route.get(`${base}/countries`, getCountries),
    route.get(`${base}/headlines`, getHeadlines)
  ]);
}