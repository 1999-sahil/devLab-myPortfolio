import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { navigationLinks } from "@/constants";
import { containerVars, menuVars } from "@/constants/motion";
import MobileNavLink from "./MobileNavLink";
import ThemeToggle from "../theme-toggle";

import { ArrowUpRight, X } from "lucide-react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../logo";

function Header() {
  const [open, setOpen] = useState(false);

  const location = useLocation();

  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <header className="fixed border-b top-0 z-[99999] bg-white dark:bg-[#0d121c] w-full h-[3.5rem] flex items-center justify-between px-4 md:px-12 py-2">
      <div className="flex items-center w-1/2 gap-12">
        {/** Logo */}
        <Logo />

        {/** navigation links */}
        <div className="hidden md:flex gap-2">
          {navigationLinks.map((link, index) => {
            const isActive = location.hash === link.to; 
            return (
              <div
                key={index}
                className={`flex capitalize cursor-pointer text-sm px-3 py-1 rounded-sm font-ubuntu transition-all duration-200
                  ${isActive ? "bg-[#5FFB17] text-black" : "hover:bg-zinc-100 dark:hover:bg-gray-800"}
                `}
              >
                <a href={link.to} className="">{link.title}</a>
              </div>
            );
          })}
        </div>
      </div>

      {/** resume */}
      <div className="hidden md:flex items-center justify-center gap-4">
        <ThemeToggle />
        <Link to="/projects">
          <h2 className="text-sm font-lato font-medium hover:bg-zinc-100 dark:hover:bg-gray-800 px-2.5 py-2 rounded-md">
            Projects
          </h2>
        </Link>
        <Link
          to="/resume"
          className="flex items-center gap-2 text-black bg-[#5FFB17] font-lato font-medium rounded-md py-1 px-2.5"
        >
          Resume
          <ArrowUpRight className="bg-black text-[#5FFb17] p-1 rounded-full" />
        </Link>
      </div>

      {/** mobile mode */}
      <div className="md:hidden flex items-center justify-center gap-3">
        <div onClick={toggleMenu} className="cursor-pointer">
          <BiMenuAltLeft className="w-8 h-8 p-1 rounded-md text-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-gray-800" />
        </div>
      </div>

      {/** mobile navigation */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVars}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed z-50 left-0 top-0 bg-gray-100 dark:bg-[#0d121c] w-full h-screen origin-top"
          >
            {/** logo and close button */}
            <div className="flex items-center justify-between px-10 pt-6">
              <Logo />
              <div onClick={toggleMenu} className="cursor-pointer">
                <X className="w-8 h-8 p-1 rounded-md text-zinc-800 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-gray-800" />
              </div>
            </div>

            {/** mobile links */}
            <motion.div
              variants={containerVars}
              initial="initial"
              animate="open"
              exit="initial"
              onClick={toggleMenu}
              className="flex flex-col h-full justify-center items-center gap-3"
            >
              {navigationLinks.map((link, index) => {
                return (
                  <div key={index} className="overflow-hidden w-3/4">
                    <MobileNavLink title={link.title} to={link.to} />
                  </div>
                );
              })}

              {/** projects and resume link */}
              <div className="w-3/4 flex flex-col gap-4 items-center justify-center text-center">
                <Link to="/projects" className="font-poppins text-2xl font-bold mx-auto py-2 rounded-md w-full text-zinc-800 dark:text-[#5FFB17] hover:bg-zinc-200 dark:hover:bg-[#0f1728]">
                  Projects
                </Link>
                <Link to="/resume" className="font-poppins text-2xl font-bold mx-auto py-2 rounded-md w-full text-zinc-800 dark:text-[#5FFB17] hover:bg-zinc-200 dark:hover:bg-[#0f1728]">
                  Resume
                </Link>
              </div>

              {/** theme and social icons */}
              <div className="flex items-center justify-center gap-4 w-full mt-4">
                <ThemeToggle />
                <Link to="" className="hover:bg-zinc-200 dark:hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-md flex items-center justify-center w-[2.2rem] h-[2.2rem]">
                    <FaGithub className="w-[1.2rem] h-[1.2rem] text-zinc-800 dark:text-white" />
                </Link>
                <Link to="" className="hover:bg-zinc-200 dark:hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-md flex items-center justify-center w-[2.2rem] h-[2.2rem]">
                    <FaLinkedin className="w-[1.2rem] h-[1.2rem] text-zinc-700 dark:text-white" />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
