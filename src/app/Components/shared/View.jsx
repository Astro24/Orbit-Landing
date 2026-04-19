import Link from "next/link";
import GlowingOrb from "../Home/GlowingOrb";

export default function View() {
    return (
        <div className="flex justify-center items-center">
        <div className="card justify-center items-center text-center w-full max-w-4xl rounded-2xl p-4 sm:p-6 lg:p-10 ">
            <div className="card-body z-10">
                <h1 className="card-title md:text-2xl lg:text-3xl ">Are you ready to grow your business with us?</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy</p>
                <div className="card-actions justify-center">
                    <Link href="/Pricing" className="btn bg-[#1D2130]">
                        View Pricing
                    </Link>
                </div>
            </div>
            <GlowingOrb className="justify-center items-center"/>
        </div>
        </div>
    );

}