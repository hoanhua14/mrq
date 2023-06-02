import React from 'react';

const DonutChart = ({ percentage }) => {
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className="relative w-34 h-34 dashboard-font-bold">
      <svg viewBox="0 0 50 50" className="w-full h-full">
        <circle
          className="text-gray-200 stroke-current"
          strokeWidth="4.8"
          fill="none"
          cx="25"
          cy="25"
          r={radius}
        />
        <circle
          className="text-blue-500 stroke-current"
          strokeWidth="4.8"
          strokeDasharray={strokeDasharray}
          strokeLinecap="round"
          fill="none"
          cx="25"
          cy="25"
          r={radius}
          transform="rotate(-90 25 25)"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-6xl font-bold text-green-600 font-sans">{percentage}%</span>
      </div>
    </div>
  );
};

export default DonutChart;
