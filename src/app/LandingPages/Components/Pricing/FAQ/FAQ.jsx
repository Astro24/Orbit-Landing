export default function FAQ() {
    return (
        <section className="flex justify-center items-center px-4 sm:px-6 lg:px-10 py-10">

            <div className="w-full max-w-6xl">

                <div className="
          flex flex-col 
          lg:flex-row 
          gap-6 lg:gap-10 
          bg-[#F0F2FE] 
          rounded-2xl 
          shadow-md 
          p-4 sm:p-6 lg:p-10
        ">

                    {/* LEFT SIDE */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-start">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">
                            Frequently Asked Questions?
                        </h1>

                        <p className="text-gray-600 text-sm sm:text-base">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className="w-full lg:w-1/2">

                        <div className="collapse collapse-plus mb-4 bg-white rounded-xl">
                            <input type="radio" name="faq" defaultChecked />
                            <div className="collapse-title font-semibold text-sm sm:text-base">
                                how do i grow my business?
                            </div>
                            <div className="collapse-content text-xs sm:text-sm">
                                Lorem ipsum dolor sit amet.
                            </div>
                        </div>

                        <div className="collapse collapse-plus mb-4 bg-white rounded-xl">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-semibold text-sm sm:text-base">
                                Can i cancel my subscription?
                            </div>
                            <div className="collapse-content text-xs sm:text-sm">
                                Yes, anytime.
                            </div>
                        </div>

                        <div className="collapse collapse-plus mb-4 bg-white rounded-xl">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-semibold text-sm sm:text-base">
                                How do I contact support?
                            </div>
                            <div className="collapse-content text-xs sm:text-sm">
                                Email us anytime.
                            </div>
                        </div>

                        <div className="collapse collapse-plus mb-4 bg-white rounded-xl">
                            <input type="radio" name="faq" />
                            <div className="collapse-title font-semibold text-sm sm:text-base">
                                is credit card required?
                            </div>
                            <div className="collapse-content text-xs sm:text-sm">
                                No, you can start with a free trial.
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}