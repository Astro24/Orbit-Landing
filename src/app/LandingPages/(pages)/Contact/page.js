"use client";
import { FaPhoneAlt } from "react-icons/fa";
import { PiPaperPlaneTiltBold } from "react-icons/pi";
import { FiMail } from "react-icons/fi";
import View from "@/app/Components/ViewPricing/View";
export default function ContactSection() {
    return (
        <section className="flex flex-col justify-center items-center py-20 bg-[#F7F8FC]">

            <h1 className="text-7xl font-bold text-center mb-10">
                Get in touch with us
            </h1>

            <div className="w-full max-w-6xl bg-[#EDEFFF] p-10 rounded-2xl">

                <div className="flex flex-col lg:flex-row gap-10">

                    <div className="rounded-xl p-6 w-full lg:w-1/2 ">
                        <h2 className="text-xl font-semibold mb-2">
                            Drop us a message
                        </h2>
                        <p className="text-gray-500 text-sm mb-6">
                            We will get back to you as soon as possible.
                        </p>

                        <form className="space-y-4">

                            <div className="flex gap-4">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-1/2 p-3 rounded-lg bg-gray-100 outline-none"
                                />
                                <input
                                    type="text"
                                    placeholder="Company Name"
                                    className="w-1/2 p-3 rounded-lg bg-gray-100 outline-none"
                                />
                            </div>

                            <input
                                type="email"
                                placeholder="Work Email"
                                className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 rounded-lg bg-gray-100 outline-none"
                            />

                            <textarea
                                placeholder="Message"
                                rows="4"
                                className="w-full p-3 rounded-lg bg-gray-100 outline-none resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[#1E293B] text-white py-3 rounded-lg hover:opacity-90 transition"
                            >
                                Send
                            </button>
                        </form>
                    </div>


                    <div className="flex flex-col justify-center gap-6 w-full lg:w-1/2 ms-20">

                        <div className="flex items-center gap-4">
                            <div className="bg-[#6B7CFF] text-white p-3 rounded-full">
                                <FaPhoneAlt />
                            </div>
                            <div>
                                <p className="font-semibold">+ 1800 145 276</p>
                                <p className="text-gray-500 text-sm">Free support</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-[#6B7CFF] text-white p-3 rounded-full">
                                <PiPaperPlaneTiltBold />
                            </div>
                            <div>
                                <p className="font-semibold">orbit@gmail.com</p>
                                <p className="text-gray-500 text-sm">Help Email support</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-[#6B7CFF] text-white p-3 rounded-full">
                                <FiMail />
                            </div>
                            <div>
                                <p className="font-semibold">sales@orbit.com</p>
                                <p className="text-gray-500 text-sm">Sales Enquiry</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <View />
        </section>
    );
}