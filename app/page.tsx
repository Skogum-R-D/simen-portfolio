import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import SmoothScrollListener from "@/components/smooth-scroll-listener";

export default function Home() {
  return (
    <main className="min-h-screen">
      <SmoothScrollListener />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
