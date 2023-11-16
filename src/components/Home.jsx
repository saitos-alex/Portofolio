import React from "react";
import HeroImage from "../assets/heroImage.jpg";
import { IoMdArrowRoundForward } from "react-icons/io";
import { Link } from "react-scroll";
import { useTypewriter } from "react-simple-typewriter";

const Home = () => {
  const [typeEffect] = useTypewriter({
    words: ["Front-END Developer", "Student"],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 60,
  });
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="mx-auto max-w-screen-xl flex flex-col items-center h-full w-full px-5 md:flex-row">
        <div className="flex flex-col justify-center h-full m-auto">
          <h2 className="text-6xl font-bold text-white">
            <span className="hidden lg:block">{typeEffect}</span>
            <span className="block lg:hidden">Front-END Developer</span>
          </h2>
          <p className="text-gray-500 text-xl pt-6 pb-3 max-w-3xl">
            I'm a computer science student with a passion for front-end
            development. I specialize in creating user-friendly, visually
            appealing websites using HTML, CSS,JavaScript and React. I'm
            dedicated to perfecting user experiences and staying updated with
            the latest trends and technologies in web development.
          </p>
          <div>
            <Link
              to="portofolio"
              smooth
              duration={1000}
              className="group text-white w-fit px-8 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portofolio
              <span className="group-hover:arotate-90 duration-300">
                <IoMdArrowRoundForward className="ml-1" size={30} />
              </span>
            </Link>
          </div>
        </div>
        <div className="hidden lg:block">
          <img className="rounded-xl" src={HeroImage} alt="My profile"></img>
        </div>
      </div>
    </div>
  );
};

export default Home;
