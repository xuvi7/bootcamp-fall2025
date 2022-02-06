import type {NextPage} from 'next'
import ScheduleItem from "../components/ScheduleItem";
import useScrollPosition from "../util/useScrollPosition";
import {useEffect, useState} from "react";

const workshops: { name: string; description: string; image: string; }[] = [
    {
        name: "Day 1: Web Development Fundamentals",
        description: "Start with the underlying technologies of the web: HTML, CSS, and Javascript.",
        image: "/basics.png"
    }, {
        name: "Day 2: Back-end",
        description: "Build a server to persist and manipulate data for your web apps using Express and MongoDB.",
        image: "/backend.png"
    },
    {
        name: "Day 3: Front-end",
        description: "Build a user interface for your app using React: a modern front-end framework.",
        image: "/react.png"
    }, {
        name: "Day 4: Bringing it all together",
        description: "Connect your front-end with your server with API calls, then deploy your app to the web.",
        image: "/deploy.png"
    }, {
        name: "Day 5: Closing",
        description: "Add the finishing touches to your app and see what's next.",
        image: "/touches.png"
    }];

const Home: NextPage = () => {
    const scrollPosition = useScrollPosition();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 300);
    }, []);

    return (<div>
        <div
            className={"min-h-screen transition-opacity ease-in duration-500 " + (loaded ? "opacity-100" : "opacity-0")}>
            <div style={{backgroundImage: "url('/flare.jpg')", backgroundPosition: "bottom"}}>
                <div
                    className={`p-4 z-50 flex items-center justify-between fixed bg-opacity-40 transition-all duration-150 bg-[#06080D] backdrop-blur-lg w-full ${scrollPosition < 10 && "backdrop-blur-none bg-opacity-0"}`}>
                    <p className="font-bold">Full Stack at Brown</p>
                    <div className="space-x-9">
                        <a>Add to Calendar</a>
                        <a>About</a>
                    </div>
                </div>
                <div className="max-w-5xl px-4 mx-auto pt-36 space-y-24">
                    <section>
                        <p className="text-lg md:text-xl font-mono uppercase">
                            Feb 14 — 18, 2022
                        </p>
                        <h1 className="mt-2 text-4xl md:text-6xl font-semibold">
                            Web Development Bootcamp
                        </h1>
                        <p className="text-xl md:text-2xl opacity-75 font-light mt-4">
                            Meet other Full Stack at Brown members and enjoy a meal on us, all while learning modern web
                            development.
                            Throughout the week, we&apos;ll introduce you to industry standard tooling and technologies
                            by building a real project.
                        </p>
                    </section>
                    <section>
                        <h2 className="text-3xl md:text-4xl">
                            Schedule
                        </h2>
                        <ul className="space-y-4 mt-4">
                            {workshops.slice(0, 2).map(workshop => <ScheduleItem key={workshop.name}
                                                                                 name={workshop.name}
                                                                                 description={workshop.description}
                                                                                 image={workshop.image}/>)}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="max-w-5xl px-4 mx-auto space-y-24 mt-4">
                <section>
                    <ul className="space-y-4">
                        {workshops.slice(2).map(workshop => <ScheduleItem key={workshop.name}
                                                                          name={workshop.name}
                                                                          description={workshop.description}
                                                                          image={workshop.image}/>)}
                    </ul>
                </section>
                <section>
                    <h2 className="text-3xl md:text-4xl">
                        More stuff
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <div
                            className="p-5 md:p-6 backdrop-blur-md bg-opacity-50 border border-[#30363C] bg-[#0B1016] rounded-lg">
                            <div>
                                <p className="text-lg md:text-xl">
                                    Set up your development environment
                                </p>
                                <p className="font-mono text-xs md:text-sm opacity-50 font-light mt-1">
                                    Before starting, download and install the tooling we&apos;ll use all week.
                                </p>
                            </div>
                        </div>
                        <div
                            className="p-5 md:p-6 backdrop-blur-md bg-opacity-50 border border-[#30363C] bg-[#0B1016] rounded-lg">
                            <div>
                                <p className="text-lg md:text-xl">
                                    Download project starter
                                </p>
                                <p className="font-mono text-xs md:text-sm opacity-50 font-light mt-1">
                                    Clone the starter code you&apos;ll complete throughout the bootcamp.
                                </p>
                            </div>
                        </div>
                        <div
                            className="p-5 md:p-6 backdrop-blur-md bg-opacity-50 border border-[#30363C] bg-[#0B1016] rounded-lg">
                            <div>
                                <p className="text-lg md:text-xl">
                                    View project demo
                                </p>
                                <p className="font-mono text-xs md:text-sm opacity-50 font-light mt-1">
                                    See a live demo of the project you&apos;ll implement in bootcamp.
                                </p>
                            </div>
                        </div>
                        <div
                            className="p-5 md:p-6 backdrop-blur-md bg-opacity-50 border border-[#30363C] bg-[#0B1016] rounded-lg">
                            <div>
                                <p className="text-lg md:text-xl">
                                    Submit your project for certification
                                </p>
                                <p className="font-mono text-xs md:text-sm opacity-50 font-light mt-1">
                                    Send us your completed bootcamp project to become eligible to work on projects for
                                    Full Stack.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <footer>
                <p className="text-center opacity-40 mb-12 my-24">
                    © {(new Date()).getFullYear()} Full Stack at Brown. All rights reserved.
                </p>
            </footer>
        </div>
    </div>)
}

export default Home
