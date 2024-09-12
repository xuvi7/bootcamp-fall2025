import type { NextPage } from 'next'
import Head from 'next/head'
import ScheduleItem from "../components/ScheduleItem";
import useScrollPosition from "../util/useScrollPosition";
import { useEffect, useState } from "react";
import LinkCard from "../components/LinkCard";

const workshops: { name: string; description: string; image: string; handout: string; slides?: string; recording?: string; }[] = [
    {
        name: "Day 1: Web Fundamentals",
        description: "Start with the underlying technologies of the web: HTML, CSS, and Javascript.",
        image: "/basics.png",
        handout: "https://docs.google.com/document/d/1ebg1N5oAA9KzijbEHk7_LFuOOuyaI5zROEAIAan7w_Q/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/1UH4LuQ4RpZlkUFiINjY3zi8f4fqpdAFO3zbL6K6Mcdo/edit?usp=sharing",
        recording: "https://brown.zoom.us/rec/play/OMPtO6TKitEimhG-GPfZT3tE_aPXoJzCmtKd8utLzRUQB6XL7aXLUW0RMncuVCG__S6c9czlx6NTIwBi.sjlqbcN0o2gynRey?autoplay=true&startTime=1725926381000",
    }, {
        name: "Day 2: Express + MongoDB",
        description: "Build a server to persist and manipulate data for your web apps using Express and MongoDB.",
        image: "/backend.png",
        handout: "https://docs.google.com/document/d/1OUsq9DHk7-K0hC14dZpuYL_mR51mmxTfpkYXphof00U/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/1d8-7Dc2RJsPbKJ-ZndwGwcVKKeqB6DvFs02_vlVTikg/edit?usp=sharing",
        recording: "https://brown.zoom.us/rec/play/TuWLCxLKRS3wps6E0Q00tijdcyel6G8fWu6kqJDkApiNNbHJ5mGwVHqnCb9HFitGT0XgF4Kk9kwuVYgV.VrgQNSkf6zKXKpHL?autoplay=true&startTime=1726012558000",
    },
    {
        name: "Day 3: React and NextJS",
        description: "Build a user interface for your app using React: a modern front-end framework.",
        image: "/react.png",
        handout: "https://docs.google.com/document/d/1bjighpGkJ6kehmuQBB7XIVSigYV1waMyNfoIaYjB9HQ/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/1cseRjslSDr_mxVH6JWDLpg5NruFGhtS_2a_SbWqZq6w/edit?usp=sharing",
        recording: "https://brown.zoom.us/recording/detail?meeting_id=TwEgocnSTuuGVRhGOZuiOg%3D%3D",
    }, {
        name: "Day 4: Integration",
        description: "Connect your front-end with your server with API calls, then deploy your app to the web.",
        image: "/deploy.png",
        handout: "https://docs.google.com/document/d/1Hld8akpY6k5v2KeWvEoL1uS9mQZourflHn7bEljujfY/edit?usp=sharing",
        slides: "https://docs.google.com/presentation/d/14RujbxgLKe6B06LPbI8jnSg5vpRmPuF67GAg_arPCWo/edit?usp=sharing",
        // recording: "https://brown.zoom.us/rec/share/zM88u1r0WRDvX6nPybnlYVC7EWZ1R5IZtlyutVfb5IScPmmnD-gNxGWRK8UGQPU.96_hU7bwzUYP-uia",
    }];

