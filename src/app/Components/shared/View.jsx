import Link from "next/link";
import GlowingOrb from "../Home/GlowingOrb";

export default function View() {
    return (
        <div className="w-full flex flex-col items-center py-24 bg-gradient-to-t from-[#E6F4FE] to-transparent text-center px-4 mt-8">
            <h2 className="text-4xl font-bold mb-4 max-w-xl">
                Are you ready to grow your business with us?
            </h2>
            <p className="text-gray-500 mb-8">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
            </p>
            <button className="bg-[#111322] hover:bg-gray-800 text-white px-8 py-3 rounded-md font-medium transition-colors">
                View Pricing
            </button>
        </div>
    );

}