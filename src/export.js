import building from "../src/assets/building.svg";
import construction from "../src/assets/construction.svg";
import design from "../src/assets/design.svg";
import document from "../src/assets/document.svg";
import paint from "../src/assets/paint.svg";
import support from "../src/assets/support.svg";

import { IoDocumentTextSharp } from "react-icons/io5";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRegBuilding } from "react-icons/fa";
import { FaSitemap } from "react-icons/fa";

import client1 from "../src/assets/client1.png";
import client2 from "../src/assets/client2.png";
import client3 from "../src/assets/client3.png";

export const allservices = [
  {
    icon: paint,
    title: "Interior Design",
    about:
      "Creative interior design services to craft comfortable and visually stunning spaces that reflect individual style.",
  },
  {
    icon: building,
    title: "Building Renovation",
    about:
      "Expert renovation services to upgrade and modernize existing structures, enhancing functionality and aesthetic appeal.",
  },
  {
    icon: construction,
    title: "Construction Services",
    about:
      "Comprehensive construction solutions, from project planning to execution, ensuring high-quality and timely completion.",
  },
  {
    icon: support,
    title: "Customer Support",
    about:
      "Dedicated customer support to assist with inquiries, provide updates, and ensure a smooth project experience from start to finish.",
  },
  {
    icon: design,
    title: "Design & Planning",
    about:
      "Professional design and planning services to create efficient and innovative spaces tailored to client needs.",
  },
  {
    icon: document,
    title: "Documentation",
    about:
      "Detailed documentation for all project stages, providing clear records and ensuring compliance with industry standards.",
  },
];

export const planning = [
  {
    icon: IoDocumentTextSharp,
    title: "Planning",
    about:
      "Understanding client requirements, budgets, timelines, and space purpose to plan both construction and interior execution clearly.",
  },
  {
    icon: MdOutlineDesignServices,
    title: "Design",
    about:
      "Creating architectural plans, interior layouts, material selections, and 3D visuals for a cohesive outcome.",
  },
  {
    icon: FaRegBuilding,
    title: "Building",
    about:
      "Carrying out construction and interior works with skilled teams, quality materials, and strict supervision.",
  },
  {
    icon: FaSitemap,
    title: "Finish",
    about:
      "Final inspections, detailing, and handover ensuring the space is functional, refined, and ready for use.",
  },
];

export const clients = [
  {
    image: client1,
    name: "Akash",
    about:
      "Craftify transformed our home beautifully. Excellent interior quality, timely delivery, and very professional team. Truly value for money.",
    location: "Tondiarpet",
  },
  {
    image: client2,
    name: "Chandrasekar",
    about:
      "From design to execution, Craftify handled everything smoothly. Our flat interiors look elegant and well-planned. Highly recommended.",
    location: "Madipakkam",
  },
  {
    image: client3,
    name: "C. K. Suthanthiram",
    about:
      "Very satisfied with Craftify’s interior work. Good materials, transparent pricing, and regular updates throughout the project.",
    location: "Egmore",
  },
];
