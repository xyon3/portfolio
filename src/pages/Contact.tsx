import { LinkedInLogoIcon, GitHubLogoIcon } from '@radix-ui/react-icons';
import { useEffect, useState } from 'react';

export default function Contact(): JSX.Element {
    const iconSize = 42;
    const iconStyle = 'mr-2 hover:cursor-pointer';

    const [bounceIndex, setBounceIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBounceIndex((prevIndex) => (prevIndex + 1) % 2);
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <section id="contact" className="h-screen grid grid-cols-2 items-center gap-8">
            <div>
                <p className="text-6xl w-96">LET'S MAKE SOMETHING COOL!</p>
                <span className="flex pt-2">
                    <a
                        href="https://www.linkedin.com/in/reyespauldavid/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedInLogoIcon
                            className={`${iconStyle} ${
                                bounceIndex === 0 ? 'animate-spin' : ''
                            }`}
                            width={iconSize}
                            height={iconSize}
                        />
                    </a>

                    <a
                        href="https://github.com/xyon3"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <GitHubLogoIcon
                            className={`${iconStyle} ${
                                bounceIndex === 1 ? 'animate-spin' : ''
                            }`}
                            width={iconSize}
                            height={iconSize}
                        />
                    </a>
                </span>
            </div>

            <div className="flex flex-col text-lg">
                <form className="flex flex-col">
                    <input
                        className="border rounded-lg my-1 p-2 border-black"
                        type="text"
                        placeholder="Enter your email"
                    />
                    <textarea
                        className="border rounded-lg my-1 p-2 border-black resize-none"
                        rows={10}
                        cols={40}
                        placeholder="Write your message here!"
                    ></textarea>
                </form>
                <button className="bg-blue-600 text-white p-4 py-1 rounded self-end">
                    Send
                </button>
            </div>
        </section>
    );
}
