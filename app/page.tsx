import Hero from "@/components/Hero";
import ChiropractorSection from "@/components/ChiropractorSection";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import OurTeam from "@/components/OurTeam";
import Blog from "@/components/Blog"
import Footer from "@/components/Footer";
import PainRelief from "@/components/PainRelief";

export default function Home() {
  return (
    <>
      <Hero />
      <ChiropractorSection /> 
      <About />
      <Services />  
      <Testimonials />
      <OurTeam />
      <PainRelief/>
      <Blog/>   
    </>
  )
}
