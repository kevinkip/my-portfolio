import Image from "next/image";
import React from "react";
import Projects from "./projects";

interface ProjectCardProps {
    title: string,
    link: any,
    imgUrl: any,
    number: string,
}

const ProjectCard = ({ title, link, imgUrl, number }: ProjectCardProps) => {
    return (
      <a href={link} className="w-full block shadow-2xl">
        <div className="relative overflow-hidden">
          <div className="h-72 object-cover">
            <Image className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full" src={imgUrl} width={20} height={20} alt="portfolio" />
          </div>
          <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
            {title}
          </h1>
          <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
            {number.length === 1 ? "0" + number : number}
          </h1>
        </div>
      </a>
    );
  };

  export default ProjectCard