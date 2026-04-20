import { LuOrbit, LuLayoutGrid, LuMountainSnow, LuShieldHalf } from "react-icons/lu";
import { PiCookingPot } from "react-icons/pi";

const logos = [
    {
        icon: <PiCookingPot className="text-5xl text-slate-700" />,
        label: "VAPOR",
        className: "font-bold text-3xl tracking-tighter",
    },
    {
        icon: <LuLayoutGrid className="text-5xl text-blue-600" />,
        label: "QUADRANT",
        className: "font-semibold text-3xl",
    },
    {
        icon: <LuMountainSnow className="text-5xl text-amber-500" />,
        label: "ARCHWAY",
        className: "font-light text-3xl",
    },
    {
        icon: <LuOrbit className="text-5xl text-zinc-800" />,
        label: "CORE",
        className: "font-bold text-3xl",
    },
    {
        icon: <LuShieldHalf className="text-5xl text-indigo-900" />,
        label: "SHIELD",
        className: "font-serif text-3xl italic",
    },
];

export default function LogesLine() {
    return (
        <div className="w-full overflow-hidden py-12">
            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                .marquee-track {
                    display: flex;
                    width: max-content;
                    animation: marquee 20s linear infinite;
                }
                .marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="marquee-track">
                {[...logos, ...logos].map((item, i) => (
                    <div
                        key={i}
                        className="flex justify-center items-center gap-2 px-16"
                    >
                        {item.icon}
                        <h2 className={item.className}>{item.label}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}

