import { useContext } from 'react';
import { motion } from 'framer-motion';
import { Container, ListTechs, Tech } from './styles';
import { i18n } from '../../translate/i18n';

import { ThemeContext } from '../../App';

const techs = [
  {
    name: 'TypeScript',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'JavaScript',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'ReactJS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'NodeJS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  },
  {
    name: 'NextJS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  },
  {
    name: 'Git',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
  {
    name: 'PostgreSQL',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'HTML',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  },
  {
    name: 'CSS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  },
  {
    name: 'Sass',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg',
  },
  {
    name: 'Figma',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  },
  {
    name: 'Wordpress',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
  },
];

export function Techs({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container ref={elementRef} theme={theme}>
      <h1>{i18n.t('components.techs.bigText')}</h1>
      <p>{i18n.t('components.techs.smallText')}</p>
      <ListTechs>
        {techs.map(({ name, iconSrc }, index) => (
          <Tech key={index}>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <div className={`tech-square tech-square-${name}`}>
                <img src={iconSrc} alt={`Icone ${name}`} />
              </div>
            </motion.button>
            <span>{name}</span>
          </Tech>
        ))}
      </ListTechs>
    </Container>
  );
}
