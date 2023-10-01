"use client";

import FadeVertical from "@/components/utils/FadeVertical";
import { projects } from "@/components/utils/data";

function Work() {
  return (
    <div id="Projects" className="mx-auto p-5 lg:p-52 lg:py-24 ">
      <FadeVertical y={100}>
        <div className="text-center text-[2rem] font-black lg:text-[4rem]">
          PORTFOLIO
        </div>
        <div className="mt-5 grid grid-cols-1 gap-8 md:grid-cols-2 lg:mt-16 lg:gap-x-8 lg:gap-y-24">
          {projects.map((x) => {
            return (
              <div
                key={`project${x.label}`}
                className="relative overflow-hidden"
              >
                <img src={x.image} />
                <div className="absolute bottom-[5%] left-[10%] text-[1.5rem] font-bold lg:text-[2.5rem]">
                  {x.label}
                </div>
                <a
                  href="#Experience"
                  className="absolute right-[5%] top-[5%] cursor-pointer rounded-full bg-white transition-all hover:scale-[1.05] lg:p-3"
                >
                  <img src="/others/arrow_up_gray.png" />
                </a>
              </div>
            );
          })}
        </div>
      </FadeVertical>
    </div>
  )
}

export default Work