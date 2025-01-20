import React from "react";

export const Button = () => {
  return (
    <div className="bg-purple-500 flex items-center justify-center text-white rounded-md p-4 w-[160px] h-[40px]">
      Button
    </div>
  );
};

export const Input = () => {
  return (
    <input className="border border-gray-400 focus:border-blue-500 flex items-center justify-center rounded-md p-4 w-[300px] h-[40px]" />
  );
};

export const Select = () => {
  return (
    <select className="border border-gray-400 focus:border-blue-500 flex items-center justify-center rounded-md p-4 w-[300px]">
      <option className="!w-full">Option 1</option>
      <option className="!w-full">Option 2</option>
      <option className="!w-full">Option 3</option>
    </select>
  );
};
