import { expertise } from "@/constants"
import { CircleIcon } from "./CircleIcon"

function Skills() {
  return (
    <div className="relative w-full h-full p-10 px-20 bg-zinc-200 dark:bg-gray-900 border-2 border-zinc-400 dark:border-zinc-500 border-dashed rounded-xl">
      <CircleIcon className="absolute -right-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -right-[2px]" />
      <CircleIcon className="absolute -left-[2px] -top-[2px]" />
      <CircleIcon className="absolute -bottom-[2px] -left-[2px]" />

      {/** content inside circle-icons */}
      <div className="flex flex-col items-center justify-center gap-6">
        {/** text heading */}
        <div className="mb-2 flex flex-col text-center items-center gap-1 justify-center">
          <h2 className="text-xl md:text-2xl font-montserrat font-bold text-zinc-900 dark:text-[#d3d3d3]">Passion Fuels Purpose</h2>
          <span className="text-sm md:text-base text-zinc-900 dark:text-[#d3d3d3] font-openSans">My Technical skills which I gained by builting dynamic projects</span>
        </div>

        {/** skill icons */}
        <div className='w-full h-full flex flex-wrap gap-8 justify-center items-center m-auto'>
        {expertise?.map((skill, index) => {
          return (
            <div key={index} className='flex items-center'>
              <span className="">
                <skill.image className="w-[3rem] md:w-[4.5rem] h-[3rem] md:h-[4.5rem] text-[#333] dark:text-[#a9a9a9]" />
              </span>
            </div>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default Skills