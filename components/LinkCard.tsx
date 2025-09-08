export default function LinkCard({title, description, href}: { title: string; description: string; href: string; }) {
    return <a href={href}
        target="_blank"
        rel="noreferrer"
        className="p-5 block group md:p-6 backdrop-blur-md bg-opacity-50 border border-[#30363C] bg-[#0B1016] rounded-lg transition-all duration-200">
        <div>
            <p className="text-lg md:text-xl group-hover:underline">
                {title}
            </p>
            <p className="font-mono text-xs md:text-sm opacity-50 font-light mt-1">
                {description}
            </p>
        </div>
    </a>
}