import { FaGithub } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../typewriter-effect";

function HeadingText() {
    const words = [
        {
          text: "Turning",
        },
        {
          text: "vision",
        },
        {
          text: "into",
        },
        {
          text: "reality",
        },
        {
            text: "with",
          },
        {
          text: "Code",
          className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "and",
        },
        {
            text: "Design.",
            className: "text-pink-500 dark:text-purple-500"
        },
      ];
  return (
    <div className="flex flex-col items-center justify-center h-[20rem]">
      <p className="text-neutral-600 dark:text-neutral-300 font-poppins text-sm md:text-lg">
        A collection of my projects which I build
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="" target="_blank">
            <button className="text-white dark:text-black flex items-center gap-2 font-ubuntu font-medium bg-black dark:bg-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base hover:bg-opacity-90 dark:hover:bg-zinc-200">
            <FaGithub />
            Github
            </button>
        </a>
      </div>
    </div>
  )
}

export default HeadingText