"use client";
import Image from "next/image";
import Logo from "@/public/assets/logo.jpeg";
import React from "react";
import { FaBell, FaHome, FaProjectDiagram, FaSearch } from "react-icons/fa";
import { FaMessage, FaPerson, FaUserGroup } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 right-0 left-0 flex justify-evenly gap-x-40 items-center p-5 bg-white z-40 shadow-lg">
      <div className="flex-1 flex justify-center items-center border-r border-r-slate-200">
        <Image src={Logo} alt="dev unite" width={30} height={30} className="" />
      </div>
      <ul className="text-xl flex justify-center items-center gap-20">
        <li
          className={`${
            pathname === "/" ? "border-b-2 border-b-sky-300" : "border-none"
          } pb-3`}
        >
          <a
            href="/"
            className={`${pathname === "/" ? "text-sky-300" : "text-black"}`}
          >
            <FaHome />
          </a>
        </li>
        <li
          className={`${
            pathname === "/coworkers"
              ? "border-b-2 border-b-sky-300"
              : "border-none"
          } pb-3`}
        >
          <a
            href="/coworkers"
            className={`${
              pathname === "/coworkers" ? "text-sky-300" : "text-black"
            }`}
          >
            <FaUserGroup />
          </a>
        </li>
        <li
          className={`${
            pathname === "/share"
              ? "border-b-2 border-b-sky-300"
              : "border-none"
          } pb-3`}
        >
          <a
            href="/"
            className={`${
              pathname === "/share" ? "text-sky-300" : "text-black"
            }`}
          >
            <FaProjectDiagram />
          </a>
        </li>
        <li
          className={`${
            pathname === "/bells"
              ? "border-b-2 border-b-sky-300"
              : "border-none"
          } pb-3`}
        >
          <a
            href="/"
            className={`${
              pathname === "/bells" ? "text-sky-300" : "text-black"
            }`}
          >
            <FaBell />
          </a>
        </li>
        <li
          className={`${
            pathname === "/messages"
              ? "border-b-2 border-b-sky-300"
              : "border-none"
          } pb-3`}
        >
          <a
            href="/"
            className={`${
              pathname === "/messages" ? "text-sky-300" : "text-black"
            }`}
          >
            <FaMessage />
          </a>
        </li>
        <li
          className={`${
            pathname === "/profile"
              ? "border-b-2 border-b-sky-300"
              : "border-none"
          } pb-3`}
        >
          <a
            href="/"
            className={`${
              pathname === "/profile" ? "text-sky-300" : "text-black"
            }`}
          >
            <FaPerson />
          </a>
        </li>
      </ul>
      <form className="flex-1 flex justify-center items-center border-l border-l-slate-200">
        <input
          type="search"
          className="rounded-l-full py-3 px-5 focus:outline-none outline-none bg-slate-200"
          placeholder="Search"
        />
        <button type="submit" className="rounded-r-full py-4 px-6 bg-sky-300">
          <FaSearch />
        </button>
      </form>
    </nav>
  );
};

export default Nav;
