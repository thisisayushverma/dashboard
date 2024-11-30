import React from 'react';
import data from './task-data.json';

const TrackerHori = () => {
  return (
    <div style={{ border: "1px solid red" }} className="rounded-xl w-[537px]">
      <div className="text-[#00000080] font-semibold text-[14px] leading-[18px] mt-[25px] mb-[29px] mx-[25px]">
        Weakest Topics
      </div>
      {data.topics.weakest.map((topic, index) => (
        <div
          key={index}
          className="flex items-center bg-[#ffffff] justify-between mx-[25px] p-2 mb-4"
        >
          {/* Left Portion: Image */}
          <img
            src={topic.image}
            alt={topic.name}
            className="h-10 w-10 rounded-sm object-cover"
          />

          {/* Middle Portion: Name and Progress Bar */}
          <div className="flex-grow mx-4">
            <div className="text-lg font-bold text-black">{topic.name}</div>
            <div className="w-full bg-[#ffe1de] h-2 mt-1 rounded">
              <div
                className="bg-gradient-to-r from-[#ff9d36] to-[#ff6562] h-2 rounded"
                style={{ width: `${topic.correct_percentage}%` }}
              ></div>
            </div>
          </div>

          {/* Right Portion: Value */}
          <div className="text-sm font-medium flex gap-1">
            <b className="text-[#000000B2]">{topic.correct_percentage}%</b>
            <h4 className="text-[#000000B2]">Correct</h4>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackerHori;
