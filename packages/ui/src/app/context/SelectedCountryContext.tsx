import React from 'react';

export type SelectedCountryContext = {
  country: undefined | string;
  selectCountry: (id: string) => void;
}

export const SelectedCountryContext = React.createContext<SelectedCountryContext>({
  country: undefined,
  selectCountry: () => undefined
});

export const SelectedCountryProvider: React.FC = ({ children }) => {
  const [country, setCountry] = React.useState<string | undefined>(() => {
    if (typeof location !== 'undefined') {
      const searchParams = new URLSearchParams(location.search);
      return searchParams.get('country') || undefined;
    }

    return undefined;
  });

  function selectCountry(country: string) {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('country', country);
    history.pushState(null, '', location.pathname + '?' + String(searchParams));

    setCountry(country);
  }

  return (
    <SelectedCountryContext.Provider value={{ country, selectCountry }}>
      {children}
    </SelectedCountryContext.Provider>
  );
}