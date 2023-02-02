/* eslint-disable react/no-array-index-key */
import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Container, ListProjects } from './styles';

import dentalLiderScreenshot from '../../assets/screenshots/dental-liderr.png';
import kpexpertservicesScreenshot from '../../assets/screenshots/kpexpertservices.png';
import vassourasDoLarScreenshot from '../../assets/screenshots/vassouras-do-lar.png';
import tradsScreenshot from '../../assets/screenshots/trads-corretora.png';
import topSuplementosScreenshot from '../../assets/screenshots/top-suplementos.png';
import amilScreenshot from '../../assets/screenshots/amil.png';
import hiperdentalScreenshot from '../../assets/screenshots/hiperdental.png';

import { ThemeContext } from '../../App';

import { i18n } from '../../translate/i18n';

const projects = [
  {
    title: 'Dental Líder',
    desc: i18n.t('components.projects.items.dentalLider.description'),
    screenshot: dentalLiderScreenshot,
    url: 'https://dentallider.com.br',
  },
  {
    title: 'Hiperdental Mangabeira',
    desc: i18n.t('components.projects.items.hiperdental.description'),
    screenshot: hiperdentalScreenshot,
    url: 'https://hiperdentalmangabeira.com.br/',
  },
  {
    title: 'KP Expert Services',
    desc: i18n.t('components.projects.items.kp.description'),
    screenshot: kpexpertservicesScreenshot,
    url: 'https://kpexpertservices.com',
  },
  {
    title: 'Top Suplementos',
    desc: i18n.t('components.projects.items.topSuplementos.description'),
    screenshot: topSuplementosScreenshot,
    url: 'https://top-suplementos.netlify.app',

  },
  {
    title: 'Trads Corretora',
    desc: i18n.t('components.projects.items.trads.description'),
    screenshot: tradsScreenshot,
    url: '',
  },
  {
    title: 'Vassouras do Lar',
    desc: i18n.t('components.projects.items.vassourasDoLar.description'),
    screenshot: vassourasDoLarScreenshot,
    url: 'https://vassourasdolar.com.br',
  },
  {
    title: 'Amil Saúde (Trads Corretora)',
    desc: i18n.t('components.projects.items.amil.description'),
    screenshot: amilScreenshot,
    url: 'https://amillsaude.com.br',
  },
];

export function Projects({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} ref={elementRef}>
      <motion.div
        whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.8 } }}
        initial={{ opacity: 0, scale: 0.5 }}
        viewport={{ once: true }}
      >
        <h1>{i18n.t('components.projects.bigText')}</h1>
      </motion.div>
      <ListProjects theme={theme}>
        {projects.map(({
          title, desc, screenshot, url,
        }, index) => (
          <motion.div
            whileInView={{ opacity: 1, translateX: 0, transition: { duration: 0.8 } }}
            initial={{ opacity: 0, translateX: -50 }}
            viewport={{ once: true }}
          >
            <div className="project" key={index}>
              <img src={screenshot} alt={`Print da tela do projeto ${title}`} />
              <div className="project-info">
                <span>{title}</span>
                <p>{desc}</p>
                {url ? (
                  <a href={url} className="project-link" target="_blank" rel="noreferrer">{i18n.t('components.projects.callToActionLink')}</a>
                ) : '🔒'}
              </div>
            </div>
          </motion.div>
        ))}
      </ListProjects>
      <a href="https://github.com/pedrocleal" target="_blank" rel="noreferrer">{i18n.t('components.projects.callToActionButton')}</a>
    </Container>
  );
}
