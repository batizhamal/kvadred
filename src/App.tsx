import '@app/scss';
import './global.css';
import Router from './Router';
import { HeaderProvider } from './providers/HeaderProvider.tsx';

export const App = (): JSX.Element => {
  return (
    <HeaderProvider>
      <Router />
    </HeaderProvider>
  );
};
