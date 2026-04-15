import { BiLogoSteam } from "react-icons/bi";
import { FaMicrosoft } from "react-icons/fa6";
import { SiMcdonalds } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { SiWarnerbros } from "react-icons/si";


export default function LogesLine() {
    return (
        <div className="flex max-w-7xl mx-auto items-center justify-center gap-16 py-12">
            <div className="flex justify-center items-center">
                <BiLogoSteam className="text-5xl"/>
                <h2 className="font-bold text-3xl">Steam</h2>
            </div>
            <div className="flex justify-center items-center">
                <FaMicrosoft className="text-5xl"/>
                <h2 className="font-bold text-3xl">Microsoft</h2>
            </div>
            <div className="flex justify-center items-center">
                <SiMcdonalds className="text-5xl"/>
                <h2 className="font-bold text-3xl">cDonald's</h2>
            </div>
            <div className="flex justify-center items-center">
                <FaApple className="text-5xl"/>
                <h2 className="font-bold text-3xl">Apple</h2>
            </div>
            <div className="flex justify-center items-center">
                <SiWarnerbros className="text-5xl"/>
                <h2 className="font-bold text-3xl">Warner Bros</h2>
            </div>     
        </div>  
    )
}