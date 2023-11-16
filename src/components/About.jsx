import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white w-full min-h-screen mt-0 px-5 flex items-center"
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="p-2">
          <p className="text-4xl md:text-5xl lg:text-6xl font-semibold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-lg md:text-xl mt-10 md:mt-20">
          Hello, I'm Alex, born in Hunedoara on March 2, 1998, under the Pisces
          zodiac sign, although I don't consider astrology a significant factor
          in my life. My journey begins after completing high school when I
          faced the daunting challenge of determining my life's direction. I
          found myself in a state of disorientation, uncertain of which path to
          pursue. This uncertainty would have a profound impact on my future. As
          a reference point, I chose to enroll in the Biology program at the
          University of Sibiu, a beautiful field of study. However, I never
          truly felt that I belonged in that domain. After completing my degree
          and making several attempts in the field, I came to the realization
          that something needed to change."
        </p>
        <br />
        <p className="text-lg md:text-xl">
          That change occurred in 2023 when, alongside individuals I interact
          with online, I was inspired to embark on a career shift. I came to
          understand that it's never too late to follow one's passions. With a
          deep love for gaming and computers, I decided to start learning
          programming. I began with Front-End development, which proved to be
          precisely what I needed. As days passed, my appetite for learning
          grew, and I made the decision to enroll in a university program to
          further my education and skills in programming. Today, I am an active
          learner, determined to excel on all fronts.
        </p>
      </div>
    </div>
  );
};

export default About;
