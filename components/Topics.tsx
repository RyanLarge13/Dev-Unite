import React from "react";
import { FaPlus } from "react-icons/fa";

const Topics = () => {
  return (
    <div className="rounded-3xl shadow-lg bg-white w-full mt-5 overflow-hidden">
      <button className="flex justify-between items-center w-full p-5 hover:bg-orange-300 duration-200">
        <p>Following Topics</p>
        <FaPlus />
      </button>
      <div className="flex flex-wrap justify-start items-start p-5 gap-3">
        <a
          href=""
          className="px-2 py-1 rounded-md shadow-sm bg-slate-200 hover:bg-slate-300 duration-200"
        >
          #web-development
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md shadow-sm bg-slate-200 hover:bg-slate-300 duration-200"
        >
          #robotics
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md shadow-sm bg-slate-200 hover:bg-slate-300 duration-200"
        >
          #fullstack
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md shadow-sm bg-slate-200 hover:bg-slate-300 duration-200"
        >
          #c++
        </a>
        <a
          href=""
          className="px-2 py-1 rounded-md shadow-sm bg-slate-200 hover:bg-slate-300 duration-200"
        >
          #ai
        </a>
      </div>
    </div>
  );
};

export default Topics;
