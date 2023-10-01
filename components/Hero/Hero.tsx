/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";

function Hero() {
  return (
    <>
      <div className="relative mx-auto flex w-full flex-col items-center justify-center p-5 md:min-h-screen lg:min-h-[869px] lg:p-12">
        <img
          src="/backgrounds/hero.png"
          className="absolute right-[2%] top-0 md:right-[5%]"
        />
        <div className="relative z-[1] flex w-full flex-col space-y-12 py-12 md:flex-row md:items-center md:justify-between md:space-y-0 md:py-0">
          <div className="relative font-bold">
            <div className="absolute left-0 top-0 hidden md:block">
              <img src="/others/border.png" />
            </div>
            <div className="w-fit leading-tight md:ml-5 md:mt-12 lg:mt-16">
              <div className="text-[2.5rem] lg:text-[6rem]">
                HI,
                <span className="transparent-text">I'M</span>
              </div>
              <div className="text-[3rem] lg:text-[8rem]">ABHNAV</div>
            </div>
          </div>
          <div className="revalia max-w-[370px] text-white md:translate-x-[40%] md:rotate-[-90deg] md:text-primary lg:translate-x-[40%] lg:text-[1.25rem] 2xl:translate-x-[50%] mr-12">
            I make websites and provide solutions to real life problems using ML
            & AI.
          </div>
        </div>
        <a
          href="#Footer"
          className="revalia bottom-0 right-[2.5%] mt-12 transition-all hover:translate-y-[-5%] md:absolute"
        >
          <div className="flex items-center space-x-10">
            <div className="text-[1.5rem] text-primary lg:text-[2.5rem]">
              Let's Talk
            </div>
            <img src="/others/arrow_right.png" />
          </div>
        </a>
      </div>
      <div className="mt-20 border-y border-gray-600 py-5">
        <Marquee speed={100}>
          <div className="mr-12 flex items-center space-x-12">
            {Array(3)
              .fill(null)
              .map((x, index) => {
                return (
                  <div
                    key={index + "web"}
                    className="flex items-center space-x-10"
                  >
                    <img src="/others/circle_1.png" />
                    <div className="text-[2rem] lg:text-[4rem]">
                      WEB DEVELOPMENT
                    </div>
                  </div>
                );
              })}
          </div>
        </Marquee>
      </div>
      <div className="border-y border-gray-600 bg-secondary py-5">
        <Marquee speed={100}>
          <div className="mr-12 flex items-center space-x-12">
            {["C++", "PYTHON", "JAVA"].map((x) => {
              return (
                <div key={`1${x}`} className="flex items-center space-x-10">
                  <img src="/others/circle_2.png" />
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
            {["C++", "PYTHON", "JAVA"].map((x) => {
              return (
                <div key={`2${x}`} className="flex items-center space-x-10">
                  <img src="/others/circle_2.png" />
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
            {["C++", "PYTHON", "JAVA"].map((x) => {
              return (
                <div key={`3${x}`} className="flex items-center space-x-10">
                  <img src="/others/circle_2.png" />
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
      <div className="border-y border-gray-600 py-5">
        <Marquee speed={100}>
          <div className="mr-12 flex items-center space-x-12">
            {["HTML", "CSS", "JS"].map((x) => {
              return (
                <div key={`4${x}`} className="flex items-center space-x-10">
                  <img src="/others/circle_1.png" />
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
            {["HTML", "CSS", "JS"].map((x) => {
              return (
                <div key={`5${x}`} className="flex items-center space-x-10">
                  <img src="/others/circle_1.png" />
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
            {["HTML", "CSS", "JS"].map((x) => {
              return (
                <div key={`6${x}`} className="flex items-center space-x-10">
                  <img src="/others/circle_1.png" />
                  <div className="text-[2rem] lg:text-[4rem]">{x}</div>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
      <div className="border-y border-gray-600 py-5">
        <Marquee speed={100}>
          <div className="mr-12 flex items-center space-x-12">
            {Array(3)
              .fill(null)
              .map((x, index) => {
                return (
                  <div
                    key={index + "web2"}
                    className="flex items-center space-x-10"
                  >
                    <img src="/others/circle_1.png" />
                    <div className="text-[2rem] lg:text-[4rem]">
                      WEB DEVELOPMENT
                    </div>
                  </div>
                );
              })}
          </div>
        </Marquee>
      </div>
    </>
  );
}

export default Hero;
