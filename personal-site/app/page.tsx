import Container from "@/components/layout/container";
import Navbar from "@/components/layout/navbar";
import AboutSection from "@/components/sections/about";
import ProjectsSection from "@/components/sections/projects";
import ExperienceSection from "@/components/sections/experience";
import EducationSection from "@/components/sections/education";
import ContactSection from "@/components/sections/contact";
import ContactCondensed from "@/components/sections/contact-condensed";
import ResumeSection from "@/components/sections/resume";

export default function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <ContactSection id="contact" />
        <AboutSection />
        <ProjectsSection id="projects"/>
        <ExperienceSection id="experience"/>
        <EducationSection id="education"/>
        <ResumeSection />
        <ContactCondensed />
      </Container>
    </>
  );
}


