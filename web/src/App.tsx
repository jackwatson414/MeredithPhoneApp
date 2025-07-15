import './index.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProfileSetup from './pages/ProfileSetup';
import Feed from './pages/Feed';
import AdminPanel from './pages/AdminPanel';
import { useState } from 'react';
import HamburgerButton from './components/HamburgerButton';
import BottomTabBar from './components/BottomTabBar';
import SearchPage from './pages/SearchPage';
import NotificationsPage from './pages/NotificationsPage';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <Router>
      <div className="flex flex-col h-screen">
        {/* Top bar with hamburger */}
        <header className="flex items-center justify-between px-4 py-2 border-b md:hidden">
          <HamburgerButton onClick={() => setDrawerOpen(true)} />
          <h1 className="font-bold">MeredithPhoneApp</h1>
          <div />
        </header>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div
            className={`fixed inset-y-0 left-0 w-60 bg-white border-r transform transition-transform duration-200 z-40 md:static md:translate-x-0 ${drawerOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}
            onClick={() => setDrawerOpen(false)}
          >
            <Sidebar />
          </div>

          {/* Overlay */}
          {drawerOpen && (
            <div
              className="fixed inset-0 bg-black/30 z-30 md:hidden"
              onClick={() => setDrawerOpen(false)}
            />
          )}

          {/* Main content */}
          <div className="flex-1 overflow-y-auto pb-14 md:pb-0">
            <Routes>
              <Route path="/profile" element={<ProfileSetup />} />
              <Route path="/feed/:groupId" element={<Feed />} />
              <Route path="/general" element={<Feed />} />
              <Route path="/admin" element={<AdminPanel />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/settings" element={<SettingsPage />} />

              {/* Default route */}
              <Route path="*" element={<Navigate to="/profile" replace />} />
            </Routes>
          </div>
        </div>

        {/* Bottom Tab Bar */}
        <BottomTabBar />
      </div>
    </Router>
  );
}

export default App;
