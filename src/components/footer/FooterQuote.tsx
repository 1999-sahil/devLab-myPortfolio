import { ArrowUpRight, Grip } from "lucide-react"

function FooterQuote() {
  return (
    <div className="bg-[#5FFB17] p-2 rounded-sm">
        <div className="border-2 border-dashed border-black p-3 rounded-sm">
        <div className="flex items-center justify-between mb-4">
            <Grip className="text-black w-5 h-5" />
            <ArrowUpRight className="text-[#5FFB17] bg-black rounded-full p-1" />
        </div>
        <h2 className='text-xs md:text-sm lg:text-base font-lato font-medium text-black text-center'>
            A Frontend focussed Web Developer building the Frontend of Websites and Web Applicatins that leads to the success of the overall product.
        </h2>
        </div>
    </div>
  )
}

export default FooterQuote