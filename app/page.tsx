import Hero from '@/components/hero';
import About from '@/components/about';
import Skills from '@/components/skills';
import FeaturedProject from '@/components/featured-project';
import Contact from '@/components/contact';

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-background text-foreground">
      <Hero />
      <About />
      <Skills />
      <FeaturedProject />
      <Contact />
    </main>
  );
}
