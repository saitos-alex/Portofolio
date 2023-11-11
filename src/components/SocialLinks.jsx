import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFiletypePdf } from "react-icons/bs";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={40} />
        </>
      ),
      href: "https://www.linkedin.com/in/saitos-alexandru-cristian-640517280/",
      style: "rounded-tr-md bg-blue-600",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={40} />
        </>
      ),
      href: "https://www.github.com/saitos-alex",
      style: "rounded-tr-md bg-gray-700",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={40} />
        </>
      ),
      href: "mailto:alexsaitoscristian@gmail.com",
      style: "bg-blue-800",
    },
    {
      id: 4,
      child: (
        <>
          Resume <BsFiletypePdf size={40} />
        </>
      ),
      href: "/SaitosAlexandruCristianCV.pdf",
      style: "rounded-br-md bg-gray-500",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-14 px-2 ml-[-105px] hover:ml-[-0px] hover:rouded-md duration-700" +
              " " +
              style
            }
          >
            {" "}
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
