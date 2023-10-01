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
            As an Artificial Intelligence and Machine Learning enthusiast, I am passionate about creating innovative solutions to real-time problems in the world.

            With hands-on experience in creating projects like the Virtual Body Measurement System and Harry Potter Invisible Cloak using Computer Vision, I thrive in finding creative ways to use Machine Learning in technology.
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
            Previously, I worked as a Machine Learning Analyst at Styloria, where I strengthened the tech infrastructure of the startup through various projects. My recent work on the Virtual Body Measurement System using TensorFlow showcases my expertise in the field.

            I have interned at NUS and HPE with the help of Corporate Gurukul as an academic intern, where I learned extensively about the Internet of Things with Machine Learning. I have also completed a remote internship at TCS ion, where I automated identification and recognition of handwritten text using Machine Learning.
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
            In addition, I have experience in Full-stack web development and have created a live e-commerce website called Maniawalker using React and Node.js. I have also served as a Teaching Assistant at Corporate Gurukul and NTU Singapore for AIYA, where I mentored students from class 8 to 12 in the field of AI.

            I worked as an Associate Software Engineer at Dentsu World Services. I enjoy sharing my knowledge and guiding others in learning new programming languages.

            I am interested in opportunities in Data Science, Machine Learning Analysis, Full-stack web development.
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
