import Frontend from "../assets/skills/frontend.png";
import Fullstack from "../assets/skills/fullstack.png";
import Design from "../assets/skills/design.png";
import Coding from "../assets/skills/program.png";

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
        borderColor: "",
    },
    {
        title: "Full Stack",
        subTitle: "Development",
        image: Fullstack,
        cardBgColor: "bg-[#5FFB17]",
        textBgColor: "bg-[#000000]",
        textColor: "text-[#5FFB17]",
        borderColor: "",
    },
    {
        title: "Design and",
        subTitle: "Creative",
        image: Design,
        cardBgColor: "bg-[#000000]", // black
        textBgColor: "bg-[#FFFFFF]",
        textColor: "text-black",
        borderColor: "",
    },
    {
        title: "Problem solving",
        subTitle: "programming",
        image: Coding,
        cardBgColor: "bg-[#e3e3e3]",
        textBgColor: "bg-[#5FFB17]",
        textColor: "text-black",
        borderColor: "",
    },
];