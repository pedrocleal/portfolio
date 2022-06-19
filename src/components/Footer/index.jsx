import { ArrowUp } from 'phosphor-react';
import { motion } from 'framer-motion';

import { useContext } from 'react';
import { Container } from './styles';

import { i18n } from '../../translate/i18n';

import { ThemeContext } from '../../App';

export function Footer() {
  const { theme } = useContext(ThemeContext);

  function handleScrollToTop() {
    window.scroll({ top: 0, behavior: 'smooth' });
  }

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 100, transition: { duration: 1 } }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
    >
      <Container theme={theme}>
        <p>{i18n.t('components.footer.text')}</p>
        <button type="button" onClick={handleScrollToTop}>
          <ArrowUp size={24} />
        </button>
      </Container>
    </motion.div>
  );
}
