import { SkillsGrid } from '@/components/skills-grid';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-8 md:p-16">
      <section className="max-w-6xl mx-auto">
        <SkillsGrid />
      </section>
    </main>
  );
}
