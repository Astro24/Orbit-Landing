"use client";
import { useState } from "react";

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
        <div className="min-h-screen px-4 sm:px-6 lg:px-10 py-10 flex flex-col items-center bg-white">

            {/* heading */}
            <div className="text-center max-w-2xl mb-8">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold">
                    Pricing plan that suit you
                </h1>
                <p className="text-sm sm:text-base md:text-lg mt-3 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>

            {/* tabs */}
            <div className="flex bg-[#E0E4FC] rounded-2xl p-1 mb-10 w-full max-w-xs sm:max-w-sm justify-between">

                <button
                    onClick={() => onChange("month")}
                    className={`flex-1 py-2 text-sm sm:text-base rounded-2xl transition-all duration-300
          ${variant === "month"
                            ? "bg-[#1D2130] text-white"
                            : "text-black"
                        }`}
                >
                    Monthly
                </button>

                <button
                    onClick={() => onChange("year")}
                    className={`flex-1 py-2 text-sm sm:text-base rounded-2xl transition-all duration-300
          ${variant === "year"
                            ? "bg-[#1D2130] text-white"
                            : "text-black"
                        }`}
                >
                    Yearly
                </button>
            </div>

            {/* cards */}
            <div className="
        w-full max-w-7xl
        grid gap-6
        grid-cols-1 
        sm:grid-cols-2 
        lg:grid-cols-3
      ">
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedPlan(i)}
                        className={`p-5 sm:p-6 rounded-2xl cursor-pointer transition-all duration-300

            ${selectedPlan === i
                                ? "bg-gradient-to-r from-[#D7E7F9] to-[#D5F4EC] scale-[1.03] sm:scale-105 shadow-xl border-2 border-[#384295]"
                                : "bg-white border hover:shadow-md"
                            }
            `}
                    >
                        <h2 className="text-lg sm:text-xl font-bold text-center mb-2">
                            {plan.name}
                        </h2>

                        <p className="text-center text-gray-400 text-xs sm:text-sm mb-4">
                            {plan.comment}
                        </p>

                        <ul className="flex flex-col gap-2 sm:gap-3 mb-6">
                            {plan.features.map((feature, i) => (
                                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm">
                                    <span className="text-green-500">✔</span>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="text-center mb-4">
                            <h3 className="text-xl sm:text-2xl font-bold">
                                {plan.price}
                            </h3>
                        </div>

                        <button className="w-full bg-black text-white py-2 text-sm sm:text-base rounded-lg hover:opacity-80 transition">
                            Get started
                        </button>
                    </div>
                ))}
            </div>

        </div>
    );
}