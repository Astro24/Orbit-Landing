import Image from "next/image"

export default function FeatureShowcase() {
    return (
        <section className="max-w-7xl mx-auto bg-gradient-to-r from-[#E6F4F1] to-[#E8EEFB] py-15 px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
                <h2 className="font-bold text-5xl text-[#1D2130] leading-tight max-w-md">
                    More impressions, more conversions
                </h2>
                <p className="text-[#4C4D56] text-lg leading-relaxed max-w-lg">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy 
                    eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam 
                    voluptua invidunt ut labore.
                </p>
                <div>
                    <button className="bg-[#1D2130] text-white py-4 px-10 rounded-lg font-bold hover:opacity-90 transition-all">
                        Get Free trial
                    </button>
                </div>
            </div>

            <div className="relative flex justify-center items-center">
                <Image 
                    src="/Mustafa/Analytics_Image.svg" 
                    alt="Analytics Dashboard Illustration"
                    width={600}
                    height={400}
                    className="w-full h-auto object-contain"
                />
            </div>
        </section>
    )
}