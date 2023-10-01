"use client"

/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { motion, useTransform, useScroll } from 'framer-motion';
import Achievements from '../Achievements/Achievements';

function AboutMe(): JSX.Element {
  // Use the correct type for scrollY
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 400], [100, 0], { clamp: false });
  const y2 = useTransform(scrollY, [0, 1000], [0, -200], { clamp: false });

  return (
    <div
      id="about"
      className="w-full py-[50px] md:py-[100px] bg-black  relative overflow-hidden"
    >
      {/* BACKGROUND ELEMENTS START */}
      <div className="sec-2-bg-gradient" />
      <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src="/illustrations/sec-2-p-e-1.png" alt="Image 1" />
      <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src="/illustrations/sec-2-p-e-2.png" alt="Image 2" />
      {/* BACKGROUND ELEMENTS END */}

      <div className="max-w-[1680px] px-5 md:px-10 mx-auto pt-[1px] mt-[-1px]">
        {/* HEADING START */}
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative"
        >
          <span>A Software Developer</span>
          <span className="flex items-center gap-2">
            <span>Based</span>
            <img
                src='/illustrations/indian-flag.png'
                alt=""
                className="w-[70px] md:w-[150px] 2xl:w-[190px] block mt-1 md:mt-2"
            />
            <span>In India</span>
          </span>
        </motion.div>
        {/* HEADING END */}
        {/* PARAGRAPH START */}
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative"
        >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it
        </motion.div>
        {/* PARAGRAPH END */}
        {/* PARAGRAPH START */}
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative"
        >
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it
        </motion.div>
        {/* PARAGRAPH END */}
        {/* PARAGRAPH START */}
        <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
            viewport={{ once: true }}
            className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative"
        >
            Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled itLorem Ipsum is
                    simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s, when an unknown printer took a galley of
                    type and scrambled it
        </motion.div>
        {/* PARAGRAPH END */}
      </div>
      <div>
        <Achievements />
      </div>
    </div>
  );
}

export default AboutMe;
