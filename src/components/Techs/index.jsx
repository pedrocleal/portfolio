import { Container, ListTechs, Tech } from "./styles";

const techs = [
  {
    name: 'JavaScript',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
  },
  {
    name: 'ReactJS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
  },
  {
    name: 'NodeJS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
  },
  {
    name: 'NextJS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg'
  },
  {
    name: 'Git',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
  },
  {
    name: 'PostgreSQL',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
  },
  {
    name: 'HTML',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
  },
  {
    name: 'CSS',
    iconSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
  },
]

export function Techs({ elementRef }) {
  return (
    <Container ref={elementRef}>
      <h1>Conhecimentos</h1>
      <p>Tecnologias que estou diariamente em contato, seja no trabalho ou estudando.</p>
      <ListTechs>
        {techs.map(({ name, iconSrc }, index) => (
          <Tech key={index}>
            <div className="tech-square">
              <img src={iconSrc} alt={`Icone ${name}`} />
            </div>
            <span>{name}</span>
          </Tech>
        ))}
      </ListTechs>
    </Container>
  )
}