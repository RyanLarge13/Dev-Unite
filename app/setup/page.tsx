import React from "react";
import { currentUser, User } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { FaPlus } from "react-icons/fa";
import Image from "next/image";
// import SetUpClient from "@/components/SetUpClient";
import UserSetupOptions from "@/components/UserSetupOptions";
import { submitUserProfile } from "@/serverActions/userActions";
import SubmitBtn from "@/components/SubmitBtn";

const SetUpAvatar = ({ clerkUser }: { clerkUser: User }) => {
  return (
    <div className="flex justify-center my-20 items-center flex-col relative">
      <p className="text-2xl mb-10">
        Change your avatar or keep your existing one!
      </p>
      <label htmlFor="avatar">
        <Image
          src={clerkUser.imageUrl}
          alt="current avatar"
          width={50}
          height={50}
          className="w-40 h-40 rounded-full cursor-pointer mt-10"
        />
        <FaPlus />
        <input
          type="file"
          name="avatar"
          id="avatar"
          className="opacity-0 absolute inset-0"
        />
      </label>
    </div>
  );
};

const SetUpUsername = ({ clerkUser }: { clerkUser: User }) => {
  return (
    <div className="flex justify-center my-20 items-center px-60 text-center">
      <label htmlFor="username">
        <p className="text-xl">
          Set a unique display name that other users will be able to identify
          you from and will be shown to the public
        </p>
        <input
          id="username"
          name="username"
          type="username"
          className="outline-none focus:outline-none rounded-lg w-full p-3 font-bold text-orange-60 mt-10"
          placeholder={clerkUser.fullName || "No username set"}
        />
      </label>
    </div>
  );
};

const SetUpEmail = ({ clerkUser }: { clerkUser: User }) => {
  return (
    <div className="flex flex-col justify-center my-20 items-center px-60 text-center">
      <label htmlFor="email">
        <p className="text-xl">
          What email do you want other users to contact you with to follow up on
          projects?
        </p>
        <input
          id="email"
          name="email"
          type="email"
          className="outline-none focus:outline-none p-3 w-full font-bold text-orange-600 mt-10 rounded-lg"
          placeholder={
            clerkUser.primaryEmailAddress?.emailAddress || "No email set"
          }
        />
      </label>
    </div>
  );
};

const SetUpGithub = () => {
  return (
    <div className="flex flex-col justify-center my-20 items-center px-60 text-center">
      <label htmlFor="github">
        <p className="text-xl">
          What github account do you want other users to see and find your
          listed projects at?
        </p>
        <input
          id="github"
          name="github"
          type="github"
          className="outline-none focus:outline-none p-3 w-full font-bold text-orange-600 mt-10 rounded-lg"
          placeholder={"Github profile"}
        />
      </label>
    </div>
  );
};

const SetUpPosition = () => {
  return (
    <div className="flex flex-col justify-center my-20 items-center px-60 text-center">
      <label htmlFor="position">
        <p className="text-xl">
          What is your position? eg: software engineer, web developer... etc
        </p>
        <input
          id="position"
          name="position"
          type="position"
          className="outline-none focus:outline-none p-3 w-full font-bold text-orange-600 mt-10 rounded-lg"
          placeholder={"Position"}
        />
      </label>
    </div>
  );
};

const SetUpBio = () => {
  return (
    <div className="flex flex-col justify-center my-20 items-center px-60 text-center">
      <label htmlFor="bio">
        <p className="text-xl">
          Give your profile an about you section. Let people know who you are
          and what you do
        </p>
        <textarea
          name="bio"
          id="bio"
          className="outline-none shadow-md focus:outline-none w-full font-semibold p-5 mt-10 rounded-lg"
          rows={10}
          maxLength={1000}
          placeholder="About you"
        ></textarea>
      </label>
    </div>
  );
};

const SetUp = async () => {
  const clerkUser = await currentUser();

  if (!clerkUser) {
    redirect("/");
  }

  return (
    <main className="pt-20 min-h-screen px-40">
      <form
        action={submitUserProfile}
        className="flex justify-center items-center flex-col py-20 px-60"
      >
        <h1 className="font-semibold mb-10 text-4xl">
          Let's finish setting up your account
        </h1>
        <SetUpAvatar clerkUser={clerkUser} />
        <SetUpUsername clerkUser={clerkUser} />
        <SetUpEmail clerkUser={clerkUser} />
        <SetUpGithub />
        <SetUpPosition />
        <UserSetupOptions />
        <SetUpBio />
        <SubmitBtn
          text="Finish"
          styles="rounded-lg p-3 w-60 shadow-lg bg-sky-300 hover:bg-orange-300 duration-300"
        />
        {/* <SetUpClient>
          {[
          ]}
        </SetUpClient> */}
      </form>
    </main>
  );
};

export default SetUp;
