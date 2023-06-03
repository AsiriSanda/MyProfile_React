import React from 'react';

function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a Software Developer and a Student at the Institute of Software
          Engineering. I enjoy creating software and UI/UX designs. I’m
          passionate about bringing both the technical and visual aspects of
          digital products to life. I’m Currently working on Improving my skills
          in and understanding JavaScript and HTML.
        </p>
      </div>
    </div>
  );
}

export default About;
