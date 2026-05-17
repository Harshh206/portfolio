import { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EducationDrawer } from './components/EducationDrawer';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';

export default function App() {
  const [isEducationOpen, setIsEducationOpen] = useState(false);

  return (
    <div className="size-full">
      <Hero />
      <About onOpenEducation={() => setIsEducationOpen(true)} />
      <Projects />
      <Skills />
      <Contact />
      
      <EducationDrawer 
        open={isEducationOpen} 
        onOpenChange={setIsEducationOpen} 
      />
    </div>
  );
}