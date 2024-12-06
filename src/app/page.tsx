import Blogs from "./components/layout/pages/Blogs";
import Landing from "./components/layout/pages/Landing";
import Projects from "./components/layout/pages/Projects";
import Services from "./components/layout/pages/Services";
import Team from "./components/layout/pages/Team";
import Video from "./components/layout/pages/Video";

export default function Home() {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center">
      <Landing />
      <Video />
      <Services />
      <Team />
      <Projects />
      <Blogs />
    </div>
  );
}
