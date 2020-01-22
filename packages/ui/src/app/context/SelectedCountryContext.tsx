import React from 'react';

export type SelectedCountryContext = {
  country: undefined | string;
  setCountry: (id: string) => void;
}

export const SelectedCountryContext = React.createContext<SelectedCountryContext>({
  country: undefined,
  setCountry: () => undefined
});

export const SelectedCountryProvider: React.FC = ({ children }) => {
  const [country, setCountry] = React.useState<string | undefined>(undefined);

  return (
    <SelectedCountryContext.Provider value={{ country, setCountry }}>
      {children}
    </SelectedCountryContext.Provider>
  );
}