import React from "react";
import Image from "next/image";
import defaultBanner from "@/public/assets/defaultBanner.jpg";
import { getAdminProjects, getDbUser } from "@/serverActions/userActions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FaEdit, FaLink, FaPlus, FaRProject } from "react-icons/fa";
import { FaHand } from "react-icons/fa6";

const Profile = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return redirect("/");
  }

  const { user, err } = await getDbUser(clerkUser.id);
  const adminProjects = await getAdminProjects(clerkUser.id);

  if (err) {
    return <p>Something went wrong</p>;
    //  redirect something went wrong page
  }

  if (!user) {
    return redirect("/setup");
  }

  return (
    <main className="bg-[#efefef] min-h-screen px-40 pt-20 flex overflow-y-auto flex-col justify-center items-start gap-x-5">
      <div className="rounded-3xl shadow-lg bg-white w-full pt-10 relative">
        <Image
          src={defaultBanner}
          alt="banner"
          className="w-full rounded-t-3xl absolute top-0 right-0 left-0 bottom-[66%] h-[40%]"
        />
        <div className="p-5 flex justify-between items-center">
          <div className="flex flex-col justify-start items-start">
            <Image
              src={user.avatarUrl}
              alt="you"
              className="rounded-full w-20 h-20 z-10 border-2 border-white mt-10"
              width={50}
              height={50}
            />
            <div className="ml-3 mt-2 text-sm z-40">
              <p className="font-semibold">{user.displayName}</p>
              <p>{user.position}</p>
            </div>
            <div className="mt-10">
              <p>{user.bio}</p>
              <a
                href={user.github}
                target="_blank"
                className="mt-3 font-semibold text-sky-500 flex justify-start items-center gap-x-2 hover:text-sky-300 duration-200"
              >
                <FaLink /> Github Profile
              </a>
            </div>
            <div className="mt-5">
              <p
                className={`${
                  user.lookingForHelp
                    ? "text-lime-500 border-l-lime-500"
                    : "text-red-500 border-l-red-500"
                } font-semibold text-sm pl-2 border-l flex justify-start items-center gap-x-2`}
              >
                {user.lookingForHelp
                  ? "You are looking for help on projects"
                  : "You are not looking for help on projects"}
                <FaHand />
              </p>
              <p
                className={`${
                  user.lookingForProjects
                    ? "text-lime-500 border-l-lime-500"
                    : "text-red-500 border-l-red-500"
                } font-semibold text-sm pl-2 border-l mt-2 flex justify-start items-center gap-x-2`}
              >
                {user.lookingForProjects
                  ? "You are interested in working on others projects"
                  : "You are not looking for projects to work on"}
                <FaRProject />
              </p>
            </div>
          </div>
          <div className="mt-10">
            <p className="mb-4 mt-2 text-xl flex justify-end items-center">
              <FaEdit />
            </p>
            {adminProjects.length < 1 ? (
              <p>You have not managed any projects yet</p>
            ) : (
              adminProjects.map((proj) => (
                <div key={proj.id}>
                  <p></p>
                </div>
              ))
            )}
            <button className="p-5 rounded-b-xl hover:bg-orange-300 duration-200 text-center w-full">
              Create A Project
            </button>
          </div>
        </div>
        <button className="w-full px-4 py-3 hover:bg-orange-300 duration-200 rounded-b-3xl flex justify-between items-center">
          <FaPlus />
          <p className="text-sm font-semibold">Add another account</p>
        </button>
      </div>
      <div className="rounded-3xl shadow-lg bg-white w-full p-10 mt-5">
        <p className="text-xl font-semibold">About</p>
        <p className="text-sm text-sky-300">{user.displayName}</p>
        <div className="mt-2 bg-slate-100 p-5 rounded-lg">{user.about}</div>
      </div>
      <div className="rounded-3xl shadow-lg bg-white w-full p-10 mt-5">
        <p className="text-xl font-semibold">Current Projects</p>
        <p className="font-semibold mt-3">Admin Projects</p>
        <div className="mt-2 bg-slate-100 p-5 rounded-lg">
          {adminProjects.length < 1 ? (
            <p>You have no projects</p>
          ) : (
            adminProjects.map((adminProj) => <div key={adminProj.id}></div>)
          )}
        </div>
      </div>
      <div className="rounded-3xl shadow-lg bg-white w-full p-10 mt-5">
        <p className="text-xl font-semibold">
          Categories You Are Interested In
        </p>
      </div>
      <div className="rounded-3xl shadow-lg bg-white w-full p-10 mt-5">
        <p className="text-xl font-semibold">Your posts</p>
      </div>
    </main>
  );
};

export default Profile;
