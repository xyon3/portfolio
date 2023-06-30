import { EyeOpenIcon, CodeIcon } from '@radix-ui/react-icons';

type ProjectInfo = {
    title: string;
    desc: string;
    techUsed: string[];
    sourceCode: string;
    liveTest: string;
};

function ProjectCard(props: ProjectInfo): JSX.Element {
    const { title, desc, techUsed, sourceCode, liveTest } = props;

    return (
        <div className="border rounded-lg">
            <div className="h-48"></div>
            <div className="px-4">
                <h6 className="font-bold pt-2">{title}</h6>
                <p className="text-sm opacity-75">{desc}</p>
                <p className="text-center p-2">
                    {techUsed.map((e) => (
                        <span className="text-xs opacity-60"> |{e}</span>
                    ))}
                </p>
            </div>
            <div className="flex justify-around p-2 text-base">
                <a className="flex items-center text-blue-500" href={liveTest}>
                    {' '}
                    <span>Live Test</span> &nbsp; <EyeOpenIcon />
                </a>{' '}
                |
                <a
                    className="flex items-center text-green-500"
                    href={sourceCode}
                >
                    {' '}
                    <span>Source</span> &nbsp; <CodeIcon />{' '}
                </a>
            </div>
        </div>
    );
}

export default function Projects(): JSX.Element {
    const projects: ProjectInfo[] = [
        {
            title: 'Genesis Game Store',
            desc: 'Genesis is an e-commerce website where people can buy and distribute games',
            techUsed: ['ReactJS', 'Styled Components'],
            sourceCode: 'https://github.com/xyon3/genesis-game-store',
            liveTest: 'https://github.com/xyon3/genesis-game-store',
        },
        {
            title: 'Genesis Game Store',
            desc: 'Genesis is an e-commerce website where people can buy and distribute games',
            techUsed: ['ReactJS', 'Styled Components'],
            sourceCode: 'https://github.com/xyon3/genesis-game-store',
            liveTest: 'https://github.com/xyon3/genesis-game-store',
        },
        {
            title: 'Genesis Game Store',
            desc: 'Genesis is an e-commerce website where people can buy and distribute games',
            techUsed: ['ReactJS', 'Styled Components'],
            sourceCode: 'https://github.com/xyon3/genesis-game-store',
            liveTest: 'https://github.com/xyon3/genesis-game-store',
        },
        {
            title: 'Genesis Game Store',
            desc: 'Genesis is an e-commerce website where people can buy and distribute games',
            techUsed: ['ReactJS', 'Styled Components'],
            sourceCode: 'https://github.com/xyon3/genesis-game-store',
            liveTest: 'https://github.com/xyon3/genesis-game-store',
        },
    ];

    return (
        <section className="h-screen flex flex-col justify-center items-center">
            <div className="grid grid-cols-4 px-24 gap-6">
                {projects.map((e) => {
                    return (
                        <ProjectCard
                            title={e.title}
                            desc={e.desc}
                            techUsed={e.techUsed}
                            sourceCode={e.sourceCode}
                            liveTest={e.liveTest}
                        />
                    );
                })}
            </div>
            <div className="p-6 text-sm">
                <span className="text-red-500">Note: </span> Please give the
                projects at least thirty (30) seconds to spin up, since all of
                them are deployed using free/hobbyist plans from various hosting
                services.{' '}
            </div>
        </section>
    );
}
