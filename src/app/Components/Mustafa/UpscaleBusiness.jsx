import { FaArrowRight } from "react-icons/fa6";

export default function UpscaleBusiness() {
  return (
    <div className="grid grid-cols-2 gap-13 text-left p-23 items-center">
      <div className="space-y-4">
        <h5 className="bg-liner-to-b from-[#3ACAF8] to-[#373FFF] bg-clip-text text-transparent font-bold">
          Why should you work with us?
        </h5>
        <h3 className="font-extrabold text-3xl text-[#1D2130] leading-tight">
          To upscale your business <br /> to the next level
        </h3>
        <p className="text-gray-500 pr-10">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
          voluptua invidunt ut labore.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-4">
            <div className="shrink-0 w-12 h-12 bg-[#FFB1B1] rounded-full flex items-center justify-center">
              <FaArrowRight className="text-black" />
            </div>
            <p className="font-semibold text-[#1D2130] leading-snug">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}