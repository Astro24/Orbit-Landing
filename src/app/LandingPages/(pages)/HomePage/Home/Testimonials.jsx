export default function Testimonials({ 
    testimonials = [], 
    heading = "The stunning results our customers have experienced",
    containerBg = "bg-white",
}) {
    return (
        <section className={`py-16 px-4 ${containerBg}`}>
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-12">
                {heading && (
                    <h2 className="text-[32px] md:text-[40px] font-bold leading-tight text-center text-[#1D2130] max-w-2xl">
                        {heading}
                    </h2>
                )}

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                    {testimonials.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col items-center text-center p-10 rounded-4xl border border-[#E0E7FF] bg-white transition-shadow hover:shadow-sm"
                        >
                            <p className="text-[#1D2130] leading-relaxed text-[15px] mb-8">
                                {item.quote || item.description}
                            </p>

                            <div className="flex flex-col items-center mt-auto">
                                <img 
                                    src={item.image} 
                                    alt={item.name} 
                                    className="w-14 h-14 rounded-full object-cover mb-4 shadow-sm"
                                />
                                <h3 className="font-bold text-lg text-[#1D2130]">
                                    {item.name}
                                </h3>
                                <p className="text-xs font-medium text-[#52525B] uppercase tracking-wider mt-1">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}