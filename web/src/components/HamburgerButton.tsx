import React from 'react';

type Props = {
  onClick: () => void;
};

const HamburgerButton: React.FC<Props> = ({ onClick }) => (
  <button
    className="md:hidden p-3 focus:outline-none"
    onClick={onClick}
    aria-label="Open menu"
  >
    <div className="space-y-1">
      <span className="block w-6 h-0.5 bg-gray-800"></span>
      <span className="block w-6 h-0.5 bg-gray-800"></span>
      <span className="block w-6 h-0.5 bg-gray-800"></span>
    </div>
  </button>
);

export default HamburgerButton; 