import React from 'react';
import { ApiResponseOk, ApiResponseError } from '@alexghr/news-common';

type State<T> = | {
  data: T extends ApiResponseOk<infer B> ? B : never
  loading: false;
  error: undefined;
} | {
  data: undefined,
  loading: true,
  error: undefined
} | {
  data: undefined,
  loading: false,
  error: 'unknown_error' | (T extends ApiResponseError<infer E> ? E : never)
};

type Options = { skip: boolean };

export default function useFetch<T extends (ApiResponseOk<any> | ApiResponseError<any>)>(url: string, opts?: Options): State<T> {
  const [state, setState] = React.useState<State<T>>({
    data: undefined,
    loading: true,
    error: undefined
  });

  React.useEffect(() => {
    // just skip for now
    if (opts?.skip) {
      return;
    }

    // we need to reset the loading state
    // e.g. if we already have data loaded for one country
    // and we change to a different one, reset the loading state
    if (!state.loading) {
      setState({ data: undefined, loading: true, error: undefined });
    }

    const ctrl = new AbortController();

    fetch(url, {
      signal: ctrl.signal
    })
      .then(r => r.json())
      .then(resp => {
        if (isApiResponse(resp)) {
          if (resp.status === 'success') {
            setState({ data: (resp as ApiResponseOk<any>).data, loading: false, error: undefined });
          } else {
            setState({ data: undefined, loading: false, error: (resp as ApiResponseError<any>).error });
          }
        }
      })
      .catch(err => {
        console.error('API response error: %o', err);
        setState({ data: undefined, loading: false, error: 'unknown_error' });
      });

    return () => ctrl.abort();
  }, [url, opts?.skip]);

  return state;
}

function isApiResponse(obj: any): obj is ApiResponseOk<any> | ApiResponseError<any> {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  return 'status' in obj && (obj.status === 'success' || obj.status === 'error');
}