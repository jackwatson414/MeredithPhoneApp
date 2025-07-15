import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { to: '/general', label: 'Feed' },
  { to: '/search', label: 'Search' },
  { to: '/notifications', label: 'Alerts' },
  { to: '/settings', label: 'Settings' },
];

const BottomTabBar: React.FC = () => {
  return (
    <nav className="fixed bottom-0 inset-x-0 md:hidden bg-white border-t shadow flex justify-around py-2 z-50">
      {tabs.map((t) => (
        <NavLink
          key={t.to}
          to={t.to}
          className={({ isActive }) =>
            `text-sm flex flex-col items-center ${isActive ? 'text-blue-600 font-medium' : 'text-gray-500'}`
          }
        >
          {t.label}
        </NavLink>
      ))}
    </nav>
  );
};

export default BottomTabBar; 