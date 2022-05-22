import { Header } from '../../components/Header';
import { Landing } from '../../components/Landing';
import { Projects } from '../../components/Projects';
import { Techs } from '../../components/Techs';

export function Home() {
  return (
    <>
      <Header />
      <Landing />
      <Projects />
      <Techs />
    </>
  );
}
