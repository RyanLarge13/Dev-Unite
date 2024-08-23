import Categories from "@/components/Categories";
import ProfileQuickView from "@/components/ProfileQuickView";
import { currentUser } from "@clerk/nextjs/server";
import Image from "next/image";
import {
  FaCalendar,
  FaDesktop,
  FaMobile,
  FaPlus,
  FaShare,
  FaVideo,
} from "react-icons/fa";
import { FaNoteSticky, FaPhotoFilm } from "react-icons/fa6";
import Topics from "@/components/Topics";
import { getDbUser } from "@/serverActions/userActions";
import { redirect } from "next/navigation";
import YouMayKnow from "@/components/YouMayKnow";

const Home = async () => {
  const user = await currentUser();

  if (!user) {
    return <p>Login</p>;
  }

  const dbUser = await getDbUser(user.id);

  if (dbUser.err) {
    return <p>Something went wrong</p>;
    //  redirect something went wrong page
  }

  if (!dbUser.user) {
    return redirect("/setup");
  }

  return (
    <main className="bg-[#efefef] min-h-screen px-40 pt-20 flex overflow-y-auto justify-center items-start gap-x-5">
      <div className="flex-[1_1_25%]">
        <ProfileQuickView user={dbUser.user} />
        <Categories cats={dbUser.user.categories} />
        <Topics tags={dbUser.user.tags} />
      </div>
      <div className="flex-[1_1_56%] min-h-screen max-h-screen overflow-y-auto">
        <div className="rounded-3xl shadow-lg bg-white w-full">
          <div className="p-5">
            <Image
              src={user.imageUrl}
              alt="user"
              className="w-[50px] h-[50px] rounded-lg"
              width={50}
              height={50}
            />
            <input
              type="text"
              maxLength={1000}
              placeholder="Write About Your Project"
              className="outline-none focus:outline-none p-5 text-sm font-semibold"
            />
          </div>
          <div className="overflow-hidden rounded-b-3xl">
            <ul className="flex justify-evenly items-center">
              <li className="p-4 w-full flex gap-x-2 justify-center items-center duration-200 hover:bg-sky-400 bg-sky-300 text-white">
                <FaPhotoFilm />
                <p className="font-semibold">Image</p>
              </li>
              <li className="p-4 w-full flex gap-x-2 justify-center items-center duration-200 hover:bg-sky-400 bg-sky-300 text-white">
                <FaVideo />
                <p className="font-semibold">Video</p>
              </li>
              <li className="p-4 w-full flex gap-x-2 justify-center items-center duration-200 hover:bg-sky-400 bg-sky-300 text-white">
                <FaCalendar />
                <p className="font-semibold">Event</p>
              </li>
              <li className="p-4 w-full flex gap-x-2 justify-center items-center duration-200 hover:bg-sky-400 bg-sky-300 text-white">
                <FaNoteSticky />
                <p className="font-semibold">Article</p>
              </li>
              <li className="p-4 w-full flex gap-x-2 justify-center items-center duration-200 hover:bg-orange-400 bg-orange-300 text-white">
                <FaShare />
                <p className="font-semibold">Post</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex-[1_1_25%]">
        <div className="rounded-3xl shadow-lg bg-gradient-to-tr from-white to-sky-300 w-full p-5 relative overflow-hidden">
          <p className="text-2xl font-semibold w-min">Try Premium For Free</p>
          <p className="text-slate-400 text-xs">1 month free</p>
          <button className="py-2 px-6 mt-3 shadow-md rounded-xl bg-gradient-to-tr from-orange-300 to-white">
            Try For Free
          </button>
        </div>
        <YouMayKnow user={dbUser.user} />
        <div className="rounded-3xl shadow-lg bg-white w-full mt-5 overflow-hidden">
          <div className="p-5">
            <ul>
              <li className="flex justify-between items-center mb-5">
                <div className="flex justify-start items-center gap-5">
                  <FaDesktop />
                  <a href="/" className="">
                    Desktop
                  </a>
                </div>
                <p className="bg-red-500 rounded-full text-xs px-3 py-1 font-bold text-white">
                  99+
                </p>
              </li>
              <li className="flex justify-between items-center mb-5">
                <div className="flex justify-start items-center gap-5">
                  <FaMobile />
                  <a href="/" className="">
                    Mobile Apps
                  </a>
                </div>
                {/* <p className="bg-red-500 rounded-full text-sm px-3 py-1 text-white">
                  99+
                </p> */}
              </li>
            </ul>
          </div>
          <button className="w-full p-5 hover:bg-orange-300 duration-200 rounded-b-3xl flex justify-between items-center">
            <FaPlus />
            <p>Add new page</p>
          </button>
        </div>
      </div>
    </main>
  );
};

export default Home;
