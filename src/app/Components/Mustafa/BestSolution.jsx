// @/app/Components/Mustafa/BestSolution.jsx
export default function BestSolution({ solutions, title, background}) {
  return (
    <div className="flex flex-col justify-center items-center gap-12 p-8 pt-16 bg-white">
      <h2 className="text-4xl md:text-5xl font-bold text-black">{title}</h2>

      <div className="w-full max-w-6xl mx-auto rounded-3xl bg grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
        {solutions.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex flex-col gap-4 text-left p-12">
              <Icon className="text-blue-600 text-5xl mb-2" />
              <h3 className="font-bold text-2xl text-[#1D2130] leading-snug">{item.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm max-w-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}