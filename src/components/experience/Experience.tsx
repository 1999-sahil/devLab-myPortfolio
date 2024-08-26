import { approach } from "@/constants"
import TitleText from "../title-text"

function Experience() {
  return (
    <div id="experience" className="md:px-20 my-10 flex flex-col gap-8">
        <TitleText
            title="Development approach"
            description="My approach for solving problem or developing an application"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {approach.map((app, index) => (
                <div key={index} className="bg-black dark:bg-[#e3e3e3] rounded-md p-4">
                    <div className="w-full flex items-center justify-between border-b border-zinc-600 pb-2">
                        <h2 className="flex items-start bg-white dark:bg-black text-black dark:text-white px-1 rounded-sm w-fit font-montserrat font-semibold text-base">{app.title}</h2>
                        <h2 className="w-1/4 flex justify-end text-[#5FFB17] dark:text-black text-sm font-lato font-medium">{app.step}</h2>
                    </div>
                    <p className="text-zinc-300 dark:text-black font-lato font-normal text-sm mt-2">{app.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Experience