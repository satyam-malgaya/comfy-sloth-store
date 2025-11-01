import React from "react";
import hero from "../assets/hero.jpeg";
const About = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="w-full h-20 sm:h-24 md:h-28 flex items-center justify-start bg-[#463022] px-4 sm:px-8 md:px-15">
        <p className="text-lg sm:text-xl md:text-[2.1rem] font-bold tracking-[1px] sm:tracking-[2px] md:tracking-[2.3px] text-[#815A44]">
          Home&nbsp;/ About
        </p>
      </div>
      <div className="w-full min-h-screen py-8 sm:py-12 lg:py-0 lg:h-[110vh] flex justify-center items-center flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-10 bg-[#181A1B] px-4 sm:px-6 lg:px-0">
        <div className="w-full lg:w-[45%] h-[40vh] sm:h-[50vh] lg:h-[85vh] overflow-hidden">
          <img
            className="w-full h-full object-center object-cover rounded-sm"
            src={hero}
            alt="sorry the image was not found"
          />
        </div>
        <div className="w-full lg:w-[45%] flex flex-col gap-4 sm:gap-6 lg:gap-8 items-start min-h-[40vh] lg:h-[85vh] px-2 sm:px-4 lg:px-5">
          <div>
            <h1 className="text-xl sm:text-2xl lg:text-[2.4rem] text-[#815A44] font-bold tracking-[1px] text-center lg:text-left">
              Our Story
            </h1>
            <p className="w-16 sm:w-20 lg:w-23 h-[3px] sm:h-[4px] lg:h-1 bg-[#815A44] mx-auto lg:mx-0 mt-2"></p>
          </div>
          <p className="text-[#8D663C] text-sm sm:text-base lg:text-[16px] leading-6 sm:leading-7 lg:leading-[33px] text-center lg:text-left">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
            accusantium sapiente tempora sed dolore esse deserunt eaque
            excepturi, delectus error accusamus vel eligendi, omnis beatae.
            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
            dolore, obcaecati incidunt sequi blanditiis est exercitationem
            molestiae delectus saepe odio eligendi modi porro eaque in libero
            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
            iste.
          </p>
        </div>
      </div>
      <div className="w-full h-16 sm:h-18 md:h-20 bg-[#1A1C1D] flex justify-center items-center px-4">
          <p className="text-[0.8rem] sm:text-[0.9rem] md:text-[1rem] text-[#CECAC3] text-center tracking-[2px]" >© 2025 <span className="text-[#815A44] font-medium">ComfySloth</span> All rights reserved</p>
        </div>
    </div>
  );
};

export default About;
