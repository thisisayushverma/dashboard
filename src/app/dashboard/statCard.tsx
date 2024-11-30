import React from 'react';
import data from './task-data.json';

const StatCards = () => {
  const metrics = data.metrics;

  const stats = [
    {
      label: "Active Users",
      value: `${metrics.active_users.current}/${metrics.active_users.total}`,
    },
    {
      label: "Questions Answered",
      value: new Intl.NumberFormat("en-US").format(metrics.questions_answered),
    },
    {
      label: "Av. Session Length",
      value: `${Math.floor(metrics.average_session_length_seconds / 60)}min ${
        metrics.average_session_length_seconds % 60
      }sec`,
    },
    {
      label: "Starting Knowledge",
      value: `${metrics.starting_knowledge_percentage}%`,
    },
    {
      label: "Current Knowledge",
      value: `${metrics.current_knowledge_percentage}%`,
    },
    {
      label: "Knowledge Gain",
      value: `+${(
        (metrics.current_knowledge_percentage -
          metrics.starting_knowledge_percentage) /
        100
      ).toFixed(2)}%`,
    },
  ];

  return (
    <div className="w-[536px] grid grid-cols-3 gap-[19px]" style={{border:'1px solid red'}}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="h-[152px] w-[171px] p-[20px] rounded-lg border-2 border-gray-300 flex flex-col items-start"
        >
          <div className="text-[14px] font-medium leading-[16.94px] tracking-[-0.154px] text-[#000000B2]">
            {stat.label}
          </div>
          <div className="text-[24px] font-bold leading-[29.05px] text-black mt-[28px]">
            {stat.value}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
