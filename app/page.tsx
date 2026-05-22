import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import FeaturedProject from '@/components/featured-project';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-16 sm:py-24">
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Contact />
    </main>
  );
}