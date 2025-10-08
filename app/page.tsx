import About from "@/components/home/About";
import Blog from "@/components/shared/Blog";
import ChiropractorSection from "@/components/home/ChiropractorSection";
import Hero from "@/components/home/Hero";
import OurTeam from "@/components/shared/OurTeam";
import PainRelief from "@/components/shared/CallToAction";
import Services from "@/components/home/Services";
import Testimonials from "@/components/shared/Testimonials";

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
