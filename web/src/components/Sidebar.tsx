import React from 'react';
import { Link } from 'react-router-dom';

const dummyGroups = [
  { id: 'grade9', name: 'Grade 9' },
  { id: 'football', name: 'Football Team' },
  { id: 'robotics', name: 'Robotics Club' },
];

const Sidebar: React.FC = () => {
  return (
    <aside className="w-60 border-r border-gray-200 h-screen p-4">
      <h2 className="text-lg font-semibold mb-4">Groups</h2>
      <ul className="space-y-2">
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