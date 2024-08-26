import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function SocialIcons() {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <div className="cursor-pointer p-1 rounded-lg flex items-center justify-center">
        <FaLinkedin className="text-[#5FFb17] hover:text-white w-6 h-6" />
      </div>
      <div className="cursor-pointer p-1 rounded-lg flex items-center justify-center">
        <FaGithub className="text-[#5FFb17] hover:text-white w-6 h-6" />
      </div>
      <div className="cursor-pointer p-1 rounded-lg flex items-center justify-center">
        <MdAttachEmail className="text-[#5FFb17] hover:text-white w-6 h-6" />
      </div>
    </div>
  );
}

export default SocialIcons;
