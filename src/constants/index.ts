// Images for Cards
import Frontend from "../assets/skills/frontend.png";
import Fullstack from "../assets/skills/fullstack.png";
import Design from "../assets/skills/design.png";
import Coding from "../assets/skills/program.png";

// Import Icons for Expertise
import { FaBootstrap, FaGithub, FaGitSquare, FaJava, FaJsSquare, FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMongodb, SiMui, SiRedux, SiTypescript, SiVercel, SiVite } from "react-icons/si";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GrMysql } from "react-icons/gr";
import { TiHtml5 } from "react-icons/ti";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandNpm } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

export const navigationLinks = [
    { title: "expertise", to: "#expertise" },
    { title: "work", to: "#work" },
    { title: "experience", to: "#experience" },
    { title: "contact", to: "#contact" },
];

export const cards = [
    {
        title: "Frontend",
        subTitle: "Development",
        image: Frontend,
        cardBgColor: "bg-[#e3e3e3]",
        textBgColor: "bg-[#5FFB17]",
        textColor: "text-black",
        borderColor: "bg-black",
        //darkBorderColor: "bg-[#333]",
    },
    {
        title: "Full Stack",
        subTitle: "Development",
        image: Fullstack,
        cardBgColor: "bg-[#5FFB17]",
        textBgColor: "bg-[#000000]",
        textColor: "text-[#5FFB17]",
        borderColor: "bg-black",
        //darkBorderColor: "bg-white",
    },
    {
        title: "Design and",
        subTitle: "Creative",
        image: Design,
        cardBgColor: "bg-[#000000]", // black
        textBgColor: "bg-[#FFFFFF]",
        textColor: "text-black",
        borderColor: "bg-[#333]",
        //darkBorderColor: "bg-white",
    },
    {
        title: "Problem solving",
        subTitle: "programming",
        image: Coding,
        cardBgColor: "bg-[#e3e3e3]",
        textBgColor: "bg-[#5FFB17]",
        textColor: "text-black",
        borderColor: "bg-black",
        //darkBorderColor: "bg-white",
    },
];

export const expertise = [
    { title: "Reactjs", image: FaReact },
    { title: "Nodejs", image: DiNodejs },
    { title: "Expressjs", image: SiExpress },
    { title: "Mongodb", image: SiMongodb },
    { title: "Nextjs", image: RiNextjsFill },
    { title: "Javascript", image: FaJsSquare },
    { title: "Typescript", image: SiTypescript },
    { title: "Mysql", image: GrMysql },
    { title: "HTML", image: TiHtml5 },
    { title: "CSS", image: IoLogoCss3 },
    { title: "Bootstrap", image: FaBootstrap },
    { title: "Tailwind", image: RiTailwindCssFill },
    { title: "Git", image: FaGitSquare },
    { title: "Github", image: FaGithub },
    { title: "Java", image: FaJava },
    { title: "Material UI", image: SiMui },
    { title: "npm", image: TbBrandNpm },
    { title: "Redux", image: SiRedux },
    { title: "Vercel", image: SiVercel },
    { title: "Vite", image: SiVite },
    { title: "VScode", image: VscVscode },
];

export const approach = [
    { step: "Phase 1", title: "Planning & Strategy", description: "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements." },
    { step: "Phase 2", title: "Dev & Progress Update", description: "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way." },
    { step: "Phase 3", title: "Development & Launch", description: "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up." },
];