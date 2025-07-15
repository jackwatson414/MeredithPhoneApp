import React from 'react';
import { useParams } from 'react-router-dom';
import { posts, groups } from '../mock/data';
import { useState } from 'react';
import PostCard from '../components/PostCard';

const Feed: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const [tagFilter, setTagFilter] = useState<string>('All');

  const filtered = posts.filter((p) => p.groupId === groupId);
  const data = groupId === 'general' ? posts : filtered;

  const tagOptions = ['All', 'Sports', 'Clubs', 'Grades', 'Events', 'STEM'];
  const tagFiltered = tagFilter === 'All' ? data : data.filter((p) => p.tags?.includes(tagFilter));
  const pinned = data.filter((p) => p.pinned);
  const normalAll = data.filter((p) => !p.pinned);
  const normal = tagFilter === 'All' ? normalAll : normalAll.filter((p) => p.tags?.includes(tagFilter));

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-2 capitalize">{groupId} Feed</h1>
      <div className="flex gap-2 overflow-x-auto mb-4 pb-1">
        {tagOptions.map((t) => (
          <button
            key={t}
            onClick={() => setTagFilter(t)}
            className={`px-3 py-1 rounded-full whitespace-nowrap text-sm border ${tagFilter === t ? 'bg-blue-600 text-white' : 'bg-white'}`}
          >
            {t}
          </button>
        ))}
      </div>
      {groupId !== 'general' && pinned.length > 0 && (
        <div className="mb-6">
          <h2 className="text-sm font-semibold mb-2">Pinned</h2>
          {pinned.map((p) => (
            <PostCard
              key={p.id}
              content={p.content}
              author={p.author}
              createdAt={p.createdAt}
              role={p.role}
              pinned={true}
            />
          ))}
        </div>
      )}

      {data.length === 0 ? (
        <div className="text-gray-500">No posts yet.</div>
      ) : (
        normal.map((p) => (
          <PostCard
            key={p.id}
            content={p.content}
            author={p.author}
            createdAt={p.createdAt}
            role={p.role}
            pinned={p.pinned}
          />
        ))
      )}
    </div>
  );
};

export default Feed; 