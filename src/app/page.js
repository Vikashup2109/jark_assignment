import NavBar from "../components/NavBar/page";
import dynamic from "next/dynamic";
// import Filters from "./Filters/page";
import AnalylicsCount from "./AnalylicsCount/page";
import TopPerformer from "./TopPerformer/page";
const Activity = dynamic(() => import("./Activity/page"), { ssr: false });
// import Activity from "./Activity/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  bg-[#eee]">
      <NavBar />
      <section className="w-full px-7 py-6 ">
        <h2 className="text-[28px] font-extrabold mb-8">Analytics</h2>
        {/* <Filters /> */}
        <AnalylicsCount />
        <div className="flex flex-col lg:flex-row gap-4 items-center my-7">
          <div className="w-full lg:w-1/2 bg-white rounded-lg">
            <Activity />
          </div>
          <div className="w-full lg:w-1/2 bg-white rounded-lg">
            <TopPerformer />
          </div>
        </div>
      </section>
    </main>
  );
}
