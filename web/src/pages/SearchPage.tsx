import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import { posts } from '../mock/data';

const SearchPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [mediaOnly, setMediaOnly] = useState(false);
  const [results, setResults] = useState(posts);

  const handleSearch = (q: string) => {
    setQuery(q);
    const qlc = q.toLowerCase();
    const filtered = posts.filter((p) => p.content.toLowerCase().includes(qlc));
    setResults(filtered);
  };

  return (
    <div className="p-6 pb-20">
      <h1 className="text-xl font-bold mb-4">Search</h1>
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full border rounded px-3 py-2 mb-4"
      />

      {/* Simple media-only toggle */}
      <label className="flex items-center gap-2 mb-4">
        <input
          type="checkbox"
          checked={mediaOnly}
          onChange={(e) => setMediaOnly(e.target.checked)}
        />
        Media only
      </label>

      {results.length === 0 && <p className="text-gray-500">No results.</p>}
      {results.map((p) => (
        <PostCard
          key={p.id}
          content={p.content}
          author={p.author}
          role={p.role}
          createdAt={p.createdAt}
          pinned={p.pinned}
        />
      ))}
    </div>
  );
};

export default SearchPage; 