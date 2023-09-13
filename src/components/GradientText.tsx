import type { ReactNode } from 'react';

type IGradientTextProps = {
  children: ReactNode;
};

const GradientText = (props: IGradientTextProps) => (
  <span className="bg-gradient-to-br from-red-800 to-red-500 bg-clip-text text-transparent">
    {props.children}
  </span>
);

export { GradientText };
