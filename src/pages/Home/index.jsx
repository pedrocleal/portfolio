import { useRef } from 'react';
import { Header } from '../../components/Header';
import { Landing } from '../../components/Landing';
import { Projects } from '../../components/Projects';
import { Techs } from '../../components/Techs';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';

export function Home() {
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const techsRef = useRef(null);
  const contactsRef = useRef(null);

  const refs = {
    projectsRef, aboutRef, techsRef, contactsRef,
  };

  return (
    <>
      <Header refs={refs} />
      <Landing elementRef={aboutRef} />
      <Projects elementRef={projectsRef} />
      <Techs elementRef={techsRef} />
      <Contact elementRef={contactsRef} />
      <Footer />
    </>
  );
}
