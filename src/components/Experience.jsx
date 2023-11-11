import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactimage from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import python from "../assets/python.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";

export const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactimage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-700",
    },
    {
      id: 7,
      src: python,
      title: "Python",
      style: "shadow-yellow-800",
    },
    {
      id: 8,
      src: git,
      title: "Git",
      style: "shadow-red-400",
    },
  ];
  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black w-full min-h-screen flex items-center"
    >
      <div className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center w-full text-white">
        <div>
          <p className="text-4xl md:text-5xl lg:text-6xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6 text-lg md:text-2xl">
            These are the technologies I've worked with
          </p>
        </div>
        <div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 text-center py-4 md:py-11 px-4 md:px-12">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={
                  "shadow-md hover:scale-125 duration-700 py-8 rounded-xl" +
                  " " +
                  style
                }
              >
                <img className="w-20 mx-auto" src={src} alt=""></img>
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
