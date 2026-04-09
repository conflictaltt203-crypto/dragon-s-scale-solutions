import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <footer className="py-8 px-6 text-center text-sm text-muted-foreground border-t border-border/30">
        <p>Victor Manzano — Axion Enterprise</p>
      </footer>
    </div>
  );
};

export default Index;
