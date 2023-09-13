import { HeroAvatar, HeroSocial, Section } from 'astro-boilerplate-components';

import { DutyCard } from '@/components/DutyCard';
import { GradientText } from '@/components/GradientText';

// @ts-ignore
const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Аллоха, меня зовут Толя <GradientText>OverrideTech</GradientText>
          <img src="/assets/images/logo.png" width="75" height="75" align="right"/>
        </>
      }
      description={
        <>
          Я ментор по мешанию джейсонов на джаве. Помогаю своим студентам
          ворваться в бэкенд с ноги.
          <DutyCard
            title="Менторинг с нуля до модного девелопера"
            description={
              <>
                {' '}
                - 8 - 12 месяцев <br /> - 17% от зарплаты после трудоустройства
                в течение 24 месяцев
                <br /> Формат доступен не всегда, количество студентов
                одновременно ограничено
              </>
            }
          />
          <DutyCard
            title="Помощь с трудоустройством"
            description={
              <>
                - Подготовка к собеседованиям <br /> - Создание сочного резюме{' '}
                <br /> - Улучшение оффера <br />
                Цена - это разница между тем, что ты получаешь сейчас и тем, что
                получишь после подготовки со мной. <br />
                Формат доступен всегда, но нужно обладать минимальным набором
                тех скилов
              </>
            }
          />
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatarMentor.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://t.me/Marandyuk_Anatolii">
            <HeroSocial src="/assets/images/tg-icon.png" alt="Telegram icon" />
          </a>
          <a href="https://github.com/nekromant322">
            <HeroSocial
              src="/assets/images/github-icon4.png"
              alt="Github icon"
            />
          </a>
          <a href="https://www.twitch.tv/overrideTech">
            <HeroSocial
              src="/assets/images/twitch-icon.png"
              alt="Twitch icon"
            />
          </a>
          <a href="https://boosty.to/overridetech">
            <HeroSocial
              src="/assets/images/boosty-icon.png"
              alt="Twitch icon"
            />
          </a>
        </>
      }></HeroAvatar>
  </Section>
);

export { Hero };
