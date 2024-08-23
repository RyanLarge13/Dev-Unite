import { Category } from "@prisma/client";
import React from "react";

const Categories = ({ cats }: { cats: Category[] }) => {
  return (
    <div className="rounded-3xl shadow-lg bg-white w-full relative mt-5 overflow-hidden">
      <ul className="text-sm font-semibold">
        {cats.map((cat) => (
          <li key={cat.id}>
            <a
              href={`/category/${cat.title}`}
              className="p-5 hover:bg-orange-300 duration-200 block"
            >
              {cat.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
