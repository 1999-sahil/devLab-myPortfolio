interface TitleTextProps {
    title: string;
    description: string;
};

function TitleText({
    title,
    description,
} : TitleTextProps) {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 mb-4">
        <span className="bg-[#5FFB17] text-xl text-black text-center font-montserrat font-semibold p-1 rounded whitespace-nowrap">
          {title}
        </span>
        <span className="text-sm w-full md:w-1/2 text-center md:text-start font-poppins text-[#333] dark:text-[#e3e3e3]">
          {description}
        </span>
      </div>
  )
}

export default TitleText