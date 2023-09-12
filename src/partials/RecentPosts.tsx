import type { MarkdownInstance } from 'astro';
import type { IFrontmatter } from 'astro-boilerplate-components';
import {
  BlogGallery,
  Section,
} from 'astro-boilerplate-components';
import {GradientText} from "@/components/GradientText";

type IRecentPostsProps = {
  postList: MarkdownInstance<IFrontmatter>[];
};

const RecentPosts = (props: IRecentPostsProps) => (
  <Section
    title={
      <div className="flex items-baseline justify-between">
        <div>
           <GradientText>Мысли </GradientText> об обучении и рынке айти
        </div>

        <div className="text-sm">
          <a href="/posts/">Смотреть все →</a>
        </div>
      </div>
    }
  >
    <BlogGallery postList={props.postList} />
  </Section>
);

export { RecentPosts };
