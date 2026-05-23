import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import RevealOnScroll from './components/RevealOnScroll';

function App() {
  return (
    <div className="min-h-screen bg-[#0a0f1e] text-[#e2e8f0] relative">
      {/* Grid Background */}
      <div className="grid-bg" />

      {/* Main Content */}
      <Navbar />
      <HeroSection />

      <RevealOnScroll>
        <StatsBar />
      </RevealOnScroll>

      <RevealOnScroll>
        <AboutSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <SkillsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ProjectsSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <EducationSection />
      </RevealOnScroll>

      <RevealOnScroll>
        <ContactSection />
      </RevealOnScroll>

      <Footer />
    </div>
  );
}

export default App;
