import React from "react";

const Categories = () => {
  return (
    <div className="rounded-3xl shadow-lg bg-white w-full relative mt-5 overflow-hidden">
      <ul className="text-sm font-semibold">
        <li>
          <a href="/" className="p-5 hover:bg-orange-300 duration-200 block">
            Connect
          </a>
        </li>
        <li>
          <a href="/" className="p-5 hover:bg-orange-300 duration-200 block">
            Find
          </a>
        </li>
        <li>
          <a href="/" className="p-5 hover:bg-orange-300 duration-200 block">
            Newest
          </a>
        </li>
        <li>
          <a href="/" className="p-5 hover:bg-orange-300 duration-200 block">
            Most Popular
          </a>
        </li>
        <li>
          <a href="/" className="p-5 hover:bg-orange-300 duration-200 block">
            Open Join
          </a>
        </li>
        <li>
          <a href="/" className="p-5 hover:bg-orange-300 duration-200 block">
            Levels
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
