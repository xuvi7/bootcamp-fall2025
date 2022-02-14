export default function ScheduleItem({
                                         name,
                                         description,
                                         image,
                                         handout,
                                         slides,
                                         recording,
                                     }: { name: string; description: string; image: string; handout: string; slides?: string; recording?: string; }) {
    return <li
        className="p-5 md:p-6 backdrop-blur-md bg-opacity-50 border border-[#30363C] bg-[#0B1016] rounded-lg">
        <div className="flex items-center justify-start">
            <img src={image} className="h-12 mr-4"/>
            <div>
                <p className="text-base md:text-lg lg:text-xl">
                    {name}
                </p>
                <p className="font-mono text-xs md:text-sm opacity-50 font-light">
                    {description}
                </p>
            </div>
        </div>
        <div className="space-x-5 mt-6 text-xs md:text-sm opacity-50">
            <a className="inline-flex items-center" href={handout}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20">
                    <path fillRule="evenodd" fill="currentColor"
                          d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
                          clipRule="evenodd"/>
                </svg>
                Handout
            </a>
            {slides && <a className="inline-flex items-center" href={slides}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path
                        d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                </svg>
                Slides
            </a>}
            {recording && <a className="inline-flex items-center" href={recording}>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20"
                     fill="currentColor">
                    <path fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"/>
                </svg>
                Watch Recording
            </a>}
        </div>
    </li>
}