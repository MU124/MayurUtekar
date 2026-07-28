import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Industries from "@/components/Industries";
import ProcessWorkflow from "@/components/ProcessWorkflow";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import CareerTimeline from "@/components/CareerTimeline";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col selection:bg-blue-500 selection:text-white">
      <Navbar />
      <Hero />
      <About />
      <Industries />
      <ProcessWorkflow />
      <Skills />
      <Experience />
      <Projects />
      <CareerTimeline />
      <Contact />
      <Footer />
    </main>
  );
}
