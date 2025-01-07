import { useMemo } from 'react';

export interface HeaderItem {
  label: string;
  path: string;
}

type ReturnType = {
  routes: HeaderItem[];
};

export function useHeader(): ReturnType {
  const routes = useMemo(
    () => [
      {
        label: 'Главная',
        path: '/',
      },
      {
        label: 'Смета',
        path: '/smeta',
      },
      {
        label: 'Команда',
        path: '/team',
      },
      {
        label: 'Контакты',
        path: '/contacts',
      },
    ],
    []
  );

  return {
    routes,
  };
}
