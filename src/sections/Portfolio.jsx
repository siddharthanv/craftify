import React from "react";
import project1 from "../assets/craftify_interiors_interior_design_table_and_wall_work.jpeg";
import project2 from "../assets/craftify_interiors_modular_kitchen_work.jpeg";
import project3 from "../assets/craftify_interiors_wardrobe_interior_work.jpeg";
import project4 from "../assets/craftify_interiors_childrens_bed_and_playarea_interior_work.jpeg";
import project5 from "../assets/craftify_interiors_tv_unit_interior_work.jpeg";
import project6 from "../assets/craftify_interiors_wardrobe2_interior_work.jpeg";
import project7 from "../assets/craftify_interiors_table_interior_work.jpeg";
import project8 from "../assets/craftify_interiors_balcony_interior_work.jpeg";

import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Portfolio = () => {
  return (
    <div id="projects" className="w-full">
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
          portfolio
        </motion.h3>
        <motion.h2
          variants={slideUpVariants}
          className="uppercase text-white text-5xl font-bold text-center"
        >
          Our Best Projects
        </motion.h2>
        <motion.div
          variants={zoomInVariants}
          className="w-[120px] h-[6px] bg-yellow-500"
        ></motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="w-full m-auto grid lg:grid-cols-4 grid-cols-1"
        >
          <img src={project1} alt="" className="h-[250px] w-full" />
          <img src={project2} alt="" className="h-[250px] w-full" />
          <img src={project3} alt="" className="h-[250px] w-full" />
          <img src={project4} alt="" className="h-[250px] w-full" />
          <img src={project5} alt="" className="h-[250px] w-full" />
          <img src={project6} alt="" className="h-[250px] w-full" />
          <img src={project7} alt="" className="h-[250px] w-full" />
          <img src={project8} alt="" className="h-[250px] w-full" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Portfolio;
