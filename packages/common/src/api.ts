import { Article, Country } from './models';

export type ApiResponseOk<T> = {
  status: 'success',
  data: T
};

export type ApiResponseError<E> = {
  status: 'error',
  error: E
};

export type GetCountriesApiResponse = ApiResponseOk<ReadonlyArray<Country>>;
export type GetHeadlinesApiResponse = ApiResponseOk<ReadonlyArray<Article>> | ApiResponseError<'bad_parameter' | 'upstream_error'>;