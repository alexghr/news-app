import { Article, Country } from './models';

export type ApiResponse<T, E = never> = {
  status: 'success',
  data: T
} | (E extends never ? never : {
  status: 'error',
  error: E
});

export type GetCountriesApiResponse = ApiResponse<ReadonlyArray<Country>>;
export type GetHeadlinesApiResponse = ApiResponse<ReadonlyArray<Article>, 'bad_parameter' | 'upstream_error'>;