import { useContext } from 'react';
import { Container } from './styles';
import { ThemeContext } from '../../App';

import { i18n } from '../../translate/i18n';

import illustration from '../../assets/illustration.svg';

export function About({ elementRef }) {
  const { theme } = useContext(ThemeContext);

  return (
    <Container theme={theme} ref={elementRef}>
      <div className="about-texts">
        <h1>{i18n.t('components.about.bigText')}</h1>
        <p className="welcome">{i18n.t('components.about.firstParagraph')}</p>
        <p>{i18n.t('components.about.secondParagraph')}</p>
        <p>{i18n.t('components.about.thirdParagraph')}</p>
        <p>{i18n.t('components.about.fourthParagraph')}</p>

      </div>
      <img src={illustration} alt="" />
    </Container>
  );
}
