import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  image,
  icon,
  link,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  image?: string;
  icon?: React.ReactNode;
  link?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-3 dark:bg-[#101827] dark:border-gray-800 dark:hover:border-gray-700 bg-white border hover:border-gray-300 justify-between flex flex-col space-y-2",
        className
      )}
    >
      <div className="flex flex-1 gridDotesBg w-full h-full min-h-[6rem] rounded-xl items-center justify-center border">
        <img
          src={image} 
          alt="title" 
          className="w-full h-full object-cover rounded-xl" 
        />
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <a href={link} target="_blank" className="hover:underline flex items-center gap-2">
            <div className="font-poppins font-bold text-neutral-800 dark:text-neutral-100 mb-2 mt-2">
                {title}
            </div>
            <ArrowUpRight className="text-[#5FFB17] p-1 rounded-full w-fit bg-black" />
        </a>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
