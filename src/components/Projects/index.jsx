import { useContext, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
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

const projectsMotionVarians = {
  visible: {
    opacity: 1, scale: 1, transition: { duration: 0.5 },
  },
  hidden: { opacity: 0, scale: 0 },
};

const listingProjectsVariants = {
  visible: {
    opacity: 1, translateX: 0, transition: { duration: 1 },
  },
  hidden: { opacity: 0, translateX: -200 },
};

export function Projects({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <Container theme={theme} ref={elementRef}>
      <motion.div
        // ref={ref}
        // animate={controls}
        // variants={projectsMotionVarians}
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
            whileInView={{ opacity: 1, translateX: 50, transition: { duration: 0.8 } }}
            initial={{ opacity: 0, translateX: 0 }}
            viewport={{ once: true }}
          >
            <div className="project" key={index}>
              <img src={screenshot} alt={`Print da tela do projeto ${title}`} />
              <div className="project-info">
                <span>{title}</span>
                <p>{desc}</p>
                <a href={url} className="project-link" target="_blank" rel="noreferrer">{i18n.t('components.projects.callToActionLink')}</a>
              </div>
            </div>
          </motion.div>
        ))}
      </ListProjects>
      <a href="https://github.com/pedrocleal" target="_blank" rel="noreferrer">{i18n.t('components.projects.callToActionButton')}</a>
    </Container>
  );
}
