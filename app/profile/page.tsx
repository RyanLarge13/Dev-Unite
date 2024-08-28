import React from "react";
import Image from "next/image";
import defaultBanner from "@/public/assets/defaultBanner.jpg";
import { getDbUser } from "@/serverActions/userActions";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FaPlus } from "react-icons/fa";

const Profile = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    return redirect("/");
  }

  const { user, err } = await getDbUser(clerkUser.id);

  if (err) {
    return <p>Something went wrong</p>;
    //  redirect something went wrong page
  }

  if (!user) {
    return redirect("/setup");
  }

  return (
    <main className="bg-[#efefef] min-h-screen px-40 pt-20 flex overflow-y-auto justify-center items-start gap-x-5">
      <div className="rounded-3xl shadow-lg bg-white w-full pt-10 relative">
        <Image
          src={defaultBanner}
          alt="banner"
          className="w-full rounded-t-3xl absolute top-0 right-0 left-0 bottom-[66%] h-[40%]"
        />
        <div className="p-5">
          <div className="flex justify-start items-center">
            <Image
              src={user.avatarUrl}
              alt="you"
              className="rounded-full w-20 h-20 z-40 border-2 border-white"
              width={50}
              height={50}
            />
            <div className="ml-3 mt-10 text-sm">
              <p className="font-semibold">{user.displayName}</p>
              <p>{user.position}</p>
            </div>
          </div>
        </div>
        <button className="w-full px-4 py-3 hover:bg-orange-300 duration-200 rounded-b-3xl flex justify-between items-center">
          <FaPlus />
          <p className="text-sm font-semibold">Add another account</p>
        </button>
      </div>
    </main>
  );
};

export default Profile;
