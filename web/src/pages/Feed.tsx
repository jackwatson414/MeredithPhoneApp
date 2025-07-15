import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../mock/data';
import PostCard from '../components/PostCard';

const Feed: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const filtered = posts.filter((p) => p.groupId === groupId);
  const data = groupId === 'general' ? posts : filtered;
  const pinned = data.filter((p) => p.pinned);
  const normal = data.filter((p) => !p.pinned);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 capitalize">{groupId} Feed</h1>
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