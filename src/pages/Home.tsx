export default function Home(): JSX.Element {
    const name = "Hi, I'm Paul!";

    return (
        <section className="h-screen">
            <span className="text-center relative inset-y-1/3 z-20">
                <h1 className="font-bold text-7xl">{name}_</h1>
                <p className="text-2xl">Fullstack Developer</p>
            </span>
        </section>
    );
}
