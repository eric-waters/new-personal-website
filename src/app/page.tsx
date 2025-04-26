import HeroSectionOne from "@/components/custom/hero-sections";
import Navbar from "@/components/custom/navbar";

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
