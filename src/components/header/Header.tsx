import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import { navigationLinks } from "@/constants";
import { containerVars, menuVars } from "@/constants/motion";
import MobileNavLink from "./MobileNavLink";
import ThemeToggle from "../theme-toggle";

import { UserRoundSearch, X } from "lucide-react";
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
                className={`flex capitalize cursor-pointer text-sm px-3 py-1 rounded-sm font-ubuntu transition-all duration-200 hover:bg-zinc-100 dark:hover:bg-gray-800
                  ${isActive ? "bg-[#5FFB17] text-black" : ""}
                  ${isActive && "hover:bg-[#5FFB17] dark:hover:bg-[#5FFB17]"}
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
        <Link to="/resume">
          <h2 className="underline underline-offset-2 text-sm font-poppins font-medium">
            Resume
          </h2>
        </Link>
        <Link
          to=""
          className="inline-flex overflow-hidden text-white dark:text-zinc-800 bg-zinc-800 dark:bg-white rounded-md group"
        >
          <span className="px-2 text-white bg-[#5FFB17] group-hover:bg-[#4cdc09] flex items-center justify-center">
            <UserRoundSearch className="w-4 h-4" />
          </span>
          <span className="px-3 py-1.5 text-sm font-poppins">Hire Me</span>
        </Link>
      </div>

      {/** mobile mode */}
      <div className="md:hidden flex items-center justify-center gap-3">
        <div onClick={toggleMenu} className="cursor-pointer">
          <BiMenuAltLeft className="w-7 h-7 text-zinc-800 dark:text-zinc-300" />
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
            className="fixed z-50 left-0 top-0 bg-zinc-100 dark:bg-[#0d121c] w-full h-screen origin-top"
          >
            {/** logo and close button */}
            <div className="flex items-center justify-between px-10 pt-6">
              <Logo />
              <div onClick={toggleMenu} className="cursor-pointer">
                <X className="w-7 h-7" />
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

              {/** resume button */}
              <div className="flex items-center justify-center gap-4 w-full mt-4">
                <ThemeToggle />
                <Link to="" className="hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-transform duration-300 ease-in-out rounded-md flex items-center justify-center w-[2.2rem] h-[2.2rem]">
                    <FaGithub className="w-[1.2rem] h-[1.2rem] text-zinc-800 dark:text-white" />
                </Link>
                <Link to="" className="hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-transform duration-300 ease-in-out rounded-md flex items-center justify-center w-[2.2rem] h-[2.2rem]">
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
