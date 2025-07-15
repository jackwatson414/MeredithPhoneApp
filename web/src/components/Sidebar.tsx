import React from 'react';
import { Link } from 'react-router-dom';
import { groups as dummyGroups } from '../mock/data';

const Sidebar: React.FC = () => {
  return (
    <aside className="w-60 border-r border-gray-200 h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Groups</h2>
      <ul className="space-y-2">
        <li>
          <Link to="/general" className="block px-3 py-2 rounded hover:bg-gray-100 font-medium">
            🏫 General Feed
          </Link>
        </li>
        {dummyGroups.map((g) => (
          <li key={g.id}>
            <Link
              to={`/feed/${g.id}`}
              className="block px-3 py-2 rounded hover:bg-gray-100"
            >
              {g.name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar; 