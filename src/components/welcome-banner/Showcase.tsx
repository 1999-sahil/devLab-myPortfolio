import HeadingText from "./HeadingText"
import SubHeadingText from "./SubHeadingText"

function Showcase() {
  return (
    <div className="gridLinesBg w-full h-full flex flex-col items-center justify-center gap-4 mt-[3.5rem] bg-white dark:bg-[#0d121c]">
        <HeadingText />
        <SubHeadingText />
    </div>
  )
}

export default Showcase