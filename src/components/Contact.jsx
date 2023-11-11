import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="flex flex-col p-2 justify-center max-w-screen-xl mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            className="flex flex-col w-full"
            method="POST"
            action="https://getform.io/f/876d7a29-b5f6-4314-b872-494e390b43b8"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <textarea
              placeholder="Enter your message"
              name="message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-8 py-3 my-10 mx-auto rounded-md hover:scale-110 duration-500">
              Let's talk{" "}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
