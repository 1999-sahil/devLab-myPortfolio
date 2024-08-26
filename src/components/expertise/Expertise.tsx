import { cards } from "@/constants";
import TitleText from "../title-text";
import Skills from "./Skills";

function Expertise() {
  return (
    <div id="expertise" className="w-full h-full my-10 md:px-20 bg-white dark:bg-[#0d121c]">
      <TitleText
        title="Technical Skills"
        description={`My technical skills which consist practices of Full-Stack Development,
                Database Management, Responsive Design, Theme Management, Component
                Architecture, SVG and Image Optimization, Error Handling, Modern Web
                Technologies.
            `}
      />

      {/** cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        {cards.map((card, index) => {
          return (
            <div key={index} className="relative inline-block group">
              <span className={`absolute dark:hidden rounded-2xl inset-0 w-full h-full transition duration-200 ease-out transform translate-x-[5px] translate-y-[5px] ${card.borderColor} group-hover:-translate-x-0 group-hover:-translate-y-0`}></span>
              <div
                //key={index}
                className={`relative flex items-center border rounded-xl px-2 
                            ${card.cardBgColor} border border-[#333]
                        `}
              >
                {/** text-section */}
                <div className="w-1/2 h-full flex items-center">
                  <div
                    className={`${card.textColor} font-poppins font-semibold text-base md:text-xl px-1`}
                  >
                    <h2 className={`${card.textBgColor} w-fit px-1`}>
                      {card.title}
                    </h2>
                    <h2 className={`${card.textBgColor} w-fit px-1 ml-1`}>
                      {card.subTitle}
                    </h2>
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
            </div>
          );
        })}
      </div>

      {/** Skills circle section */}
      <div className="mt-20">
        <Skills />
      </div>
    </div>
  );
}

export default Expertise;
