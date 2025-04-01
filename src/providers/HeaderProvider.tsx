import React, { createContext, useContext, useMemo, useState } from 'react';

export interface HeaderItem {
  label: string;
  path: string;
  badge?: string;
}

type HeaderContextType = {
  routes: HeaderItem[];
  updateCompanyNumber: (num: number) => void;
};

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export const HeaderProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [companyNumber, setCompanyNumber] = useState(0);

  const routes = useMemo(
    () => [
      { label: 'Главная', path: '/' },
      { label: 'Смета', path: '/smeta' },
      { label: 'Команда', path: '/team' },
      { label: 'Контакты', path: '/contacts' },
      {
        label: 'Сравнение',
        path: '/compare',
        badge: companyNumber > 0 ? companyNumber.toString() : undefined,
      },
    ],
    [companyNumber]
  );

  const updateCompanyNumber = (num: number) => {
    setCompanyNumber(num);
  };

  return (
    <HeaderContext.Provider value={{ routes, updateCompanyNumber }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = (): HeaderContextType => {
  const context = useContext(HeaderContext);
  if (!context) {
    throw new Error('headerProvider must be used within a HeaderProvider');
  }
  return context;
};
