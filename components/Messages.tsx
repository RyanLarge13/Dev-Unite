import React from "react";
import { FaArrowUp } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";

const Messages = () => {
  return (
    <div className="fixed bottom-0 right-10 bg-white rounded-xl shadow-lg w-80 flex justify-between items-center p-5">
      <p className="flex justify-center items-center gap-3">
        <FaMessage />
        Messages
      </p>
      <button className="flex justify-center items-center gap-3">
        <p className="bg-red-500 rounded-full text-xs px-3 py-1 font-bold text-white">
          3
        </p>
        <FaArrowUp />
      </button>
    </div>
  );
};

export default Messages;
