import Image from "next/image"

export default function HP_Topper() {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-6 p-8">
            <div className="max-w-2xl">
                <h1 className="text-[42px] font-bold leading-tight">
                    The Best Software to Grow your Sales and Services
                </h1>
                <p className="text-gray-600 mt-4">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                </p>
            </div>

            <div className="relative flex items-center w-full max-w-[450px]">
                <input
                    type="email"
                    placeholder="Enter your Email"
                    className="h-[64px] w-full bg-white rounded-2xl pl-6 pr-[160px] border border-gray-300 focus:outline-none focus:border-[#14ADD6] shadow-sm"
                />
                <button className="absolute right-2 bg-[#2B2E3C] text-white h-[48px] px-6 rounded-xl font-bold hover:bg-[#14ADD6] transition-colors">
                    Get Your Free Trial
                </button>
            </div>

            <div className="mt-8">
                <Image 
                    src="/Mustafa/Dashboard image.svg" 
                    alt="Dashboard Preview"
                    width={800} 
                    height={500}
                    priority
                />
            </div>
        </div>
    )
}