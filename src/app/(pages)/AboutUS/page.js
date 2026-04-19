import AboutUS_Topper from "../../Components/ABout_US/Toper"
import Goals from "../../Components/ABout_US/Goals"

export default function AboutUS() {
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
        </section>
    )
}