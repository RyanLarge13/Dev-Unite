import ProfileQuickView from "@/components/ProfileQuickView";
import SetUpClient from "@/components/SetUpClient";
import UserSetupOptions from "@/components/UserSetupOptions";
import { getDbUser } from "@/serverActions/userActions";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";
import { FaFileUpload } from "react-icons/fa";

const SetUp = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/");
  }

  return (
    <main className="pt-20 min-h-screen px-40">
      <SetUpClient>
        {[
          <h1 className="font-semibold mb-10 text-4xl">
            Let's finish setting up your account
          </h1>,
          <label htmlFor="avatar">
            <div className="w-40 h-40 rounded-full flex justify-center items-center text-4xl bg-slate-400">
              <FaFileUpload />
            </div>
            <Image
              src={clerkUser.imageUrl}
              alt="current avatar"
              width={50}
              height={50}
              className="w-30 h-30 rounded-full"
            />
            <input type="file" className="opacity-0" />
          </label>,
          <label htmlFor="username">
            <p className="text-xl">
              Set a unique display name that other users will be able to
              identify you from and will be shown to the public
            </p>
            <input
              id="username"
              name="username"
              type="username"
              className="outline-none focus:outline-none p-3 w-full font-bold text-orange-600"
              placeholder={clerkUser.fullName || "No username set"}
            />
          </label>,
          <label htmlFor="email">
            <p className="text-xl mt-10">
              What email do you want other users to contact you with to follow
              up on projects?
            </p>
            <input
              id="email"
              name="email"
              type="email"
              className="outline-none focus:outline-none p-3 w-full font-bold text-orange-600"
              placeholder={
                clerkUser.primaryEmailAddress?.emailAddress || "No email set"
              }
            />
          </label>,
          <label htmlFor="github">
            <p className="text-xl mt-10">
              What github account do you want other users to see and find your
              listed projects at?
            </p>
            <input
              id="github"
              name="github"
              type="github"
              className="outline-none focus:outline-none p-3 w-full font-bold text-orange-600"
              placeholder={"Github profile"}
            />
          </label>,
          <label htmlFor="position">
            <p className="text-xl mt-10">
              What is your position? eg: software engineer, web developer... etc
            </p>
            <input
              id="position"
              name="position"
              type="position"
              className="outline-none focus:outline-none p-3 w-full font-bold text-orange-600"
              placeholder={"Position"}
            />
          </label>,
          <label htmlFor="bio">
            <p className="text-xl mt-10">
              Give your profile an about you section. Let people know who you
              are and what you do
            </p>
            <textarea
              name="bio"
              id="bio"
              className="outline-none shadow-md focus:outline-none w-full font-semibold p-5"
              rows={10}
              maxLength={1000}
              placeholder="About you"
            ></textarea>
          </label>,
          <UserSetupOptions />,
        ]}
      </SetUpClient>
    </main>
  );
};

export default SetUp;
