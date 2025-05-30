import HeroSection from "@/components/custom/hero-section";
import Experience from "./experience/page";
import Education from "./education/page";
import Skills from "./skills/page";
import Navbar from "@/components/custom/navbar";

export default function Home() {
  return (
    <>
      <div className=" border border-dashed ">
        <div className="container max-w-[90rem] px-14 mx-auto border-l py-5 border-r border-dashed ">
          <Navbar />
        </div>
      </div>
      <div className=" ">
        <div className="container max-w-[90rem] px-14 mx-auto py-14 border-l border-r border-dashed ">
          <HeroSection />
        </div>
      </div>
      <div className=" border border-dashed ">
        <div className="container max-w-[90rem] px-14 mx-auto border-l border-r py-14 border-dashed ">
          <Experience />
        </div>
      </div>
      <div className=" border border-dashed">
        <div className="container max-w-[90rem] px-14 mx-auto py-14 border-l border-r border-dashed">
          <Education />
        </div>
      </div>
      <div className=" border border-dashed">
        <div className="container max-w-[90rem] px-14 mx-auto py-14 border-l border-r border-dashed">
          <Skills />
        </div>
      </div>
    </>
  );
}
