import {
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';
import {GradientText} from "@/components/GradientText";

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Аллоха, меня зовут Толя    <GradientText>OverrideTech</GradientText> 👋
        </>
      }
      description={
        <>
          Я ментор по мешанию джейсонов на джаве.
          Помогаю своим студентам ворваться в бэкенд с ноги.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="/">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/facebook-icon.png"
              alt="Facebook icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
          <a href="/">
            <HeroSocial
              src="/assets/images/youtube-icon.png"
              alt="Youtube icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
