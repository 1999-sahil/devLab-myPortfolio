import { mobileLinkVars } from "@/constants/motion";
import { motion } from "framer-motion";

import { Link } from "react-router-dom";

interface MobileNavLinkProps {
  title: string;
  to: string;
}

function MobileNavLink({ title, to }: MobileNavLinkProps) {
  return (
    <motion.div
      variants={mobileLinkVars}
      className="flex items-center justify-center cursor-pointer capitalize font-poppins text-lg font-bold mx-auto py-1 rounded-md w-full text-zinc-800 dark:text-[#5FFB17] hover:bg-zinc-200 dark:hover:bg-[#0f1728]"
    >
      <Link to={to}>{title}</Link>
    </motion.div>
  )
}

export default MobileNavLink