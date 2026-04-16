export default function Goals() {
  return (
    <section className="bg-[#F4F7FF] py-20 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        {Goals_Section.map((item, index) => (
          <div key={index} className="flex flex-col gap-4">
            {/* Gradient Tag */}
            <h5 className="bg-gradient-to-r from-[#3ACAF8] to-[#373FFF] bg-clip-text text-transparent font-bold text-lg">
              {item.tag}
            </h5>
            
            {/* Main Title */}
            <h2 className="text-[#1D2130] text-4xl md:text-5xl font-bold leading-tight">
              {item.title}
            </h2>
            
            {/* Description */}
            <p className="text-[#6D6E76] text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}