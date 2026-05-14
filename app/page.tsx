import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FocusAreas from "@/components/FocusAreas";
import Projects from "@/components/Projects";
import ArchitectureMap from "@/components/ArchitectureMap";
import ApplicationBackground from "@/components/ApplicationBackground";
import About from "@/components/About";
import Roadmap from "@/components/Roadmap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <FocusAreas />
        <Projects />
        <ArchitectureMap />
        <ApplicationBackground />
        <About />
        <Roadmap />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
