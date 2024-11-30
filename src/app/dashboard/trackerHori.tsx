import React from 'react';

type ProgressBarComponentProps = {
  imageSrc: string; // Path or URL for the image
  name: string; // Label or name for the item
  value: number; // Progress value (out of 100)
};

const TrackerHori: React.FC<ProgressBarComponentProps> = ({
  imageSrc,
  name,
  value,
}) => {
  return (
    <div className="flex items-center bg-[#ffffff] justify-between w-full p-2 border rounded-[2px]">
      {/* Left Portion: Image */}
      <img
        src={imageSrc}
        alt={name}
        className=" h-10 rounded-sm object-cover"
      />

      {/* Middle Portion: Name and Progress Bar */}
      <div className="flex-grow mx-4">
        <div className="text-lg font-bold text-black ">{name}</div>
        <div className="w-full bg-[#ffe1de] h-2 mt-1 rounded">
          <div
            className="bg-gradient-to-r from-[#ff9d36] to-[#ff6562] h-2 rounded"
            style={{ width: `${value}%` }}
          ></div>
        </div>
      </div>

      {/* Right Portion: Value */}
      <div className="text-sm font-medium flex gap-1"><b className='text-[#000000B2]'>{value}%</b> <h4 className='text-[#000000B2]'>Correct</h4></div>
    </div>
  );
};

export default TrackerHori;
