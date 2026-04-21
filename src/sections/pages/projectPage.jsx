import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes } from "react-icons/fa";

// IMPORT IMAGES
import img1 from "../../assets/Ashok Nagar bedroom texture wall with study unit.jpeg";
import img2 from "../../assets/Ashok Nagar Harmony Foyer Art work.jpeg";
import img3 from "../../assets/Ashok Nagar Harmony Living Area.jpeg";
import img4 from "../../assets/Ashok Nagar Harmony Livingroom.jpeg";
import img5 from "../../assets/Ashok Nagar Harmony Masterbedroom Dresser unit.jpeg";
import img6 from "../../assets/Ashok Nagar Harmony Masterbedroom Tv Unit.jpeg";
import img7 from "../../assets/Ashok Nagar Harmony Masterbedroom Wardrobe.jpeg";
import img8 from "../../assets/Ashok Nagar Harmony Modular Kitchen  unit.jpeg";
import img9 from "../../assets/Ashok Nagar Harmony Modular Kitchen.jpeg";
import img10 from "../../assets/Ashok Nagar Harmony Pooja Unit.jpeg";
import img11 from "../../assets/Ashok Nagar Harmony texture wall.jpeg";
import img12 from "../../assets/Ashok Nagar Harmony Tv unit.jpeg";
import img13 from "../../assets/Ashok Nagar Masterbedroom kingsize cot.jpeg";
import img14 from "../../assets/Ashok nagar Masterbedroom wardrobe unit.jpeg";
import img15 from "../../assets/Egmore commercial Reception table.jpeg";
import img16 from "../../assets/Egmore Decorative Partition wall.jpeg";
import img17 from "../../assets/Tambaram  Modular Kitchen.jpeg";
import img18 from "../../assets/Tambaram bedroom study unit.jpeg";
import img19 from "../../assets/Tambaram bedroom wardobe along with study unit.jpeg";
import img20 from "../../assets/Tambaram living Tvunit.jpeg";
import img21 from "../../assets/Tambaram Masterbedroom Study table.jpeg";
import img22 from "../../assets/Tambaram modular kitchen tall unit.jpeg";
import img23 from "../../assets/Tambaram Modular Kitchen.jpeg";
import img24 from "../../assets/Tambaram pooja room.jpeg";

import { slideUpVariants, zoomInVariants } from "../animation";

// PROJECT DATA
const projects = [
  {
    id: 1,
    title: "Ashok Nagar Bedroom Study",
    category: "Interior",
    image: img1,
  },
  { id: 2, title: "Foyer Artwork", category: "Interior", image: img2 },
  { id: 3, title: "Living Area", category: "Interior", image: img3 },
  { id: 4, title: "Living Room", category: "Interior", image: img4 },
  { id: 5, title: "Bedroom Dresser", category: "Interior", image: img5 },
  { id: 6, title: "Bedroom TV Unit", category: "Interior", image: img6 },
  { id: 7, title: "Wardrobe", category: "Interior", image: img7 },
  { id: 8, title: "Kitchen Unit", category: "Kitchen", image: img8 },
  { id: 9, title: "Modular Kitchen", category: "Kitchen", image: img9 },
  { id: 10, title: "Pooja Unit", category: "Interior", image: img10 },
  { id: 11, title: "Texture Wall", category: "Interior", image: img11 },
  { id: 12, title: "TV Unit", category: "Interior", image: img12 },
  { id: 13, title: "King Size Cot", category: "Bedroom", image: img13 },
  { id: 14, title: "Wardrobe Unit", category: "Bedroom", image: img14 },
  { id: 15, title: "Reception Table", category: "Commercial", image: img15 },
  { id: 16, title: "Partition Wall", category: "Commercial", image: img16 },
  { id: 17, title: "Tambaram Kitchen", category: "Kitchen", image: img17 },
  { id: 18, title: "Bedroom Study", category: "Bedroom", image: img18 },
  { id: 19, title: "Wardrobe + Study", category: "Bedroom", image: img19 },
  { id: 20, title: "TV Unit", category: "Living", image: img20 },
  { id: 21, title: "Study Table", category: "Bedroom", image: img21 },
  { id: 22, title: "Tall Unit Kitchen", category: "Kitchen", image: img22 },
  { id: 23, title: "Modular Kitchen", category: "Kitchen", image: img23 },
  { id: 24, title: "Pooja Room", category: "Interior", image: img24 },
];

export default function ProjectPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[100%] w-[90%] m-auto py-[60px] flex flex-col justify-between items-center gap-[20px]"
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
      </motion.div>
      {/* GRID */}

      <div className="w-full text-white px-6 md:px-16 py-12">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedImage(project)}
              className="cursor-pointer group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-end p-4">
                <div>
                  <h2 className="text-lg">{project.title}</h2>
                  <p className="text-xs text-gray-300">{project.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* MODAL */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
            >
              {/* CLOSE BUTTON */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 text-white text-3xl"
              >
                <FaTimes />
              </button>

              {/* IMAGE */}
              <motion.img
                src={selectedImage.image}
                alt={selectedImage.title}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                className="max-w-[90%] max-h-[90vh] rounded-xl"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
