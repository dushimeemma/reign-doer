import TextBadge from "@/app/components/reusable/TextBadge";
import Button from "@/app/components/reusable/Button";
import SeeMore from "@/app/components/reusable/SeeMore";
import VideoPage from "./Video";
import { AD_01_VIDEO_URL } from "@/app/helpers/constants";

export default function Landing() {
  return (
    <div
      id="home"
      className="w-full bg-background min-h-screen flex flex-col lg:flex-row justify-between items-center gap-4 lg:items-start py-6 mt-12 lg:mt-6 bg-[url('/home-bg.png')] bg-cover sm:bg-contain bg-center bg-no-repeat"
    >
      <div className="my-6 lg:my-auto mx-6 sm:w-[40%] w-[80%] px-16 py-6 h-[60vh] flex flex-col items-start justify-around gap-1 lg:gap-4 text-white bg-black rounded-2xl p-6 bg-opacity-[0.5]">
        <p className="text-4xl">
          Welcome to
          <span className="text-primary font-bold ml-1">Reign Doer</span>
        </p>
        <p className="font-semibold text-lg">
          Building Success, Delivering Quality
        </p>
        <div className="flex gap-4 w-full lg:w-[40vw]">
          <TextBadge label="successful projects" count={32} />
          <TextBadge label="satisfied clients" count={22} />
        </div>
        <div className="flex  items-center  w-full lg:w-[40vw]">
          <div className="w-[11.688rem]">
            <Button className="rounded-[1.875rem]">Book a free call</Button>
          </div>
          <SeeMore classNames="ml-6" />
        </div>
      </div>
      <div className="lg:w-[33vw] h-[72vh] flex self-center m-6 rounded-2xl">
        <VideoPage
          videoUrl={AD_01_VIDEO_URL}
          classNames="relative h-[72vh] lg:h-[72vh] w-[80vw] lg:w-[80vw] flex items-center relative  rounded-2xl justify-center shadow-md"
        />
      </div>
    </div>
  );
}
