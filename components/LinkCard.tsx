export default function LinkCard({title, description}: { title: string; description: string; }) {
    return <div
        className="p-5 group md:p-6 backdrop-blur-md bg-opacity-50 hover:bg-opacity-0 border border-[#30363C] bg-[#0B1016] rounded-lg transition-all duration-200">
        <div>
            <p className="text-lg md:text-xl group-hover:underline">
                {title}
            </p>
            <p className="font-mono text-xs md:text-sm opacity-50 font-light mt-1">
                {description}
            </p>
        </div>
    </div>
}