import { Link } from "react-router-dom";
import LogoLight from "../assets/logo/devlab-light.png";

function Logo() {
  return (
    <div>
      <Link to="/">
        <img src={LogoLight} alt="logo-light" className="w-[2rem] h-[2rem]" />
      </Link>
    </div>
  );
}

export default Logo;
