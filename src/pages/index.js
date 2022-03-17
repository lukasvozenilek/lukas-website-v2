import React, {useState} from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import ProjectSection from '../components/ProjectSection';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
      <>
        <Sidebar isOpen={isOpen} toggle={toggleOpen}/>
        <Navbar toggle={toggleOpen}/>
        <HeroSection/>
        <AboutSection lightBg={true}/>
        <ContactSection lightBg={false}/>
        <ProjectSection lightBg={true}/>
      </>
  );
};

export default Home;
