import { FaShieldHalved, FaUsers } from "react-icons/fa6";
import { AiOutlineRobot } from "react-icons/ai";
import HP_Topper from "@/app/Components/Mustafa/HomePageTopper";
import BestSolution from "@/app/Components/Mustafa/BestSolution";
import UpscaleBusiness from "@/app/Components/Mustafa/UpscaleBusiness";
import FeatureShowcase from "@/app/Components/Mustafa/FeatureShowcase.jsx";

export default function Home() {
    // Define your data here so it's easy to change
    const featureData = [
        {
            icon: FaShieldHalved,
            title: "Advanced 256-bit encryption",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        },
        {
            icon: FaUsers,
            title: "Simple collaboration tools",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        },
        {
            icon: AiOutlineRobot,
            title: "Customizable AI features",
            description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
        }
    ];

    return (
        <div>
            <HP_Topper />

            {/* Now you just pass the array and title as props */}
            <BestSolution
                title="Features"
                solutions={featureData}
            />

            <UpscaleBusiness />
            <FeatureShowcase />
        </div>
    );
}