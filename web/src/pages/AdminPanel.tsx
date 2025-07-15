import React, { useState } from 'react';
import { groups } from '../mock/data';

const AdminPanel: React.FC = () => {
  const [content, setContent] = useState('');
  const [groupId, setGroupId] = useState(groups[0].id);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Post scheduled (mock)');
    setContent('');
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-xl font-bold mb-4">Create Post</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium mb-1">Group</label>
          <select
            className="w-full border rounded px-3 py-2"
            value={groupId}
            onChange={(e) => setGroupId(e.target.value)}
          >
            {groups.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Content</label>
          <textarea
            className="w-full border rounded px-3 py-2 h-32"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AdminPanel; 