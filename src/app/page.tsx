import Blogs from "./components/layout/pages/Blogs";
import Faq from "./components/layout/pages/Faq";
import Landing from "./components/layout/pages/Landing";
import Projects from "./components/layout/pages/Projects";
import Services from "./components/layout/pages/Services";
import Team from "./components/layout/pages/Team";
import Testimonials from "./components/layout/pages/Testimonials";
import Video from "./components/layout/pages/Video";
import Footer from "./components/layout/widgets/Footer";
import Header from "./components/layout/widgets/Header";
import Subscribe from "./components/layout/widgets/Subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex w-full min-h-screen flex-col items-center justify-center">
        <Landing />
        <Video classNames="h-[40vh] lg:h-[60vh] w-[90vw] lg:w-[80vw] flex items-center relative  rounded-[1.25rem] justify-center m-6 shadow-md" />
        <Services />
        <Team />
        <Projects />
        <Blogs />
        <Testimonials />
        <Faq />
        <Subscribe />
      </div>
      <Footer />
    </>
  );
}
