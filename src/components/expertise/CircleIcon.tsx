import { cn } from "../../lib/utils";

export const CircleIcon = ({
    className,
  }: {
    className?: string;
  }) => {
    return (
      <div
        className={cn(
          `pointer-events-none group-hover/cover:hidden group-hover/cover:opacity-100 group h-4 w-4 rounded border-2 p-2 border-zinc-600 dark:border-[#d3d3d3] bg-[#5FFB17] group-hover/cover:bg-white`,
          className
        )}
      ></div>
    );
  };