const Home: NextPage = () => {
    const scrollPosition = useScrollPosition();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setLoaded(true), 300);
    }, []);

    return (<div>
        <Head>
            <title>FSAB Bootcamp Fall 2024</title>
            <meta property="og:title" content="FSAB Bootcamp Fall 2024" key="title" />
        </Head>
        <div
            className={"min-h-screen transition-opacity ease-in duration-500 " + (loaded ? "opacity-100" : "opacity-0")}>
            <div style={{ backgroundImage: "url('/flare.jpg')", backgroundPosition: "bottom" }}>
                <div
                    className={`p-4 z-50 text-sm sm:text-base flex items-center justify-between fixed bg-opacity-40 transition-all duration-150 bg-[#06080D] backdrop-blur-lg w-full ${scrollPosition < 10 && "backdrop-blur-none bg-opacity-0"}`}>
                    <p className="font-bold">Full Stack at Brown</p>
                    <nav className="space-x-6">
                        <a href="https://calendar.google.com/calendar/u/0?cid=Y19hZWVkMmJiNGY3YTE5ZGE1NGMyYTYzODBjNWUzODA2OTkwNzMxYjU5ZGExYzk3YjhjMDViZDA2OTEyYjM2NTY2QGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20">Add
                            to Calendar</a>
                        {/* <a href="https://www.fullstackatbrown.com/about">About Us</a> */}
                    </nav>
                </div>
                <div className="max-w-5xl px-4 mx-auto pt-36 space-y-24">
                    <section>
                        <p className="text-lg md:text-xl font-mono uppercase">
                            Sep 9 - 12, 2024
                        </p>
                        <h1 className="mt-2 text-4xl md:text-6xl font-semibold">
                            Web Development Bootcamp
                        </h1>
                        <p className="text-xl md:text-2xl opacity-75 font-light mt-4">
                            Meet other Full Stack at Brown members and enjoy a light snack on us, all while learning modern web
                            development.
                            Throughout the week, you&apos;ll learn industry-standard tooling and technologies by
                            building a real project you can add to your portfolio.
                        </p>
                        <p className="text-l md:text-xl opacity-75 mt-4">
                            Developer Bootcamp Times: <strong>September 9 - 12, 8pm - 10pm</strong>
                        </p>
                        <p className="text-l md:text-xl opacity-75 mt-1">
                            Location: <strong>Barus & Holley 166</strong>
                        </p>
                        <p className="text-l md:text-xl opacity-75 mt-5">
                            *Note that Designer Bootcamp times are: <strong>September 24 - 25, 8pm - 10pm</strong>
                        </p>
                        {/* <p className="text-l md:text-xl opacity-75 mt-1">
                            Zoom Link: <a className="underline" href="https://brown.zoom.us/j/96870814005">https://brown.zoom.us/j/96870814005</a>
                        </p> */}
                    </section>
                    <section>
                        <h2 className="text-3xl md:text-4xl">
                            Schedule
                        </h2>
                        <ul className="space-y-4 mt-4">
                            {workshops.slice(0, 2).map(workshop => <ScheduleItem key={workshop.name}
                                name={workshop.name}
                                description={workshop.description}
                                image={workshop.image}
                                handout={workshop.handout}
                                slides={workshop.slides}
                                recording={workshop.recording} />)}
                        </ul>
                    </section>
                </div>
            </div>
            <div className="max-w-5xl px-4 mx-auto space-y-24 mt-4">
                <section>
                    {/* NOTE: HIDING THIRD AND FOURTH DAYS */}
                    <ul className="space-y-4">
                        {workshops.slice(2, 3).map(workshop => <ScheduleItem key={workshop.name}
                            name={workshop.name}
                            description={workshop.description}
                            image={workshop.image}
                            handout={workshop.handout}
                            slides={workshop.slides}
                            recording={workshop.recording} />)}
                    </ul>
                </section>
                <section>
                    <h2 className="text-3xl md:text-4xl">
                        More stuff
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        <LinkCard title="Day 0: Set up your development environment"
                            href="https://docs.google.com/document/d/16nVVOitcIBJXxci-tApnr3Hp0v7vbCbWpbSNW_s3pFk/edit?usp=sharing"
                            description="Download and install the tooling we'll use throughout the week."
                        />
                        <LinkCard title="EXCLUSIVE RECRUITING EVENT: RSVP For Sutter Hill Ventures x FSAB!"
                            href="https://forms.gle/wYz83WuHRXxa7von9"
                            description="Wednesday, September 18th, 6-8pm Salomon 001. Fill out the RSVP form!"
                        />
                        {/*
                        <LinkCard title="Submit your project for certification"
                            href="https://forms.gle/pVP2G9pDBqaP2jNH9"
                            description="Send us your completed bootcamp project to become eligible to work on projects for
                                    Full Stack."/>
                        */}
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
