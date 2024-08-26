"use client";
import React, { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";

const SetUpClient = ({ children }: { children: React.ReactNode[] }) => {
  const [page, setPage] = useState(0);
  const [trans, setTrans] = useState(false);
  const [opac, setOpac] = useState(0);

  const handleMovePage = (int: number) => {
    setTrans((prev) => !prev);
    setTimeout(() => {
      setPage((prev) => prev + int);
    }, 290);
  };

  useEffect(() => {
    if (opac === 1) {
      setOpac(0);
      setTimeout(() => {
        setOpac(1);
      }, 300);
    }
    if (opac === 0) {
      setOpac(1);
    }
  }, [trans]);

  return (
    <section className="flex justify-center items-center">
      <div className="absolute top-40 left-40">
        {page > 0 ? (
          <button onClick={() => handleMovePage(-1)}>
            <p>
              <FaArrowLeft /> <span className="mt-1">Go back</span>
            </p>
          </button>
        ) : null}
      </div>
      <div style={{ opacity: opac }} className="duration-300">
        {children[page]}
      </div>
      {page < children.length - 1 ? (
        <button
          onClick={() => handleMovePage(1)}
          className="absolute bottom-20 right-40 p-3 shadow-lg rounded-lg bg-orange-300 text-center w-40"
        >
          Next
        </button>
      ) : null}
      {page === children.length - 1 ? <button>Finish</button> : null}
    </section>
  );
};

export default SetUpClient;
