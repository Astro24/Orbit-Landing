const Goals_Section = [
  {
    tag: "Our Goals",
    title: "To upscale your business to the next level",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  },
  {
    tag: "Our Vision",
    title: "To provide solutions for growing companies",
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum."
  }
];

export default function Goals() {
  return (
    <section className="w-full bg-[#F0F2FE] py-10 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          {Goals_Section.map((item, index) => (
            <div key={index} className="flex flex-col gap-4">
              <h5 className="bg-gradient-to-r from-[#373FFF] to-[#3ACAF8] bg-clip-text text-transparent font-bold uppercase tracking-wide text-sm inline-block w-fit">
                {item.tag}
              </h5>
              
              <h2 className="text-[#1D2130] text-3xl md:text-4xl font-bold leading-tight">
                {item.title}
              </h2>
              
              <p className="text-[#6D6E76] text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}