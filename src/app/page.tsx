import HeroSectionOne from "@/components/custom/hero-sections";
import Navbar from "@/components/custom/navbar";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { SparklesCore } from "@/components/ui/sparkles";

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
        <HeroSectionOne />
      </div>
    </>
  );
}
