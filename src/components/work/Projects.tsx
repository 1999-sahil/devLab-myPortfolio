import Footer from "../footer/Footer"
import ProfileTagMarquee from "../profileTag-marquee"
import HeadingText from "./HeadingText"
import { ProjectsBentoGrid } from "./ProjectsBentoGrid"

function Projects() {
  return (
    <div className="mt-[3.5rem] ">
        <div className="text-white gridLinesBg">
            <HeadingText />
        </div>
        <ProfileTagMarquee />
        <div className="px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 my-12">
                <span className="bg-[#5FFB17] text-xl text-black text-center font-montserrat font-semibold p-1 rounded whitespace-nowrap">
                    My Projects
                </span>
                <span className="text-sm w-full md:w-1/2 text-center md:text-start font-poppins text-[#333] dark:text-[#e3e3e3]">
                    Here are the list of my projects which are Frontend focussed, Full stack, User Interfaces, API handling all of these with latest technologies like Nextjs, Tailwind CSS, Typescript, MySql, MongoDB, Shadcn UI, Rapid API's
                </span>
            </div>
            <ProjectsBentoGrid />
        </div>
        <Footer />
    </div>
  )
}

export default Projects