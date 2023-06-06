export default function About(): JSX.Element {
    const info = [
        <p className="w-3/5">
            I am a Web Developer with an adventurous mind eager to learn about
            technology. I can create beautiful websites using high demand
            frameworks.
        </p>,
        <span>Flutter, Docker, Linux, Figma, Stripe, JavaScript</span>,
    ];

    return (
        <section className="h-screen flex flex-col justify-center items-center text-xl">
            {info[0]}
            <div className="absolute top-[190vh]">button button button</div>
        </section>
    );
}
