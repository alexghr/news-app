import { GetHeadlinesApiResponse } from '@alexghr/news-common';
import useFetch from './useFetch';

export default function useHeadlines(country?: string) {
  const searchParams = country ? String(new URLSearchParams({ country })) : '';

  return useFetch<GetHeadlinesApiResponse>(`/api/v1/headlines?${searchParams}`, {
    skip: !country
  });
}
