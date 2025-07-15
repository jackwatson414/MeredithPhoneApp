import React from 'react';
import { useParams } from 'react-router-dom';
import { posts } from '../mock/data';
import PostCard from '../components/PostCard';

const Feed: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const filtered = posts.filter((p) => p.groupId === groupId);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4 capitalize">{groupId} Feed</h1>
      {filtered.length === 0 ? (
        <div className="text-gray-500">No posts yet.</div>
      ) : (
        filtered.map((p) => (
          <PostCard
            key={p.id}
            content={p.content}
            author={p.author}
            createdAt={p.createdAt}
          />
        ))
      )}
    </div>
  );
};

export default Feed; 