import Blogs from "./components/layout/pages/Blogs";
import Faq from "./components/layout/pages/Faq";
import Landing from "./components/layout/pages/Landing";
import Projects from "./components/layout/pages/Projects";
import Services from "./components/layout/pages/Services";
import Team from "./components/layout/pages/Team";
import Testimonials from "./components/layout/pages/Testimonials";
import Video from "./components/layout/pages/Video";
import Subscribe from "./components/layout/widgets/Subscribe";

export default function Home() {
  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center">
      <Landing />
      <Video />
      <Services />
      <Team />
      <Projects />
      <Blogs />
      <Testimonials />
      <Faq />
      <Subscribe />
    </div>
  );
}
