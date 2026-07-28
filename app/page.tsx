import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStrip from "@/components/TechStrip";
import About from "@/components/About";
import Industries from "@/components/Industries";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CareerTimeline from "@/components/CareerTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <TechStrip />
      <About />
      <Industries />
      <ProcessWorkflow />
      <Skills />
      <Experience />
      <Projects />
      <CareerTimeline />
      <Contact />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
