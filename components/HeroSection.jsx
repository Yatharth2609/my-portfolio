"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/Yatharth_Resume.pdf";
    downloadLink.download = "Yatharth_Resume.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-8 flex flex-col justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I am{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Yatharth Mishra",
                1000,
                "A Web Developer",
                1000,
                "A Coder",
                1000,
                "A Tech Enthusiast",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#adb7be] mb-6 text-base sm:text-lg lg:text-xl">
            <i>
              &quot;As a computer science enthusiast and aspiring engineer, I bring a
              blend of technical proficiency in DSA and web development, coupled
              with creative problem-solving skills, leadership qualities, and a
              collaborative spirit to every project I undertake.&quot;
            </i>
          </p>
          <div>
            <button className="px-6 py-3 rounded-full w-full sm:w-fit mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-200 text-white font-semibold">
              Hire Me!
            </button>
            <button
              className="px-1 py-1 rounded-full w-full sm:w-fit bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:bg-slate-800 text-white"
              onClick={handleDownload}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:ml-auto  lg:col-span-4"
        >
          <div className="w-64 lg:w-96 h-64 lg:h-96 relative">
            <Image
              src="/images/hero-img.png"
              alt="hero image"
              className="rounded-full object-cover"
              layout="fill"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
