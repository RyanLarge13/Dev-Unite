import Image from "next/image";
import React from "react";
import { FaPlus } from "react-icons/fa";
import { SignedIn, UserButton } from "@clerk/nextjs";

const ProfileQuickView = () => {
  return (
    <div className="rounded-lg shadow-lg p-5 bg-white">
      <Image src={""} alt="banner" />
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <p>Ryan Large</p>
      <p>Software Engineer</p>
      <button className="">
        <div>
          <FaPlus />
          <p>Add another account</p>
        </div>
      </button>
    </div>
  );
};

export default ProfileQuickView;
