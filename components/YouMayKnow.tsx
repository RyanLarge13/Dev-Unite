import { getRelatedDevs } from "@/serverActions/userActions";
import { User } from "@prisma/client";
import React, { Suspense } from "react";

const Devs = async ({ user }: { user: User }) => {
  const devs = await getRelatedDevs(user);

  return devs.map((dev) => (
    <div className="flex justify-between items-center mt-5">
      <div className="flex justify-center items-center gap-4">
        <div className="bg-slate-400 w-10 h-10 flex justify-center items-center rounded-full">
          <p className="font-bold">RL</p>
        </div>
        <div>
          <p>Ryan Large</p>
          <p className="text-sm text-slate-300">Software Engineer</p>
        </div>
      </div>
      <button className="outline-orange-300 outline rounded-lg py-1 px-3 hover:bg-orange-300 duration-200">
        Connect
      </button>
    </div>
  ));
};

const YouMayKnow = ({ user }: { user: User }) => {
  return (
    <div className="rounded-3xl shadow-lg bg-white w-full mt-5 overflow-hidden">
      <div className="p-5">
        <p className="font-semibold text-lg">Developers In Your Bracket:</p>
        <Suspense fallback={<p>loading</p>}>
          <Devs user={user} />
        </Suspense>
      </div>
      <button className="text-center text-sm p-5 hover:bg-orange-300 w-full duration-200 border-t border-t-slate-300">
        See All
      </button>
    </div>
  );
};

export default YouMayKnow;
