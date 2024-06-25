import React from "react";
import backgroundImage from "../../images/beach.png";
import HeroTextContent from "./HeroTextContent";
import HeroButtons from "./HeroButton";
import FloatingHero from "./FloatingHero";

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center py-40 px-4 mb-[400px]"
      style={{
        backgroundImage: `linear-gradient(rgba(135, 206, 235, 0.2), rgba(135, 206, 235, 0.2)), url(${backgroundImage})`,
      }}
    >
      <HeroTextContent />
      <HeroButtons />
      <FloatingHero />
    </section>
  );
};

export default Hero;
