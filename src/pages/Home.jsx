import { Links } from "react-router-dom";
import profile from "../assets/profile.JPG";
import React from "../assets/React.png";
import Laravel from "../assets/Laravel.png";
import Tailwind from "../assets/Tailwind.png";
import PHP from "../assets/PHP.png";

export default function Home() {
  const techStack = [
    { name: "React", logo: { React } },
    { name: "Laravel", logo: { Laravel } },
    { name: "Tailwind", logo: { Tailwind } },
    { name: "PHP", logo: { PHP } },
  ];
  return (
    <div className="text-white h-screen flex flex-col items-center ">
      <div className="profile flex flex-col items-center mt-30 ">
        <img
          src={profile}
          alt="Profile Pic"
          className="w-100 h-100 rounded-2xl "
        />
        <h1 className="text-6xl sm:text-7xl font-bold">Lemuel Tadeo</h1>
        <h5 className="text-sm sm:text-lg font-normal">
          Full Stack Developer Specializing in React and Laravel
        </h5>
      </div>

      <div className="tech-stack-title mt-10">
        <h2 className="text-2xl">Core Technologies</h2>
      </div>
    </div>
  );
}
