import { Article } from '@alexghr/news-common';
import got from 'got';
import { NEWS_API_KEY } from './config';

const NEWS_API_BASE_URL = new URL('https://newsapi.org/');
const TOP_HEADLINES = new URL('/v2/top-headlines', NEWS_API_BASE_URL);

type Html = string;

export async function getTopHeadlines(country: string, count = 5): Promise<ReadonlyArray<Article>> {
  const resp = await got.get<{
    status: 'ok',
    totalResults: number,
    articles: ReadonlyArray<Article>
  }>({
    url: TOP_HEADLINES.href,
    headers: {
      'x-api-key': NEWS_API_KEY
    },
    searchParams: new URLSearchParams({
      country,
      pageSize: String(count)
    }),
    responseType: 'json'
  });

  return resp.body.articles;
}
