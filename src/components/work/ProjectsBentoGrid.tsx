import { BentoGrid, BentoGridItem } from "../bento-grid";

import { ChartBar, Code, LeafyGreen, Notebook } from "lucide-react";
import { CgDesignmodo } from "react-icons/cg";
import { TiWeatherCloudy } from "react-icons/ti";
import { GrSystem } from "react-icons/gr";
import { SiCodingame, SiJovian } from "react-icons/si";
import { WiDayShowers } from "react-icons/wi";
import { FiFigma } from "react-icons/fi";
import { FcDocument } from "react-icons/fc";
import { MdLabelImportant } from "react-icons/md";
import { VscSymbolInterface } from "react-icons/vsc";

import Notecraft from "../../assets/project/notecraft-dark.png";
import Strife from "../../assets/project/strife-light.png";
import Codex from "../../assets/project/code.jpg";
import Portfolio from "../../assets/project/portfolio.png";
import WeatherApp from "../../assets/project/weather-app.png";
import LMS from "../../assets/project/lms.webp";
import Geek from "../../assets/project/geeks.svg";
import Fibo from "../../assets/project/fibo.png";
import Weekday from "../../assets/project/weekday.png";
import Quill from "../../assets/project/quill.png";
import DiaDocs from "../../assets/project/diagramdocs.png";
import DigiLab from "../../assets/project/digilab.png";
import Xero from "../../assets/project/xero.png";
import Intelli from "../../assets/project/intelli.png";
export function ProjectsBentoGrid() {

  return (
    <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          image={item.image}
          className={item.className}
          icon={item.icon}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}

//const Skeleton = () => (
//  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)] border border-transparent dark:border-white/[0.2] bg-neutral-200 dark:bg-black"></div>
//);

const items = [
    {
        title: "Code-X: Coding Editor/Compiler",
        description: `Code-X is a real time code editor which consists 
            both code editor with 15+ different languages and web editor 
            for Html, Css and Javascript. You can join the room by creating 
            new room Id or by receiving room Id. You can also see the participants 
            in the room. If you want to add someone you can do it by sharing room Id.
        `,
        icon: <Code />,
        image: Codex,
        tag: "Fullstack",
        className: "md:col-span-2",
        link: "https://github.com/1999-sahil/code-x-code-editor"
      },
      {
        title: "Strife: Group Chat all fun",
        description: "A full-stack application and real-time strife app with all servers, channels, video calls, audio calls, editing messages, deleting messages, share images or pdf file, etc.",
        icon: <ChartBar />,
        image: Strife,
        className: "md:col-span-1",
        tag: "Fullstack",
        link: "https://github.com/1999-sahil/edflex_lms"
      },
      {
        title: "Nextjs Portfolio Framer motion",
        description: "A portfolio using using Next.js along with framer motion using Tailwind CSS.",
        icon: <CgDesignmodo /> ,
        image: Portfolio,
        className: "md:col-span-1",
        tag: "UI",
        link: "https://github.com/1999-sahil/my-portfolio"
      },
      {
        title: "Notecraft, A digital workplace where better, faster work happens",
        description: `A freemium productivity and note-taking web application. It offers folder based 
            features where you can write your notes using blocknote editor which gives features like 
            image uploading, text decoration, color pickers, headings and sub-headings, etc.
        `,
        icon: <Notebook /> ,
        image: Notecraft,
        className: "md:col-span-2",
        tag: "Fullstack",
        link: "https://github.com/1999-sahil/notecraft-nextjs"
      },
      {
        title: "A Fullstack Weather App using coolest tech",
        description: "A Weather app using latest tech like Nextjs, React, Tailwind CSS, Openweather API for latest forcasting data.",
        icon: <TiWeatherCloudy /> ,
        image: WeatherApp,
        className: "md:col-span-2",
        tag: "Fullstack",
        link: "https://github.com/1999-sahil/weather-app-openweatherAPI",
      },
      {
        title: "EdFlex Learning: A LMS Platform",
        description: "A learning management system that provides a large and indispensable features to support teaching and learning.",
        icon: <GrSystem /> ,
        image: LMS,
        className: "md:col-span-1",
        tag: "Fullstack",
        link: "https://github.com/1999-sahil/edflex_lms"
      },
      {
        title: "GeekGazette for sharing your art",
        description: "GeekGazette is a social networking platform where users can showcase their skills and share it for others.",
        icon: <LeafyGreen /> ,
        image: Geek,
        className: "md:col-span-1",
        tag: "Fullstack",
        link: "https://github.com/1999-sahil/geekgazette-nextjs-app"
      },
      {
        title: "Track/Untrack Mobile Progress Bar",
        description: "",
        icon: <SiJovian /> ,
        image: Fibo,
        className: "md:col-span-2",
        tag: "Frontend",
        link: "https://github.com/1999-sahil/fibo-frontend-assignment"
      },
      {
        title: "Infinite Scrollling with API data",
        description: "",
        icon: <WiDayShowers /> ,
        image: Weekday,
        className: "md:col-span-2",
        tag: "Frontend",
        link: "https://github.com/1999-sahil/weekday-frontend"
      },
      {
        title: "QuillAudits UI",
        description: "",
        icon: <FiFigma /> ,
        image: Quill,
        className: "md:col-span-1",
        tag: "UI",
        link: "https://github.com/1999-sahil/quillAudits-frontend"
      },
      {
        title: "DiagramDocs: A digital canvas",
        description: "DiagramDocs provides docs and diagrams platform for engineering teams. DiagramDocs enables developers to create docs and diagrams at the speed of thought ",
        icon: <FcDocument /> ,
        image: DiaDocs,
        className: "md:col-span-1",
        tag: "Fullstack",
        link: "https://github.com/1999-sahil/diagramdocs_nextjs-convex"
      },
      {
        title: "Digilabs Admin Panel UI",
        description: "",
        icon: <MdLabelImportant /> ,
        image: DigiLab,
        className: "md:col-span-2",
        tag: "Frontend",
        link: "https://github.com/1999-sahil/digilabs-frontend-round1"
      },
      {
        title: "XeroCode UI",
        description: "",
        icon: <SiCodingame /> ,
        image: Xero,
        className: "md:col-span-2",
        tag: "UI",
        link: "https://github.com/1999-sahil/xerocodee-page"
      },
      {
        title: "IntelliTech Courses UI",
        description: "",
        icon: <VscSymbolInterface /> ,
        image: Intelli,
        className: "md:col-span-1",
        tag: "UI",
        link: "https://github.com/1999-sahil/intellitech_assessment"
      },
];
