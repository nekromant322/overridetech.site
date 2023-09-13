import type { ReactNode } from 'react';

type INewsletterProps = {
    title: ReactNode;
    description: ReactNode;
};

const Newsletter = (props: INewsletterProps) => (
    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="sm:w-7/12">
            <div className="text-3xl font-bold">{props.title}</div>

            <p className="mt-3 text-gray-300">{props.description}</p>
        </div>

    </div>
);

export { Newsletter };