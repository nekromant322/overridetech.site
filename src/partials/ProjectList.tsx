import {
    ColorTags,
    Project,
    Section,
    Tags,
} from 'astro-boilerplate-components';
import {GradientText} from "@/components/GradientText";

const ProjectList = () => (
    <Section
        title={
            <>
                <GradientText>Проекты</GradientText> моих студентов
            </>
        }
    >
        <div className="flex flex-col gap-6">
            <Project
                name="Overmoney"
                description="Распределенный трекер финансов без интеграций с банками"
                link="https://overridetech.ru/overmoney"
                img={{
                    src: '/assets/images/project-web-design.png',
                    alt: 'проект Overmoney',
                }}
                category={
                    <>
                        <Tags color={ColorTags.FUCHSIA}>Java 11</Tags>
                        <Tags color={ColorTags.LIME}>Spring Boot</Tags>
                        <Tags color={ColorTags.SKY}>Spring Cloud</Tags>
                        <Tags color={ColorTags.ROSE}>PostgreSQL</Tags>
                        <Tags color={ColorTags.VIOLET}>Liquibase</Tags>
                    </>
                }
            />
        </div>
    </Section>
);

export {ProjectList};
