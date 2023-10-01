"use client";

import FadeVertical from '@/components/utils/FadeVertical'
import { latestprojects, features } from '@/components/utils/data';

function LatestProjects() {
  return (
    <div id="Experience" className="mx-auto p-5 lg:p-16 lg:py-16">
      <div className="roboto text-center text-[2rem] font-bold text-[#CECECE] lg:text-[4rem]">
        TOP PROJECTS
      </div>
      <div className="revalia mx-auto mt-5 text-center tracking-wider text-[#C4CFDE] lg:max-w-[985px] lg:text-[1.5rem]">
        Here are some of Someworks that showcase my design and Developement
        skills and expertise. Click on each project to see
      </div>
      <div className="mt-8 flex flex-col items-center justify-center space-y-5 md:flex-row md:space-x-12 md:space-y-0 lg:mt-16">
        {features.map((x) => {
          return (
            <div
              key={x.label}
              className="flex w-[190px] items-center justify-center space-x-2"
            >
              <img src={x.icon} />
              <div
                className="space-grotesk text-[1.5rem]"
                style={{ color: x.color }}
              >
                {x.label}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-12 flex flex-col space-y-12 lg:mt-24 lg:space-y-32">
        {latestprojects.map((x) => {
          return (
            <FadeVertical key={x.title} y={100}>
              <div className="flex flex-col md:items-center md:space-x-5 lg:flex-row">
                <img src={x.image} />
                <div className="mt-5 flex flex-row md:items-center md:space-x-10 lg:mt-0">
                  <div className="mt-5 lg:mt-0">
                    <div className="roboto text-[1.25rem] lg:text-[2.5rem]">
                      <span className="font-bold text-primary">{x.title}</span>{" "}
                      {x.label}
                    </div>
                    <div className="mt-3 text-[1.25rem] text-white/[0.4]">
                      {x.description}
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <a
                      target="_blank"
                      href={x.link}
                      className="flex h-[80px] w-[80px] cursor-pointer items-center justify-center rounded-full border transition-all hover:translate-y-[-5%] lg:h-[100px] lg:w-[100px]"
                    >
                      <img src="/others/arrow_up_white.png" />
                    </a>
                  </div>
                </div>
              </div>
            </FadeVertical>
          );
        })}
      </div>
      <a
        href="#skills"
        className="mt-12 flex cursor-pointer items-center justify-center space-x-5 text-[1.25rem] text-primary transition-all hover:translate-y-[-5%] lg:mt-16 lg:text-[2.5rem]"
      >
        <div className="revalia">See More</div>
        <img src="/others/arrow_right.png" />
      </a>
    </div>
  )
}

export default LatestProjects