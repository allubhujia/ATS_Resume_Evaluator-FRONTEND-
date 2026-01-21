import React from 'react';

const ChartCard = ({ data = [] }) => {
  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-md rounded-2xl p-6 border border-white border-opacity-30 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-black">
          Monthly Applications
        </h3>
      </div>
      {!data.length && (
        <div className="flex-1 flex items-center justify-center text-black font-medium">
          No data available
        </div>
      )}
    </div>
  );
};
export default ChartCard;
