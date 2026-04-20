import AboutUS_Topper from "../../Components/ABout_US/Toper";
import Goals from "../../Components/ABout_US/Goals";
import BestSolution from "../../Components/Home/BestSolution";
import TeamSection from "../../Components/ABout_US/TeamSection";
import {
    FaThumbsUp,
    FaPuzzlePiece,
    FaEnvelope,
    FaPercentage,
    FaBullhorn,
    FaListUl
} from "react-icons/fa";

export default function AboutUS() {
    const corporateValues = [
        {
            icon: FaThumbsUp,
            title: "Best in Class",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
        },
        {
            icon: FaPuzzlePiece,
            title: "Authenticity",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
        },
        {
            icon: FaEnvelope,
            title: "Email Support",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
        },
        {
            icon: FaPercentage,
            title: "Discounts Available",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
        },
        {
            icon: FaBullhorn,
            title: "Powerful Marketing",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
        },
        {
            icon: FaListUl,
            title: "Inventory management",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
        }
    ];

    return (
        <section className="flex flex-col items-center justify-center overflow-x-hidden min-h-screen text-[#1D2130]">
            
            <div className="w-full flex flex-col items-center pt-20 pb-12 bg-gradient-to-b from-[#E6F4FE] to-transparent">
                <AboutUS_Topper className="flex justify-center items-center w-full max-w-5xl" />
            </div>

            <div className="w-full flex flex-col items-center py-16 text-center max-w-3xl px-4">
                <h5 className="text-[#373FFF] font-bold mb-3 uppercase tracking-wide text-sm">
                    About Us
                </h5>
                <h2 className="text-4xl font-bold mb-4">
                    We're a team of data analysts
                </h2>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                </p>
            </div>

            <div className="w-full bg-[#F4F5FD] py-16 flex justify-center">
                <div className="max-w-6xl w-full px-4">
                    <Goals />
                </div>
            </div>
            
            <div className="w-full py-16 flex justify-center text-center">
                <div className="max-w-5xl w-full px-4">
                    <h2 className="text-3xl font-bold mb-2">Our corporate values</h2>
                    <p className="text-gray-500 mb-10">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.
                    </p>
                    <BestSolution
                        title=""
                        heading=""
                        solutions={corporateValues}
                        containerBg="bg-white"
                        cardBg="bg-[#FBF4FC]" 
                        iconColor="text-[#6B7CFF]"
                    />
                </div>
            </div>

            <div className="w-full py-12 flex justify-center">
                <div className="max-w-6xl w-full px-4">
                    <TeamSection />
                </div>
            </div>

        </section>
    );
}