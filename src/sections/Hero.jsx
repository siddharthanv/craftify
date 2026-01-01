import React from "react";
import heroimg from "../assets/building.png";
import backgroundImg from "../assets/interior_design.webp";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Hero = () => {
  return (
    <div
      id="hero"
      className="relative w-full lg:h-[700px] h-fit m-auto pt-[60px] lg:pt-[0px] lg:px-[150px] px-[20px] flex justify-between items-center lg:flex-row flex-col lg:gap-5 gap-[50px] bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* 🔥 Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="relative z-10 lg:w-[60%] w-full flex flex-col justify-center items-start lg:gap-8 gap-4"
      >
        <motion.h1
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl"
        >
          WE ARE INTERIOR DESIGNERS
        </motion.h1>

        <motion.h1
          variants={slideUpVariants}
          className="text-white uppercase text-[50px] font-bold leading-tight"
        >
          We design your dream spaces
        </motion.h1>

        <div className="w-[120px] h-[6px] bg-yellow-500"></div>

        <p className="text-white text-[20px] leading-relaxed">
          Whether you’re envisioning a complete interior makeover or refining
          your existing space, Craftify Interiors and Constructions is here to
          bring your vision to life. With creative expertise, quality
          craftsmanship, and attention to detail, we ensure a seamless interior
          design experience from concept to completion.
        </p>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="flex gap-5"
        >
          <motion.button
            variants={zoomInVariants}
            className="bg-yellow-500 hover:bg-white hover:text-black px-10 py-3 rounded-lg text-black font-bold transition"
          >
            GET FREE QUOTE
          </motion.button>

          <motion.button
            variants={zoomInVariants}
            className="border-white hover:border-yellow-500 hover:text-yellow-500 border-2 px-10 py-3 rounded-lg text-white font-bold transition"
          >
            KNOW MORE
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Image */}
      <div className="relative z-10 w-[40%] flex justify-end">
        <motion.img
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          src={heroimg}
          alt="hero image"
          className="lg:h-[600px] h-[300px] lg:mb-[0px]"
        />
      </div>
    </div>
  );
};

export default Hero;
