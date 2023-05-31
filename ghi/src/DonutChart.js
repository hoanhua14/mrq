import React from 'react';

const DonutChart = ({ percentage }) => {
  const strokeDasharray = `${percentage} ${100 - percentage}`;

  return (
    <div className="relative w-24 h-24">
      <svg viewBox="0 0 36 36" className="w-full h-full">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="3.8"
          fill="none"
          cx="18"
          cy="18"
          r="15.91549430918954"
        />
        <circle
          className="text-blue-500 stroke-current"
          strokeWidth="3.8"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          fill="none"
          cx="18"
          cy="18"
          r="15.91549430918954"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-lg font-bold">{percentage}%</span>
      </div>
    </div>
  );
};

export default DonutChart;
