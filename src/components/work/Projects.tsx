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
        <div className="px-4 py-6">
            <ProjectsBentoGrid />
        </div>
        <Footer />
    </div>
  )
}

export default Projects