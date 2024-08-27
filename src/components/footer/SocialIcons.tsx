import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function SocialIcons() {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <a href="www.linkedin.com/in/sahil-ahmed-86222718a" target="_blank" className="cursor-pointer p-1 rounded-lg flex items-center justify-center">
        <FaLinkedin className="text-[#5FFb17] hover:text-white w-6 h-6" />
      </a>
      <a href="https://github.com/1999-sahil" target="_blank" className="cursor-pointer p-1 rounded-lg flex items-center justify-center">
        <FaGithub className="text-[#5FFb17] hover:text-white w-6 h-6" />
      </a>
      <a href="mailto:sahilahmed466@gmail.com" target="_blank" className="cursor-pointer p-1 rounded-lg flex items-center justify-center">
        <MdAttachEmail className="text-[#5FFb17] hover:text-white w-6 h-6" />
      </a>
    </div>
  );
}

export default SocialIcons;
