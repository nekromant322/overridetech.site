import { Section } from 'astro-boilerplate-components';

import { GradientText } from '@/components/GradientText';
import { Newsletter } from '@/components/Newsletter';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          Подписывайся на{' '}
          <GradientText>
            <a href={'https://boosty.to/overridetech'}>Boosty</a>
          </GradientText>
        </>
      }
      description="Там много полезного контента: записи собеседований, примеры резюме, записи всех стримов"
    />
  </Section>
);

export { CTA };
