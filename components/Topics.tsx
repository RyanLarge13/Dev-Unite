import { Tag } from "@prisma/client";
import React from "react";
import { FaPlus } from "react-icons/fa";

const Topics = ({ tags }: { tags: Tag[] }) => {
  return (
    <div className="rounded-3xl shadow-lg bg-white w-full mt-5 overflow-hidden">
      <button className="flex justify-between items-center w-full p-5 hover:bg-orange-300 duration-200">
        <p>Following Topics</p>
        <FaPlus />
      </button>
      <div className="flex flex-wrap justify-start items-start p-5 gap-3">
        {tags.map((tag) => (
          <a
            key={tag.id}
            href={`/tags/${tag.title}`}
            className="px-2 py-1 rounded-md shadow-sm bg-slate-200 hover:bg-slate-300 duration-200"
          >
            #{tag.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Topics;
