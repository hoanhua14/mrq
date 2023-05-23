import React from 'react';

const StyledButton = ({ text, onClick }) => {
  return (
    <button
      className="group relative inline-block focus:outline-none focus:ring"
      onClick={onClick}
    >
      <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>

      <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
        {text}
      </span>
    </button>
  );
};

export default StyledButton;
