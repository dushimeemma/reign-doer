import Landing from "./components/layout/pages/Landing";
import Video from "./components/layout/pages/Video";

export default function Home() {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center">
      <Landing />
      <Video />
    </div>
  );
}
