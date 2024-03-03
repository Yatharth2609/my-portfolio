"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const ProjectSection = () => {
  const PROJECT_DATA = [
    {
      id: 1,
      title: "Project 1",
      description: "This is the first project",
      imgUrl: "images/about-image.png",
      Tag: ["All", "Web"],
      gitUrl: "https://github.com/Yatharth2609",
      previewUrl: "https://leetcode.com/Yatharth_M26/",
    },
    {
      id: 2,
      title: "Project 2",
      description: "This is the second project",
      imgUrl: "images/about-image.png",
      Tag: ["All", "Web"],
      gitUrl: "https://github.com/Yatharth2609",
      previewUrl: "https://leetcode.com/Yatharth_M26/",
    },
    {
      id: 3,
      title: "Project 3",
      description: "This is the third project",
      imgUrl: "images/about-image.png",
      Tag: ["All", "Web"],
      gitUrl: "https://github.com/Yatharth2609",
      previewUrl: "https://leetcode.com/Yatharth_M26/",
    },
    {
      id: 4,
      title: "Project 4",
      description: "This is the fourth project",
      imgUrl: "images/about-image.png",
      Tag: ["All", "Web"],
      gitUrl: "https://github.com/Yatharth2609",
      previewUrl: "https://leetcode.com/Yatharth_M26/",
    },
    {
      id: 5,
      title: "Project 5",
      description: "This is the fifth project",
      imgUrl: "images/about-image.png",
      Tag: ["All", "Coding"],
      gitUrl: "https://github.com/Yatharth2609",
      previewUrl: "https://leetcode.com/Yatharth_M26/",
    },
    {
      id: 6,
      title: "Project 6",
      description: "This is the sixth project",
      imgUrl: "images/about-image.png",
      Tag: ["All", "Coding"],
      gitUrl: "https://github.com/Yatharth2609",
      previewUrl: "https://leetcode.com/Yatharth_M26/",
    },
  ];

  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = PROJECT_DATA.filter((project) =>
    project.Tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          name="All"
          onClick={() => handleTagChange("All")}
          isSelected={tag === "All"}
        />
        <ProjectTag
          name="Web"
          onClick={() => handleTagChange("Web")}
          isSelected={tag === "Web"}
        />
        <ProjectTag
          name="Coding"
          onClick={() => handleTagChange("Coding")}
          isSelected={tag === "Coding"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectSection;
