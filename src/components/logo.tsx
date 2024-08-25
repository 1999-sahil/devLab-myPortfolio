import LogoLight from "../assets/logo/logo-light.png";
import LogoDark from "../assets/logo/logo-dark.png";
import { useTheme } from "./theme-provider";
import { Link } from "react-router-dom";

function Logo() {
  const { theme } = useTheme();

  return (
    <div>
      {theme === "light" ? (
        <Link to="/">
            <img 
              src={LogoLight} 
              alt="logo-light" 
              className="w-[2rem] h-[2rem]"
            />
        </Link>
      ) : (
        <Link to="/">
            <img 
              src={LogoDark} 
              alt="logo-dark"
              className="w-[2rem] h-[2rem]"
            />
        </Link>
      )}
    </div>
  );
}

export default Logo;
