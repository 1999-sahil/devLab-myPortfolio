import GridLayout from "./GridLayout"
import HeadingText from "./HeadingText"
import SubHeadingText from "./SubHeadingText"

function Showcase() {
  return (
    <div className="gridLinesBg pt-12 pb-4 w-full h-full min-w-full flex flex-col items-center justify-center gap-4 mt-[3.5rem] bg-white dark:bg-[#0d121c]">
      <HeadingText />
      <SubHeadingText />
      <GridLayout />
    </div>
  )
}

export default Showcase
