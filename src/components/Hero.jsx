import React from "react";
import { Link } from "react-router-dom";
import ParticlesComponent from "./ParticlesComponent";
const Hero = () => {
  const social_media = [
    {link:"https://www.linkedin.com/in/vickykumar27/",logo:"logo-linkedin"},
    {link:"https://github.com/vickykrsingh",logo:"logo-github"},
  ];
  return (
    <>
    {/* <ParticlesComponent/> */}
      <div className="flex items-center justify-center w-full min-h-screen">
        <div className="md:text-left text-center flex items-center justify-center flex-col gap-1 z-50">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold flex flex-col items-center justify-center">
            <span className="text-cyan-600 md:text-6xl text-5xl block text-center">
              Hi!,
            </span>
            <div className="tracking-widest">
            I'm <span>Vicky Kumar</span>
            </div>
          </h1>
          <h4 className="md:text-2xl text-lg md:leading-normal leading-5 mt-4 text-gray-400 tracking-wider">
          Full-Stack MERN Developer Building Seamless Digital Experiences
          </h4>
          <div className="flex gap-4">
          <a target="_blank" href="https://drive.google.com/file/d/10tfv9k5dMDz9OprnAf5GMzXga5Gx1JuC/view?usp=sharing"><button className="btn-primary mt-8">Resume</button></a>
          <Link to="/contact" className="btn-primary mt-8">Contact</Link>
          </div>
          <div className="mt-8 text-3xl flex items-center md:justify-start justify-center gap-5">
            {social_media?.map((icon) => (
              <div
                key={icon}
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                <a href={icon.link} target="_blank">{<ion-icon name={icon.logo}></ion-icon>}</a>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
  );
};

export default Hero;
