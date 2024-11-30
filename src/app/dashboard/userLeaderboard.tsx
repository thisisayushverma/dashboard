import React from 'react';
import task_data from './task-data.json';

const Leaderboard = () => {
  const users = task_data.user_leaderboard;

  return (
    <div className="w-[537px] font-inter rounded-2xl border border-red-500">
      <h1 className="text-left text-[14px] font-semibold leading-[18px] decoration-[from-font] text-[#00000080] mt-[24px] ml-[26px]">
        User Leaderboard
      </h1>
      <table className="w-full mt-[26px]">
        <tbody>
          {users.map((user, index) => (
            <tr
              key={index}
              className="flex items-center justify-between py-2 mx-[24px]"
            >
              <td className="w-auto">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-[42px] h-[42px] rounded-full object-cover"
                />
              </td>
              <td className="flex-1 pl-[12px] flex flex-col gap-[4px]">
                <div className="text-left text-[14px] font-semibold leading-[18px] decoration-[from-font] text-black">
                  {user.name}
                </div>
                <div className="text-left text-[12px] font-medium leading-[14.52px] decoration-[from-font] text-gray-500">
                  {user.points} Points - {user.accuracy_percentage} % Correct
                </div>
              </td>
              <td className="w-[45px] text-center">
                <div className="flex justify-between items-center gap-[12px]">
                  <span className="text-right text-[16px] font-semibold leading-[20px] tracking-[-0.2px] text-black">
                    {index + 1}
                  </span>
                  <span>
                    {user.accuracy_percentage >=
                    user.previous_accuracy_percentage ? (
                      <img src="./upArrow.svg"></img>
                    ) : (
                      <img src="./downArrow.svg"></img>
                    )}
                  </span>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
