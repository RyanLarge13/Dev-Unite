"use client";
import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const SetUpClient = ({ children }: { children: React.ReactNode[] }) => {
  const [page, setPage] = useState(0);

  const handleMovePage = () => {
    if (page < children.length) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <section className="flex justify-center items-center">
      <div className="absolute top-20 left-40">
        {page > 0 ? (
          <button onClick={() => handleMovePage()}>
            <FaArrowLeft />
          </button>
        ) : null}
      </div>
      {children[page]}
      {page < children.length - 1 ? (
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      ) : null}
      {page === children.length - 1 ? <button>Finish</button> : null}
    </section>
  );
};

export default SetUpClient;
