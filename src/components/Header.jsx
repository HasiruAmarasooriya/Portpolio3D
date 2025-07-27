import React from "react";
import "boxicons/css/boxicons.min.css";
const Header = () => {
  // Function to toggle the mobile menu visibility
  const toggleMobileMenu = () => {
    // Get the mobile menu element
    const mobileMenu = document.getElementById("mobileMenu");

    // Toggle the 'hidden' class to show/hide the menu
    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="text-3xl md:text-4x1 lg:text-5x1 font-light m-0 "
      >
        HASIRU
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-12">
        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/home"
        >
          Home
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1300"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/about"
        >
          About
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/skills"
        >
          Skills
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1750"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/education"
        >
          Education
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/projects"
        >
          Projects
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2500"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/resume"
        >
          Resume
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="2750"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/services"
        >
          Services
        </a>

        <a
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="3000"
          className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
          href="/contact"
        >
          Contact
        </a>
      </nav>

      <button className="text-3xl p-2 z-50">
        <i class="bx bx-home" />
      </button>

      {/* Mobile Menu button - visible only on mobile */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i class="bx bx-menu" />
      </button>

      {/* Mobile Menu - hidden by default */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 z-40 md:hidden bg-black bg-opacity-70 backdrop-blur-md"
      >
        <nav className="flex flex-col gap-6 items-center">
          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/home"
          >
            Home
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/about"
          >
            About
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/skills"
          >
            Skills
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/education"
          >
            Education
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/projects"
          >
            Projects
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/resume"
          >
            Resume
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/services"
          >
            Services
          </a>

          <a
            className="text-base tracking-wider transition-colors hover:text-gray-300 z-50"
            href="/contact"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
