"use client";

import { useInView } from "framer-motion";
import React, { useRef, useState } from "react";
import ProjectTag from "./ProjectTag";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Mohamed Salah",
    description: "Project 1 description",
    image: "/projects/1.png",
    tag: ["All", "Graphic"],
    gitUrl: "/",
    previewUrl: "https://utha-artgal.vercel.app/gallery",
  },
  {
    id: 2,
    title: "Mesut Ozil",
    description: "Project 2 description",
    image: "/projects/2.png",
    tag: ["All", "Graphic"],
    gitUrl: "/",
    previewUrl: "https://utha-artgal.vercel.app/gallery",
  },
  {
    id: 3,
    title: "Paulo Dybala",
    description: "Project 3 description",
    image: "/projects/3.png",
    tag: ["All", "Graphic"],
    gitUrl: "/",
    previewUrl: "https://utha-artgal.vercel.app/gallery",
  },
  {
    id: 4,
    title: "eSPORTS",
    description: "Project 4 description",
    image: "/projects/4.png",
    tag: ["All", "Logo"],
    gitUrl: "/",
    previewUrl: "https://utha-artgal.vercel.app/gallery",
  },
  {
    id: 5,
    title: "Logo Bisnis",
    description: "Project 5 description",
    image: "/projects/5.png",
    tag: ["All", "Logo"],
    gitUrl: "/",
    previewUrl: "https://utha-artgal.vercel.app/gallery",
  },
  {
    id: 6,
    title: "Event",
    description: "Project 6 description",
    image: "/projects/6.png",
    tag: ["All", "Logo"],
    gitUrl: "/",
    previewUrl: "https://utha-artgal.vercel.app/gallery",
  },
];

const Project = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);

  const isInview = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filtredProject = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardvariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2
        className="text-center text-4xl text-mycolor-700 font-semibold
        mt-4 mb-8 lg:mt-8 lg:mb-12"
      >
        My Projects
      </h2>

      <div
        className="text-white flex flex-row justify-center items-center
        gap-5 py-6"
      >
        <ProjectTag
          name="All"
          onClick={handleTagChange}
          isSelected={tag === "All"}
        />

        <ProjectTag
          name="Graphic"
          onClick={handleTagChange}
          isSelected={tag === "Graphic"}
        />

        <ProjectTag
          name="Logo"
          onClick={handleTagChange}
          isSelected={tag === "Logo"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10">
        {filtredProject.map((project, index) => (
          <motion.li
            key={index}
            variants={cardvariants}
            initial="initial"
            animate={isInview ? "animate" : "inital"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              description={project.description}
              image={project.image}
              previewUrl={project.previewUrl}
              title={project.title}
              key={project.id}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
