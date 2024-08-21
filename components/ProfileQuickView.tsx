import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { SignedIn, UserButton } from "@clerk/nextjs";
import defaultBanner from "@/public/assets/defaultBanner.jpg";

const ProfileQuickView = () => {
  return (
    <div className="rounded-3xl shadow-lg bg-white w-full pt-10 relative">
      <Image
        src={defaultBanner}
        alt="banner"
        className="w-full rounded-t-3xl absolute top-0 right-0 left-0 bottom-[66%] h-[40%]"
      />
      <div className="p-5">
        <div className="flex justify-start items-center">
          <SignedIn>
            <UserButton
              appearance={{
                elements: {
                  avatarBox: "min-w-[50px] min-h-[50px] rounded-lg",
                },
              }}
            />
            <div className="ml-3 mt-10 text-sm">
              <p className="font-semibold">Ryan Large</p>
              <p>Software Engineer</p>
            </div>
          </SignedIn>
        </div>
      </div>
      <button className="w-full px-4 py-3 hover:bg-orange-300 duration-200 rounded-b-3xl flex justify-between items-center">
        <FaPlus />
        <p className="text-sm font-semibold">Add another account</p>
      </button>
    </div>
  );
};

export default ProfileQuickView;
