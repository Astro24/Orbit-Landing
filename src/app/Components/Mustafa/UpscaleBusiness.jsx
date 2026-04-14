import { FaArrowRight } from "react-icons/fa6";

export default function UpscaleBusiness({
  title = "Why should you work with us?",
  BigTitlw = "To upscale your business to the next level",
  Paragraph = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.",
  Simples = [
    { Icon: <FaArrowRight />, id: 1, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { Icon: <FaArrowRight />, id: 2, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
    { Icon: <FaArrowRight />, id: 3, text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
  ],
  IconBG = "bg-[#FFB1B1]",
}) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 text-left p-10 md:p-20 items-center justify-center">
      <div className="space-y-4">
        <h5 className="bg-gradient-to-b from-[#3ACAF8] to-[#373FFF] bg-clip-text text-transparent font-bold uppercase tracking-wide">
          {title}
        </h5>
        <h3 className="font-extrabold text-4xl text-[#1D2130] leading-tight">
          {BigTitlw}
        </h3>
        <p className="text-gray-500 pr-0 md:pr-10">
          {Paragraph}
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {Simples.map((item, index) => (
          <div key={item.id || index} className="flex items-center gap-4">
            <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${IconBG}`}>
              {item.Icon}
            </div>
            <p className="font-semibold text-[#1D2130] leading-snug">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}