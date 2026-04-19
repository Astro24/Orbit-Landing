import AboutUS_Topper from "../../Components/ABout_US/Toper";
import Goals from "../../Components/ABout_US/Goals";
import BestSolution from "../../Components/Home/BestSolution";
import TeamSection from "../../Components/ABout_US/TeamSection"
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
        <section className="flex flex-col items-center justify-center overflow-x-hidden min-h-screen">
            <header className="max-w-2xl">
                <AboutUS_Topper className="flex justify-center items-center" />
                <div className="text-center">
                    <h5 className="bg-gradient-to-b from-[#3ACAF8] to-[#373FFF] bg-clip-text text-transparent font-bold">
                        About Us
                    </h5>
                    <h1 className="text-4xl font-bold">
                        We’re a team of data analysts
                    </h1>
                    <p className="mt-4">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                    </p>
                </div>
            </header>

            <Goals />
            
            <BestSolution
                title="Our corporate values"
                heading="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
                solutions={corporateValues}
                containerBg="bg-white"
                cardBg="bg-[#FBF4FC]"
                iconColor="text-[#6B7CFF]"
            />
            <TeamSection/>
        </section>
    );
}