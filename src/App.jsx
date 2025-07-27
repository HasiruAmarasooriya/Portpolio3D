import React from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

export default function App() {
  // Initialize AOS (Animate On Scroll) library
  useEffect(() => {
    Aos.init({
      duration: 1500, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once while scrolling down
    });
  }, []);

  return (
    <main>
      {
        /*Gardient image*/
        <img
          className="absolute top-0 right-0 opacity-60 -z-1"
          src="/gradient.png"
          alt="Gradient-img"
        />
      }

      {/*Blur Effect*/}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] -rotate-[30deg] -z-10 "></div>

      {/*Header Component*/}
      <Header />

      {/*Hero Component*/}
      <Hero />
    </main>
  );
}
