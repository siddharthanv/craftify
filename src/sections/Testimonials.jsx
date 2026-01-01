import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";
import { clients } from "../export";

const avatarColors = [
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-yellow-500",
  "bg-teal-500",
];

const Testmonials = () => {
  return (
    <div id="clients" className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
      >
        <motion.h3
          variants={slideUpVariants}
          className="text-yellow-500 text-2xl uppercase"
        >
          Testimonials
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-white text-5xl font-bold text-center"
        >
          WHAT THEY SAY ABOUT US
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-full w-[90%] grid lg:grid-cols-3 grid-cols-1 justify-center
                gap-8 items-start mt-[30px]"
        >
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center"
            >
              <div className="border-2 border-white hover:bg-yellow-500 pb-[100px] p-[30px]">
                <p className="text-white text-lg text-center italic">
                  {client.about}
                </p>
              </div>
              <div className="flex flex-col justify-center items-center gap-[5px]">
                <div
                  className={`mt-[-50px] w-[90px] h-[90px] rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-lg ${
                    avatarColors[index % avatarColors.length]
                  }`}
                >
                  {client.name.charAt(0).toUpperCase()}
                </div>

                <h3 className="uppercase text-2xl font-bold text-white">
                  {client.name}
                </h3>
                <h4 className="text-xl text-yellow-500">{client.location}</h4>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Testmonials;
