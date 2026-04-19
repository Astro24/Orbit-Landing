export default function BestSolution({ 
    solutions = [], 
    title,
    heading,
    containerBg = "bg-white",
    cardBg = "bg-[#F4F6FF]",
    iconColor = "text-[#6B7CFF]",
}) {
    return (
        <div className={`max-w-7xl mx-auto flex flex-col justify-center items-center gap-12 p-8 pt-16 ${containerBg}`}>
            {title && (
                <h2 className="text-[36px] font-bold leading-tight text-center text-[#1D2130]">
                    {title}
                </h2>
            )}
            {heading && (
                <h2 className="text-[36px] font-bold leading-tight text-center text-[#1D2130]">
                    {heading}
                </h2>
            )}
            <div className={`w-full max-w-6xl mx-auto rounded-3xl p-12 grid grid-cols-1 md:grid-cols-3 gap-10 ${cardBg}`}>
                {solutions.map((item, index) => {
                    const Icon = item.icon;
                    return (
                        <div key={index} className="flex flex-col gap-4 text-left">
                            <Icon className={`${iconColor} text-5xl mb-2`} />
                            <h3 className="font-bold text-2xl text-[#1D2130] leading-tight">
                                {item.title}
                            </h3>
                            <p className="text-[#52525B] leading-relaxed text-sm">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}