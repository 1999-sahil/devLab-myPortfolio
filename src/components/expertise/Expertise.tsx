import { cards } from "@/constants"
import TitleText from "../title-text"
import Skills from "./Skills"

function Expertise() {
  return (
    <div id="expertise" className="w-full h-full bg-white dark:bg-[#0d121c]">
        <TitleText
            title="Technical Skills"
            description={`My technical skills which consist practices of Full-Stack Development,
                Database Management, Responsive Design, Theme Management, Component
                Architecture, SVG and Image Optimization, Error Handling, Modern Web
                Technologies.
            `}
        />

        {/** cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {cards.map((card, index) => {
                return (
                    <div
                        key={index}
                        className={`flex items-center border rounded-xl px-2
                            ${card.cardBgColor} border border-[#333]
                        `}
                    >
                        {/** text-section */}
                        <div className="w-1/2 h-full flex items-center">
                            <div className={`${card.textColor} font-poppins font-semibold text-base md:text-xl px-1`}>
                                <h2 className={`${card.textBgColor} w-fit px-1`}>{card.title}</h2>
                                <h2 className={`${card.textBgColor} w-fit px-1 ml-1`}>{card.subTitle}</h2>
                            </div>
                        </div>

                        {/** image-section */}
                        <div className="w-1/2 h-full">
                            <div className="flex items-center justify-end w-[175px] h-[175px] md:w-[200px] md:h-[200px]">
                                <img
                                  src={card.image}
                                  alt={card.title}
                                  className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

        {/** Skills circle section */}
        <div className="mt-6">
            <Skills />
        </div>
    </div>
  )
}

export default Expertise