"use client";
import { useState } from "react";
import { ImCheckmark } from "react-icons/im";

export default function Pricing({ variant, onChange }) {
    const [selectedPlan, setSelectedPlan] = useState(1);

    const plans = [
        {
            name: "Regular",
            comment: "Starter Plan",
            price: "Free",
            features: [
                "Limited Projects",
                "Regular Support Business",
                "1 month Free Trial",
                "3GB storage",
                "Ads Preview",
            ],
        },
        {
            name: "Platinum",
            comment: "For the best results",
            price: variant === "year" ? "$4104" : "$342",
            features: [
                "Limited Projects",
                "Regular Support Business",
                "1 month Free Trial",
                "20GB storage",
                "Ads Preview",
                "Real-time collaboration",
            ],
        },
        {
            name: "Standard",
            comment: "Most popular",
            price: variant === "year" ? "$2808" : "$234",
            features: [
                "Limited Projects",
                "Regular Support Business",
                "1 month Free Trial",
                "10GB storage",
                "Ads Preview",
            ],
        },
    ];

    return (
        <div className="min-h-screen px-6 py-16 flex flex-col items-center bg-[#F7F8FC]">

            {/* Title */}
            <div className="text-center max-w-2xl mb-10">
                <h1 className="text-4xl md:text-5xl font-bold">
                    Pricing plan that suit you
                </h1>
                <p className="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            {/* Monthly and Yearly */}
            <div className="flex bg-[#EDEFFF] rounded-full p-1 mb-12 w-[260px]">
                <button
                    onClick={() => onChange("month")}
                    className={`flex-1 py-2 rounded-full text-sm font-medium transition
                    ${variant === "month"
                            ? "bg-[#1D2130] text-white shadow"
                            : "text-gray-600"
                        }`}
                >
                    Monthly
                </button>

                <button
                    onClick={() => onChange("year")}
                    className={`flex-1 py-2 rounded-full text-sm font-medium transition
                    ${variant === "year"
                            ? "bg-[#1D2130] text-white shadow"
                            : "text-gray-600"
                        }`}
                >
                    Yearly
                </button>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

                {plans.map((plan, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedPlan(i)}
                        className={`p-8 rounded-3xl cursor-pointer transition-all duration-300 text-center

                        ${selectedPlan === i
                                ? "bg-gradient-to-r from-[#D7E7F9] to-[#D5F4EC] scale-105 shadow-xl border border-[#384295]"
                                : "bg-white shadow-sm hover:shadow-md"
                            }
                        `}
                    >
                        {/* Name */}
                        <h2 className="text-2xl font-bold mb-2">
                            {plan.name}
                        </h2>

                        <p className="text-gray-400 text-sm mb-6">
                            {plan.comment}
                        </p>

                        {/* Price */}
                        <div className="mb-6">
                            <h3 className="text-3xl font-bold">
                                {plan.price}
                            </h3>
                        </div>

                        {/* Features */}
                        <ul className="flex flex-col gap-3 text-left mb-8">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-sm">
                                    <span className="text-green-500">
                                        <ImCheckmark size={14} />
                                    </span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button className="w-full bg-black text-white py-2 rounded-lg hover:opacity-80 transition">
                            Get started
                        </button>
                    </div>
                ))}

            </div>

        </div>
    );
}