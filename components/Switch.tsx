"use client";
import React from "react";

const Switch = ({
  title,
  styles,
  value,
  toggle,
}: {
  title: string;
  styles: string;
  value: boolean;
  toggle: (value: boolean) => void;
}) => {
  return (
    <button
      onClick={() => toggle(!value)}
      className={`${styles} flex w-full items-center justify-between`}
    >
      <p>{title}</p>
      <div className="relative h-[20px] w-[40px] rounded-full shadow-md">
        <div
          className={`absolute ${
            value ? "left-[20px] bg-sky-300" : "left-0 bg-orange-300"
          } h-[20px] w-[20px] rounded-full duration-300`}
        ></div>
      </div>
    </button>
  );
};

export default Switch;
