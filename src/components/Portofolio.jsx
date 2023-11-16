import React from "react";
import bankify from "../assets/portfolio/bankify.png";
import bankwebsite from "../assets/portfolio/bankwebsite.png";
import stripe from "../assets/portfolio/stripe.png";
import repo from "../assets/portfolio/repo.png";
import pizzashop from "../assets/portfolio/pizzashop.png";
import game from "../assets/portfolio/game.png";
import mapy from "../assets/portfolio/mapy.png";

const Portofolio = () => {
  const portofolios = [
    {
      id: 1,
      src: bankify,
      code: "https://github.com/saitos-alex/PROJECT-bankpart-JS",
      demo: "https://project-bankpart-js.vercel.app/",
    },
    {
      id: 2,
      src: bankwebsite,
      code: "https://github.com/saitos-alex/Bankify",
      demo: "https://bankify-six.vercel.app/",
    },
    {
      id: 3,
      src: stripe,
      code: "https://github.com/saitos-alex/SwipeProject",
      demo: "https://swipe-project-two.vercel.app/",
    },
    {
      id: 4,
      src: repo,
      code: "https://github.com/saitos-alex/Repo-Finder",
      demo: "https://repo-finder-lovat.vercel.app/",
    },
    {
      id: 5,
      src: pizzashop,
      code: "https://github.com/saitos-alex/OnlineShop",
      demo: "https://online-shop-pi-wheat.vercel.app/",
    },
    {
      id: 6,
      src: game,
      code: "https://github.com/saitos-alex/GuessMyNumber-",
      demo: "https://starlit-sable-7a7ab0.netlify.app/",
    },
    {
      id: 7,
      src: mapy,
      code: "https://github.com/saitos-alex/Mapyu",
      demo: "https://meek-swan-2690df.netlify.app/",
    },
  ];
  return (
    <div
      name="portofolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:h-screen"
    >
      <div className=" max-w-screen-xl p-5 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-5xl font-bold inline border-b-4 border-gray-500">
            Portofolio
          </p>
          <p className="pt-10 text-lg">
            Here, you'll find a curated collection of my web development
            projects. Each one is a journey into the world of coding, showcasing
            a blend of interactive applications, elegant websites, and
            innovative solutions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-14 px-12 sm:px-0">
          {portofolios.map(({ id, src, demo, code }) => (
            <div key={id} className=" shadow-gray-600 shadow-lg rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-2xl duration-700 hover:scale-110"
              ></img>
              <div className="flex items-center justify-center">
                <a target="_blank" href={demo} rel="noreferrer">
                  <button className="w-1/2 px-7 py-4 m-1 duration-200 hover:scale-125">
                    Demo
                  </button>
                </a>
                <a target="_blank" href={code} rel="noreferrer">
                  <button className="w-1/2 px-7 py-4 m-1 duration-200 hover:scale-125">
                    Code
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portofolio;
