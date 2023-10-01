/* eslint-disable react/no-unescaped-entities */
"use client";

import Marquee from "react-fast-marquee";
import FadeHorizontal from "@/components/utils/FadeHorizontal";
import { skills } from "@/components/utils/data";

function Skills() {
    return (
      <div id="Skills" className="mt-12 overflow-hidden lg:mt-36 xl:mt-64">
        <div className="absolute z-[10] hidden translate-x-[-1%] translate-y-[-100%] rotate-[-6deg] lg:block">
          <Marquee>
            <div className="flex items-center border-y-8 border-dashed border-[#8E19E9] bg-[#2A0448] text-[1.5rem] text-primary lg:text-[2.25rem]">
              {Array(5)
                .fill(null)
                .map((x, index) => {
                  return (
                    <div
                      key={`skill${index}`}
                      className="flex items-center space-x-5 px-12"
                    >
                      <img src="/icons/star.png" />
                      <div className="shadow-text">WHAT I'M GOOD AT</div>
                    </div>
                  );
                })}
            </div>
          </Marquee>
        </div>
        <div className="relative z-[0]">
          <Marquee>
            <div className="flex items-center border-y-8 border-dashed border-[#8E19E9] bg-[#51078C] text-[1.5rem] text-primary lg:text-[2.25rem]">
              {Array(5)
                .fill(null)
                .map((x, index) => {
                  return (
                    <div
                      key={`skills${index}`}
                      className="flex items-center space-x-5 px-12"
                    >
                      <img src="/icons/star.png" />
                      <div className="shadow-text">WHAT I'M GOOD AT</div>
                    </div>
                  );
                })}
            </div>
          </Marquee>
        </div>
        <div className="mx-auto p-5 lg:p-12">
          {skills.map((x, index) => {
            return (
              <div
                key={x.label}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } items-center py-5 lg:space-x-5 lg:py-16`}
              >
                <div className="w-full">
                  <FadeHorizontal x={index % 2 === 0 ? -100 : 100}>
                    <img src={x.image} />
                  </FadeHorizontal>
                </div>
                <FadeHorizontal x={index % 2 === 0 ? 100 : -100}>
                  <div className="w-full">
                    <div className="mt-5 text-[2rem] font-extrabold md:mt-0 lg:text-[4rem]">
                      {x.label}
                    </div>
                    <div className="mt-5 flex flex-col space-y-8">
                      {x.points.map((y, index) => {
                        return (
                          <div
                            key={y + index}
                            className="flex items-center space-x-6 lg:space-x-10"
                          >
                            <div>
                              <div className="flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-[#262525] text-[1.5rem] font-bold">
                                0{index + 1}
                              </div>
                            </div>
                            <div className="text-[1.25rem]">{y}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </FadeHorizontal>
              </div>
            );
          })}
        </div>
      </div>
    );
}

export default Skills