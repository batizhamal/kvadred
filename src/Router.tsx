import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import {
  ContactsPage,
  FindCompanyPage,
  LandingPage,
  MainPage,
  MarketplacePage,
  SmetaPage,
} from '@app/pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/landing" element={<LandingPage />} />
        {/*temporary*/}
        <Route path="/smeta" element={<SmetaPage />} />
        <Route path="/find-company" element={<FindCompanyPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
