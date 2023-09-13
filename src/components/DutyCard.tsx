import type {ReactNode} from 'react';

type IDutyCardProps = {
    title: ReactNode;
    description: ReactNode;
};

const DutyCard = (props: IDutyCardProps) => (
    // <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
    //     <div className="sm:w-7/12">
    //         <div className="text-3xl font-bold">{props.title}</div>
    //
    //         <p className="mt-3 text-gray-300">{props.description}</p>
    //     </div>
    //
    // </div>
    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div href="#"
             className="block p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {props.title}</h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">{props.description}</p>
        </div>
    </div>
);

export {DutyCard};


