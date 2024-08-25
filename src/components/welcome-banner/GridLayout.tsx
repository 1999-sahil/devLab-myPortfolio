import { ArrowUpRight, Ellipsis } from "lucide-react";
import HeroMain from "../../assets/hero/hero-main.jpg";
import HeroCode from "../../assets/hero/hero-code.jpg";

function GridLayout() {
  return (
    <div className="flex flex-col gap-2 w-full pb-8 md:px-8 h-fit md:flex-row items-center justify-center">
      {/** left image */}
      <div className="w-full md:w-3/4 h-[200px] md:h-[350px] flex items-center justify-center border border-black dark:border-zinc-500 rounded-2xl">
        <img
            src={HeroMain}
            alt="left-image"
            className="w-full h-full object-cover rounded-2xl"
        />
      </div>

      {/** right image */}
      <div className="w-full md:w-1/4 flex flex-row md:flex-col items-center gap-2">
        {/** top image */}
        <div className="w-1/2 md:w-full h-[200px] md:h-[170px] flex items-center justify-center border rounded-2xl border-white dark:border-zinc-500">
            <img
                src={HeroCode}
                alt="right-image"
                className="w-full h-full object-cover rounded-2xl"
            />
        </div>

        {/** bottom text container */}
        <div className="w-1/2 md:w-full h-[200px] md:h-[175px] flex flex-col gap-2 items-center justify-center border p-4 border-black dark:border-white bg-[#5FFB17] rounded-2xl">
            <span className="w-full flex items-center justify-between">
                <Ellipsis className="text-black w-6 h-6" />
                <ArrowUpRight className="bg-black rounded-full p-1 text-[#5FFB17]" />
            </span>
            <span className="text-start text-black font-montserrat font-bold text-xl md:leading-tight">
                Let&apos;s develop something big together
            </span>
            <span className="text-start text-black font-poppins font-medium text-sm md:leading-tight">
                {`First, solve the problem. Then, write the {code}.`}
            </span>
        </div>  
      </div>
    </div>
  );
}

export default GridLayout;


{/***
    




  
    
    
*/}