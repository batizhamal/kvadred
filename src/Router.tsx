import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { ContactsPage, LandingPage, MainPage, TeamPage } from '@app/pages';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/smeta" element={<MainPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/team" element={<TeamPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
