import About from "@/components/home/About";
import Blog from "@/components/home/Blog";
import ChiropractorSection from "@/components/home/ChiropractorSection";
import Hero from "@/components/home/Hero";
import OurTeam from "@/components/home/OurTeam";
import PainRelief from "@/components/home/PainRelief";
import Services from "@/components/home/Services";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ChiropractorSection />
      <About />
      <Services />
      <Testimonials />
      <OurTeam />
      <PainRelief />
      <Blog />
    </>
  );
}
