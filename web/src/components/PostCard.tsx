import React from 'react';

type Props = {
  content: string;
  author: string;
  createdAt: string;
};

const PostCard: React.FC<Props> = ({ content, author, createdAt }) => {
  return (
    <div className="border rounded p-4 bg-white shadow-sm mb-4">
      <div className="text-sm text-gray-500 mb-1">
        {new Date(createdAt).toLocaleString()} — {author}
      </div>
      <p className="text-gray-800">{content}</p>
    </div>
  );
};

export default PostCard; 