import Categories from "@/components/Categories";
import ProfileQuickView from "@/components/ProfileQuickView";

const Home = () => {
  return (
    <main className="bg-[#efefef] min-h-screen px-40 pt-40 flex overflow-y-auto justify-center items-start gap-x-5">
      <div className="flex-[1_1_25%]">
        <ProfileQuickView />
        <Categories />
      </div>
      <div className="flex-[1_1_56%]">
        <p>Hey</p>
      </div>
      <div className="flex-[1_1_25%]">
        <p>No way</p>
      </div>
    </main>
  );
};

export default Home;
