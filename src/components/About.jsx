import React from "react";
import Spline from "@splinetool/react-spline";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 py-20 min-h-screen"
    >
      {/* Left Side - Enlarged 3D Spline Robot */}
      <div
        data-aos="fade-right"
        data-aos-duration="2000"
        className="w-full lg:w-1/2 flex justify-center items-center"
      >
        <div className="w-[700px] h-[700px] sm:w-[800px] sm:h-[800px] overflow-hidden">
          <Spline
            scene="https://prod.spline.design/mPIoFGIbkV-32SMZ/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Right Side - Image and Description */}
      <div
        data-aos="fade-left"
        data-aos-duration="1500"
        className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mt-10 lg:mt-0"
      >
        {/* Profile Image */}
        <img
          src="/my-image.jpg"
          alt="My Profile"
          className="w-52 h-52 sm:w-60 sm:h-60 rounded-full object-cover shadow-lg border-4 border-gray-300 mb-6"
        />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 tracking-wide">
          Who I Am
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-base sm:text-lg max-w-xl">
          I'm <span className="text-white font-medium">Hasiru Amarasooriya</span>, a
          <strong> Full Stack Developer</strong> and creative
          <strong> UI/UX Designer</strong> with strong experience in web and mobile app development.
        </p>

        <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-xl">
          My passion lies in building responsive, user-friendly interfaces and scalable backend systems using technologies like React, Node.js, and MongoDB.
        </p>

        {/* Download CV Button */}
        <a
          href="/Hasiru-CV.pdf"
          download
          className="mt-6 inline-block bg-gray-200 text-black hover:bg-black hover:text-white px-6 py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 shadow-md"
        >
          Download CV <i className="bx bx-download ml-1"></i>
        </a>
      </div>
    </section>
  );
};

export default About;
