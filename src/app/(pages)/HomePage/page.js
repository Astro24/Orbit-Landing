import { FaShieldHalved, FaUsers } from "react-icons/fa6";
import { AiOutlineRobot } from "react-icons/ai";
import { MdOutlineCamera } from "react-icons/md";
import { IoMdChatboxes } from "react-icons/io";
import { RiRobot2Fill } from "react-icons/ri";
import { GiNetworkBars } from "react-icons/gi";
import { IoPersonAddSharp } from "react-icons/io5";
import { SiActivitypub } from "react-icons/si";
import HP_Topper from "@/app/Components/Mustafa/HomePageTopper";
import BestSolution from "@/app/Components/Mustafa/BestSolution";
import UpscaleBusiness from "@/app/Components/Mustafa/UpscaleBusiness";
import FeatureShowcase from "@/app/Components/Mustafa/FeatureShowcase.jsx";
import LogesLine from "@/app/Components/Mustafa/LogesLine.jsx";

const primaryFeatures = [
    {
        icon: FaShieldHalved,
        title: "High security to protect from piracy",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
        icon: FaUsers,
        title: "Premium quality performance",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
        icon: AiOutlineRobot,
        title: "Full time customer support - 24/7",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
];

const secondaryFeatures = [
    {
        icon: MdOutlineCamera,
        title: "Advanced 256-bit encryption",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
        icon: IoMdChatboxes,
        title: "Simple collaboration tools",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
    {
        icon: RiRobot2Fill,
        title: "Customizable AI features",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.",
    },
];

export default function Home() {
    return (
        <div className="max-w-7xl mx-auto">
            <HP_Topper />

            <h5 className="flex justify-center items-center bg-gradient-to-b from-[#3ACAF8] to-[#373FFF] bg-clip-text text-transparent font-bold">
                High-quality
            </h5>

            <BestSolution
                title={<>We have the Best Solution <br /> for your Business</>}
                solutions={primaryFeatures}
            />

            <UpscaleBusiness />
            <FeatureShowcase />
            <LogesLine/>

            <UpscaleBusiness
                title="Discover More"
                BigTitlw="Analyze your sales and marketing leads"
                Paragraph="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
                IconBG="bg-[#F4F5F7]"
                Simples={[
                    { id: 1,Icon: <GiNetworkBars /> , text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
                    { id: 2,Icon: <IoPersonAddSharp /> , text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
                    { id: 3,Icon: <SiActivitypub /> , text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr." },
                ]}
            />

            <BestSolution
                heading="Features"
                solutions={secondaryFeatures}
                containerBg="bg-white"
                cardBg="bg-[#F9F6FF]"
                iconColor="text-[#5D5FEF]"
            />
        </div>
    );
}