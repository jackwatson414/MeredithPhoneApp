import './index.css';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import ProfileSetup from './pages/ProfileSetup';
import Feed from './pages/Feed';
import AdminPanel from './pages/AdminPanel';

function App() {
  return (
    <Router>
      <div className="flex h-screen">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/profile" element={<ProfileSetup />} />
            <Route path="/feed/:groupId" element={<Feed />} />
            <Route path="/admin" element={<AdminPanel />} />

            {/* Default route */}
            <Route path="*" element={<Navigate to="/profile" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
