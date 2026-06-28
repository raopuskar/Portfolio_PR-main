import { ProfileSection } from "./components/ProfileSection";
import { AboutSection } from "./components/AboutSection";
import { ConstellationSkills } from "./components/ConstellationSkills";
import { ExperienceSection } from "./components/ExperienceSection";
import { TerminalProjects } from "./components/TerminalProjects";
import { ContactSection } from "./components/ContactSection";
import { FloatingNav } from "./components/FloatingNav";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <FloatingNav />

      <ProfileSection />

      <AboutSection />

      <section id="skills" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl space-y-6">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-purple-500/50" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 tracking-wider">
              SKILL CONSTELLATION
            </h2>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-purple-500/50" />
          </div>
          <ConstellationSkills />
        </div>
      </section>

      <ExperienceSection />

      <section id="projects" className="py-20 px-4 bg-gradient-to-b from-transparent via-green-950/5 to-transparent">
        <div className="container mx-auto max-w-6xl space-y-6">
          <div className="flex items-center gap-3 mb-8 justify-center">
            <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-green-500/50" />
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 tracking-wider">
              FEATURED PROJECTS
            </h2>
            <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-green-500/50" />
          </div>
          <TerminalProjects />
        </div>
      </section>

      <ContactSection />

      <footer className="py-8 px-4 border-t border-cyan-500/20">
        <div className="container mx-auto max-w-6xl text-center text-gray-500">
          <p>© 2026 John Anderson. All systems operational.</p>
        </div>
      </footer>
    </div>
  );
}