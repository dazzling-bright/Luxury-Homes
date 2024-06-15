import React from "react";
import Button from "../button";
import backgroundImage from "../../images/beach.png";
import FloatingHero from "./floatingHero";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-40 "
      style={{
        backgroundImage: `linear-gradient(rgba(135, 206, 235, 0.2), rgba(135, 206, 235, 0.2)), url(${backgroundImage})`, // Changing the linear gradient color to light sky blue
      }}
    >
      <div className="max-w-2xl px-4">
        <h1 className="text-5xl font-bold mb-4">
          Giving You the Vacation of Your Dreams
        </h1>
        <p className="text-xl mb-8">
          We put the luxury in your vacation experiences, literally! Making
          every trip with us feel like a once-in-a-lifetime kind of experience.
        </p>
        <div className="flex space-x-4">
          <Button backgroundColor="rgba(251,133,0,1)" textColor="white">
            Book now
          </Button>
          <Button
            backgroundColor="rgba(255, 255, 255)"
            textColor="rgba(251,133,0,1)"
          >
            See videos
          </Button>
        </div>
      </div>

      <FloatingHero />
    </section>
  );
};

export default Hero;
