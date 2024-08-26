import { ArrowUpRight } from "lucide-react"
import { Link } from "react-router-dom"
import lightImg from "../../assets/project/lightArrow.svg";
import darkImg from "../../assets/project/darkArrow.svg";
import ProjectCard from "./ProjectCard";
import TitleText from "../title-text";

function Work() {
  return (
    <div id="work" className="w-full h-full">
      <div className="flex flex-col w-full gap-8 items-center justify-center mb-5 md:px-20">
        <div className="text-4xl flex flex-col font-poppins font-bold text-center">
          <h2>Imagination Trumps</h2>
          <h2>Knowledge</h2>
        </div>
        <TitleText
            title="My Recent Work"
            description={`Here you will find some of the personal projects which showcase my knowledge related to frontend
             development, full-stack development, UI development.
            `}
          />
      </div>

      <ProjectCard />

      <div className="flex flex-col items-center justify-center gap-5 mt-6">
        <div>
          <img
            src={lightImg}
            alt="light"
            className="flex dark:hidden w-[150px] h-[150px]"
          />
          <img
            src={darkImg}
            alt="light"
            className="hidden dark:flex w-[150px] h-[150px]"
          />
        </div>

        {/** project button */}
        <Link to="/projects">
          <button className="flex items-center gap-2 bg-[#5FFb17] text-black hover:opacity-95 font-montserrat font-medium text-base rounded p-2">
            see my work
            <ArrowUpRight className="text-[#5FFb17] bg-black rounded-full w-fit p-1" />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Work