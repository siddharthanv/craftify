import React from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Contact = () => {
  return (
    <div id="contact" className="bg-white w-full">
      {/* TOP SECTION */}
      <div className="lg:w-[80%] w-[90%] m-auto py-[80px] flex lg:flex-row flex-col gap-[60px]">
        {/* LEFT CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[55%] w-full flex flex-col gap-8"
        >
          <motion.h3
            variants={slideUpVariants}
            className="uppercase text-yellow-500 text-2xl"
          >
            Contact Us
          </motion.h3>

          <motion.h1
            variants={slideUpVariants}
            className="text-5xl font-bold text-black uppercase leading-tight"
          >
            Reach Us For Any Query
          </motion.h1>

          <div className="w-[120px] h-[6px] bg-yellow-500"></div>

          <p className="text-2xl italic text-gray-600 leading-relaxed mt-6">
            Book a free site visit and quotation with our experienced design and
            construction team. We evaluate your space, understand your vision,
            and provide a clear, practical proposal you can trust.
          </p>
        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[45%] w-full"
        >
          <motion.form
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col gap-5 bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <input
              type="text"
              placeholder="Enter Full Name"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <input
              type="text"
              placeholder="Enter Your Location"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <input
              type="number"
              placeholder="Enter Mobile Number"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <motion.button
              variants={zoomInVariants}
              className="bg-yellow-500 hover:bg-black text-black hover:text-white 
              font-bold py-4 rounded-lg transition-all duration-300"
            >
              SUBMIT REQUEST
            </motion.button>
          </motion.form>
        </motion.div>
      </div>

      {/* BOTTOM CONTACT INFO BAR */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={zoomInVariants}
        className="bg-black w-full py-12"
      >
        <div className="lg:w-[80%] w-[90%] m-auto grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-8 text-center">
          {/* ADDRESS */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-2xl">
              📍
            </div>
            <h4 className="text-xl font-bold text-white uppercase">Address</h4>
            <p className="text-gray-300 text-lg">
              No. 5B, Krishna Raja Nagar 2nd Street Ext, Adambakkam, Chennai -
              600 088
            </p>
          </div>

          {/* PHONE */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-2xl">
              📞
            </div>
            <h4 className="text-xl font-bold text-white uppercase">Phone</h4>
            <p className="text-gray-300 text-lg">
              +91 78711 13091 | +91 98846 89275 | +91 97101 77205
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-2xl">
              ✉️
            </div>
            <h4 className="text-xl font-bold text-white uppercase">Email</h4>
            <p className="text-gray-300 text-lg">craftifyprojects@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
