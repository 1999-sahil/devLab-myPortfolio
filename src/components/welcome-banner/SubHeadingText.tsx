import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function SubHeadingText() {
  return (
    <div className="max-w-lg px-8 md:px-0 flex flex-col items-center justify-center text-center">
      <h2 className="font-poppins font-medium text-black dark:text-zinc-300 text-opacity-90 sm:leading-tight text-xs md:text-sm lg:text-base">
        Hey,{" "}
        <span className="font-medium font-montserrat text-[#234b33] dark:text-[#6ecf97] bg-[#6ecf97] dark:bg-[#234b33] p-[2.5px] md:p-1 rounded-md">
          I am Sahil Ahmed
        </span>
        , a versatile individual. With a passion for learning I am dedicated to
        delivering high-quality results and contribute meaningful contribution
        to dev community.
      </h2>
      <div className="flex items-center gap-4 my-8">
        <a href="" target="_blank">
          <button className="flex items-center justify-center rounded-md gap-2 hover:bg-zinc-800 dark:hover:bg-zinc-300 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-lato text-sm md:text-base font-medium px-2 py-1 lg:px-4 lg:py-2 w-full md:w-auto">
            <FaGithub />
            Github
          </button>
        </a>
        <Link to="">
          <button className="flex items-center justify-center rounded-md gap-2 hover:bg-opacity-90 bg-[#5FFB17] text-black font-lato text-sm md:text-base font-medium px-2 py-1 lg:px-4 lg:py-2 w-full md:w-auto">
            See my work
            <ArrowUpRight className="bg-black rounded-full p-1 text-[#5FFB17]" />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default SubHeadingText;
