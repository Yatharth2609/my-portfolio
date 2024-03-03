"use client";
import Image from "next/image";
import React from "react";
import { useState, useTransition } from "react";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="pl-2">
        <li>❖ Java</li>
        <li>❖ Python</li>
        <li>❖ C/C++</li>
        <li>❖ HTML, CSS, JavaScript</li>
        <li>❖ React.js</li>
        <li>❖ Node.js</li>
        <li>❖ MongoDB</li>
        <li>❖ Next.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "Education",
    content: (
      <ul className="pl-2">
        <li>❖ Computer Science Engineering | GLA University, Mathura</li>
        <li>❖ XII (CBSE) | Subha Niketan</li>
        <li>❖ X (CBSE) | Amrita Vidyalayam</li>
      </ul>
    ),
  },
  {
    title: "Achievements",
    id: "Achievements",
    content: (
      <ul className="pl-2">
        <li>❖ Top 30 University Finalist for Smart India Hackathon 2023.</li>
        <li>
          ❖ Participated in Evolute 2K23 Hackathon conducted by GLA University.
        </li>
        <li>
          ❖ HackerRank Certification in Problem Solving, Java, Python and MySQL.
        </li>
        <li>
          ❖ Solved various problems in platforms like LeetCode, CodeCheif,
          HackerRank and GeeksForGeeks.
        </li>
        <li>❖ Won 1st Place in Guitar Competition in 10th Grade.</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" height={500} width={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base md:text-lg">
            Hello! I&apos;m a passionate and driven computer science engineering
            student with a keen interest in Data Structures and Algorithms, web
            development, and creative problem-solving. I thrive in collaborative
            environments and am known for my leadership skills and ability to
            work seamlessly in a team. My journey in the world of technology has
            not only equipped me with technical prowess but also fostered a
            spirit of continuous learning.<br/>Currently pursuing my degree, I am
            dedicated to honing my skills in computer science and exploring
            innovative solutions to real-world challenges. From crafting
            efficient algorithms to building dynamic web applications, I find
            joy in every facet of the software development process. With a
            proactive and adaptable mindset, I am always ready to take on new
            challenges and contribute to meaningful projects.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              active={tab === "skills"}
              selectTab={() => handleTabChange("skills")}
            >
              Skills
            </TabButton>
            <TabButton
              active={tab === "Education"}
              selectTab={() => handleTabChange("Education")}
            >
              Education
            </TabButton>
            <TabButton
              active={tab === "Achievements"}
              selectTab={() => handleTabChange("Achievements")}
            >
              Achievements
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
