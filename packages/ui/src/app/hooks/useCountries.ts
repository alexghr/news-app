import useFetch from './useFetch';
import { GetCountriesApiResponse } from '@alexghr/news-common';

export default function useCountries() {
  return useFetch<GetCountriesApiResponse>('/api/v1/countries');
}
