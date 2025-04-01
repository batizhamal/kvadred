import '@app/scss';
import './global.css';
import Router from './Router';
import { CompaniesProvider, HeaderProvider } from '@app/providers';

export const App = (): JSX.Element => {
  return (
    <HeaderProvider>
      <CompaniesProvider>
        <Router />
      </CompaniesProvider>
    </HeaderProvider>
  );
};
