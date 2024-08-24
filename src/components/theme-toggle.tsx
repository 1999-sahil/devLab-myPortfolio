import { Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { RiMoonClearFill } from "react-icons/ri";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="flex items-center justify-center w-fit h-fit">
      <button
        onClick={toggleTheme}
        className="relative hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md flex items-center justify-center w-[2.2rem] h-[2.2rem] transition-transform duration-300 ease-in-out"
      >
        <div
          className={`absolute transition-opacity duration-300 ease-in-out ${
            theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-180"
          }`}
        >
          <Sun className="w-[1.2rem] h-[1.2rem]" />
        </div>
        <div
          className={`absolute transition-opacity duration-300 ease-in-out ${
            theme === "dark" ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
          }`}
        >
          <RiMoonClearFill className="w-[1.2rem] h-[1.2rem] text-zinc-800" />
        </div>
      </button>
    </div>
  );
}

export default ThemeToggle;
