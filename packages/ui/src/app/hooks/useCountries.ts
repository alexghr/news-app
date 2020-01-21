import React from 'react';

type State = {
  data: ReadonlyArray<{ id: string, name: string }>;
  loading: false;
} | { data: undefined, loading: true };

export default function useCountries(): State {
  const [state, setState] = React.useState<State>({
    data: undefined,
    loading: true
  });

  React.useEffect(() => {
    fetch('/api/v1/countries')
      .then(r => r.json())
      .then(data => {
        setState({ data, loading: false });
      });
  }, []);

  return state;
}
