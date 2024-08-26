import { FaGithub } from "react-icons/fa";
import { TypewriterEffectSmooth } from "../typewriter-effect";
import lightImg from "../../assets/project/lightArrow.svg";
import darkImg from "../../assets/project/darkArrow.svg";

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
      className: "text-pink-500 dark:text-purple-500",
    },
  ];


  return (
    <div className="flex flex-col items-center justify-center h-[25rem]">
      <p className="text-neutral-600 dark:text-neutral-300 font-poppins text-sm md:text-lg">
        A collection of my projects which I build
      </p>
      <div>
        <div className="flex gap-1 flex-col text-black dark:text-white my-4 w-full text-2xl leading-tight items-center justify-center font-montserrat font-extrabold md:hidden">
          Turning vision into reality with
          <h2 className="flex gap-1">
            <span className="text-blue-500">Code</span>
            and
            <span className="text-pink-500 dark:text-purple-500">Design.</span>
            <span className="ml-2 w-1 h-7 rounded-md animate-pulse duration-400 bg-[#5FFB17]"></span>
          </h2>
        </div>
        <div className="hidden md:flex">
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="" target="_blank">
          <button className="text-white dark:text-black flex items-center gap-2 font-ubuntu font-medium bg-black dark:bg-white px-3 md:px-4 py-1 md:py-2 rounded-md text-sm md:text-base hover:bg-opacity-90 dark:hover:bg-zinc-200">
            <FaGithub />
            Github
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
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
      </div>
    </div>
  );
}

export default HeadingText;
