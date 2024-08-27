import { ArrowDownToLine } from "lucide-react"
import pdf from "../../assets/doc/myResume.pdf";

function Download() {
  return (
    <div className="flex items-center justify-center">
      <a 
        href={pdf}
        download="Sahil_Ahmed-Resume.pdf"
        className="flex items-center justify-center w-fit bg-red-400"
    >
        <button className="text-black flex items-center gap-3 font-poppins font-medium bg-[#5FFB17] hover:bg-[#57dd1a] px-2 py-1 lg:px-4 lg:py-2 rounded-md text-sm md:text-base">
            <ArrowDownToLine className="bg-black text-[#5FFB17] p-1 w-fit rounded-full" />
            Download CV
        </button>
    </a>
    </div>
  )
}

export default Download