"use client";

import FadeVertical from "@/components/utils/FadeVertical";

function Testimonial() {
  return (
    <div
      id="About"
      className="bg-top-center relative flex min-h-screen items-center bg-[url('/backgrounds/about.png')] bg-cover bg-no-repeat"
    >
      <div className="relative z-[1] mx-auto max-w-7xl p-5 py-12 text-center lg:p-12">
        <FadeVertical y={100}>
          <div className="mx-auto text-[2rem] font-bold text-[#CECECE] lg:max-w-[65%] lg:text-[4rem]">
            THIS IS WHAT PEOPLE SAY ABOUT ME
          </div>
          <div className="roboto mt-5 text-[#C8C8C8] lg:text-[2rem]">
            Lorem ipsum dolor sit amet consectetur. Lobortis consectetur
            accumsan morbi sit justo mattis sodales. Egestas adipiscing faucibus
            ornare tincidunt. Tincidunt molestie lorem luctus purus. Est mattis
            purus quis adipiscing lorem. Netus nisi interdum vel diam. Dictum
            tortor tortor convallis ullamcorper varius placerat proin fermentum.
            Ut vel consequat quam tellus a. Eu cras vitae mauris quisque lectus.
            Sit quis vel sociis ante vitae dignissim ipsum.
          </div>
          <div className="roboto mt-8 text-[18px] font-medium text-[#CECECE]">
            ABHILASH KHUNTIA
          </div>
          <div
            style={{ fontVariant: "small-caps" }}
            className="roboto mt-2 text-[20px] text-[#8B8B8B]/[0.5]"
          >
            Head Web Dev at CNSRM
          </div>
        </FadeVertical>
      </div>
    </div>
  )
}

export default Testimonial