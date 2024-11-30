import React from "react";

const VerticalTracker = () => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const values = [50, 100, 150, 200, 250, 300, 350, 300, 250, 200, 150, 100]; // Dummy values

  return (
    <div className="w-[556px] h-[400px] p-[10px] flex flex-col items-center">
      {/* Y-Axis */}
      <div className="relative w-full h-full">
        {/* Y-axis labels */}
        {[0, 100, 200, 300, 400].map((val) => (
          <div
            key={val}
            className="absolute w-full text-gray-500 text-[12px]"
            style={{ bottom: `${(val / 400) * 100}%` }}
          >
            <span>{val}</span>
          </div>
        ))}

        {/* Data tracker bars */}
        {values.map((val, idx) => (
          <div
            key={idx}
            className="absolute w-[10px] bg-gradient-to-r from-[#1b59f8] to-transparent"
            style={{
              bottom: `${(val / 400) * 100}%`,
              height: `${(val / 400) * 100}%`,
              left: `${(idx / 11) * 100}%`, // Dynamic positioning for each month
            }}
          ></div>
        ))}
      </div>

      {/* X-Axis Labels */}
      <div className="flex w-full justify-between mt-2">
        {months.map((month) => (
          <span key={month} className="text-[12px] text-gray-600">
            {month}
          </span>
        ))}
      </div>
    </div>
  );
};

export default VerticalTracker;
