import { useContext } from 'react';
import { Container, ListProjects } from './styles';

import dentalLiderScreenshot from '../../assets/screenshots/dental-lider.png';
import vassourasDoLarScreenshot from '../../assets/screenshots/vassouras-do-lar.png';
import topSuplementosScreenshot from '../../assets/screenshots/top-suplementos.png';
import { ThemeContext } from '../../App';

import { i18n } from '../../translate/i18n';

const projects = [
  {
    title: 'Dental Líder',
    desc: i18n.t('components.projects.items.first.description'),
    screenshot: dentalLiderScreenshot,
    url: 'https://dentallider.com.br',
  },
  {
    title: 'Vassouras do Lar',
    desc: i18n.t('components.projects.items.second.description'),
    screenshot: vassourasDoLarScreenshot,
    url: 'https://vassourasdolar.com.br',
  },
  {
    title: 'Top Suplementos',
    desc: i18n.t('components.projects.items.third.description'),
    screenshot: topSuplementosScreenshot,
    url: 'https://top-suplementos.netlify.app',
  },
];

export function Projects({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} ref={elementRef}>
      <h1>{i18n.t('components.projects.bigText')}</h1>
      <ListProjects theme={theme}>
        {projects.map(({
          title, desc, screenshot, url,
        }, index) => (
          <div className="project" key={index}>
            <img src={screenshot} alt={`Print da tela do projeto ${title}`} />
            <div className="project-info">
              <span>{title}</span>
              <p>{desc}</p>
              <a href={url} className="project-link" target="_blank" rel="noreferrer">{i18n.t('components.projects.callToActionLink')}</a>
            </div>
          </div>
        ))}
      </ListProjects>
      <a href="https://github.com/pedrocleal" target="_blank" rel="noreferrer">{i18n.t('components.projects.callToActionButton')}</a>
    </Container>
  );
}
