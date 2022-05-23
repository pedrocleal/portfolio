import { Container, ListProjects } from "./styles";

import dentalLiderScreenshot from '../../assets/screenshots/dental-lider.png';
import vassourasDoLarScreenshot from '../../assets/screenshots/vassouras-do-lar.png';
import topSuplementosScreenshot from '../../assets/screenshots/top-suplementos.png';
import { useContext } from "react";
import { ThemeContext } from "../../App";

const projects = [
  {
    title: 'Dental Líder',
    desc: 'Site desenvolvido para uma clínica odontológica de Campina Grande - PB.',
    screenshot: dentalLiderScreenshot,
    url: 'https://dentallider.com.br'
  },
  {
    title: 'Vassouras do Lar',
    desc: 'Site desenvolvido para uma fábrica de vassouras de Santa Rita - PB',
    screenshot: vassourasDoLarScreenshot,
    url: 'https://vassourasdolar.com.br'
  },
  {
    title: 'Top Suplementos',
    desc: 'Site desenvolvido para uma clínica odontológica de Campina Grande - PB.',
    screenshot: topSuplementosScreenshot,
    url: 'https://top-suplementos.netlify.app'
  }
]

export function Projects({ elementRef }) {

  const { theme } = useContext(ThemeContext);

  return ( 
    <Container theme={theme} ref={elementRef}>
      <h1>Projetos</h1>
      <ListProjects theme={theme}>
        {projects.map(({ title, desc, screenshot, url }, index) => (
          <div className="project" key={index}>
            <img src={screenshot} alt={`Print da tela do projeto ${title}`} />
            <div className="project-info">
              <span>{title}</span>
              <p>{desc}</p>
              <a href={url} target="_blank">Clique aqui para conferir o projeto!</a>
            </div>
          </div>
        ))}
      </ListProjects>
      <button>Ver mais no GitHub</button>
    </Container>
  )
}
