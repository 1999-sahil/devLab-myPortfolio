import { ArrowDownToLine } from "lucide-react"
import pdf from "../../assets/doc/myResume.pdf";

function Download() {
  return (
    <a 
        href={pdf}
        download="Sahil_Ahmed-Resume.pdf"
        className="flex items-center justify-center"
    >
        <button className="text-black flex items-center gap-3 font-poppins font-medium bg-[#5FFB17] hover:bg-[#57dd1a] px-3.5 py-1.5 md:px-4 md:py-2 rounded-md text-sm md:text-base">
            <ArrowDownToLine className="bg-black text-[#5FFB17] p-1 w-fit rounded-full" />
            Download CV
        </button>
    </a>
  )
}

export default Download