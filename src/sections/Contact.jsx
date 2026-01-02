import React, { useState } from "react";
import { motion } from "framer-motion";
import { slideUpVariants, zoomInVariants } from "./animation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    mobile: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxkd2w5DujmtDBwKHdLlGOoQ0zu4sYImRwZS499wGUhkcByVcdZrGA2BJwF6XlFR-Fpqw/exec",
        {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify(formData),
        }
      );

      const result = await res.json();
      alert("Form submitted successfully!");

      setFormData({
        name: "",
        location: "",
        mobile: "",
        message: "",
      });
    } catch (error) {
      alert("Submission failed");
    } finally {
      setIsSubmitting(false);
    }
  };

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
            onSubmit={handleSubmit}
            autoComplete="on"
            initial="hidden"
            whileInView="visible"
            variants={zoomInVariants}
            className="flex flex-col gap-5 bg-gray-50 p-8 rounded-xl shadow-lg"
          >
            <input
              type="text"
              name="name"
              autoComplete="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Full Name"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <input
              type="text"
              name="location"
              autoComplete="address"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter Your Location"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <input
              type="tel"
              name="mobile"
              autoComplete="tel"
              value={formData.mobile}
              onChange={handleChange}
              placeholder="Enter Mobile Number"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <textarea
              rows="4"
              name="message"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="px-6 py-3 border-2 border-black rounded-lg w-full"
            />

            <motion.button
              type="submit"
              disabled={isSubmitting}
              variants={zoomInVariants}
              className={`font-bold py-4 rounded-lg transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : "bg-yellow-500 hover:bg-black text-black hover:text-white"
              }`}
            >
              {isSubmitting ? "SUBMITTING..." : "SUBMIT REQUEST"}
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
              <a href="tel:+917871113091" className="hover:underline">
                +91 78711 13091
              </a>{" "}
              |{" "}
              <a href="tel:+919884689275" className="hover:underline">
                +91 98846 89275
              </a>{" "}
              |{" "}
              <a href="tel:+919710177205" className="hover:underline">
                +91 97101 77205
              </a>
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-yellow-500 flex items-center justify-center text-2xl">
              ✉️
            </div>
            <h4 className="text-xl font-bold text-white uppercase">Email</h4>
            <p className="text-gray-300 text-lg">
              <a
                href="mailto:craftifyprojects@gmail.com"
                className="cursor-pointer"
              >
                craftifyprojects@gmail.com
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
