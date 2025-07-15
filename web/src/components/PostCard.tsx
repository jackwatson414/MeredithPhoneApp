import React from 'react';

type Props = {
  content: string;
  author: string;
  createdAt: string;
  role?: string;
  pinned?: boolean;
};

const PostCard: React.FC<Props> = ({ content, author, createdAt, role, pinned }) => {
  const isNew = Date.now() - new Date(createdAt).getTime() < 1000 * 60 * 60 * 24; // 24h
  return (
    <div className="relative border rounded p-4 bg-white shadow-sm mb-4">
      {pinned && (
        <span className="absolute -top-2 left-2 bg-yellow-400 text-xs px-1 rounded">PINNED</span>
      )}
      {isNew && (
        <span className="absolute -top-2 right-2 bg-green-500 text-xs text-white px-1 rounded">NEW</span>
      )}
      <div className="text-sm text-gray-500 mb-1 flex items-center gap-2 flex-wrap">
        {new Date(createdAt).toLocaleString()} — {author}
        {role && (
          <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded-full uppercase">
            {role}
          </span>
        )}
      </div>
      <p className="text-gray-800 whitespace-pre-line">{content}</p>
    </div>
  );
};

export default PostCard; 