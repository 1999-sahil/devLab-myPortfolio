import { motion } from "framer-motion";
import { GiStarShuriken } from "react-icons/gi";

function ProfileTagMarquee() {
  const tags = [
    "Frontend",
    "Programmer",
    "Developer",
    "Engineer",
    "User Interfaces",
    "Backend",
    "Full Stack",
    "Frontend",
    "Programmer",
    "Developer",
    "Engineer",
    "User Interfaces",
    "Backend",
    "Full Stack"
  ];

  return (
    <div className="w-full h-[35px] md:h-[50px] bg-[#333] dark:bg-zinc-100 flex items-center justify-center px-8">
      <div className="flex gap-6 container text-white dark:text-zinc-900 overflow-x-hidden">
        <motion.div 
          initial={{ x: 0 }}
          animate= {{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-6 font-montserrat text-sm md:text-base"
        >
          {tags.map((tag, index) => (
            <div key={index} className="flex gap-6 items-center">
              {tag}
              <GiStarShuriken className="w-4 h-4" />
            </div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ x: 0 }}
          animate= {{ x: "-100%" }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex flex-shrink-0 gap-6 font-montserrat text-sm md:text-base"
        >
          {tags.map((tag, index) => (
            <div key={index} className="flex gap-6 items-center">
              {tag}
              <GiStarShuriken className="w-4 h-4" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default ProfileTagMarquee
