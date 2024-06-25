import React from "react";
import Accommodaton from "../../images/accommodation.png";
import Tourism from "../../images/tourism.png";
import OutdoorGames from "../../images/outdoorGames.png";
import Shows from "../../images/shows.png";
import Wifi from "../../images/wifi.png";
import Swimming from "../../images/swimming.png";
import LuxurySpa from "../../images/luxurySpa.png";
import Dinner from "../../images/dinner.png";
import LuxuryBar from "../../images/luxuryBar.png";

const FloatingHero = () => {
  return (
    <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 md:w-[80%] w-[90%] max-h-[400px] overflow-y-auto px-10 bg-white flex flex-col gap-10 lg:flex-row lg:gap-[15%] justify-between border-8 border-[rgba(251,133,0,0.6)] p-6 rounded-3xl shadow-[0_0_20px_4px_rgba(251,133,0,0.5)]">
      <ContentOne />
      <ContentTwo />
    </div>
  );
};

const ContentOne = () => {
  const imageArray = [
    { image: Accommodaton, title: "Accommodation" },
    { image: Tourism, title: "Tourism" },
    { image: OutdoorGames, title: "Outdoor Games" },
    { image: Shows, title: "Shows" },
  ];
  return (
    <div className="w-full lg:w-1/2 space-y-6">
      <header className="flex justify-between font-bold items-center">
        <h2 className="text-2xl">What we Cover</h2>
        <p className="text-[rgba(251,133,0,1)] hover:underline">See more</p>
      </header>
      <figure className="flex flex-wrap justify-between gap-4">
        {imageArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[45%] md:w-[20%]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="block w-20 h-20 object-cover"
            />
            <p className="text-[0.8rem] font-bold text-center mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </figure>
    </div>
  );
};

const ContentTwo = () => {
  const imageArray = [
    { image: Wifi, title: "Wifi" },
    { image: Swimming, title: "Swimming" },
    { image: LuxurySpa, title: "Luxury Spa" },
    { image: Dinner, title: "Dinner" },
    { image: LuxuryBar, title: "Luxury Bar" },
  ];
  return (
    <div className="w-full lg:w-1/2 flex flex-col space-y-6">
      <header className="flex font-bold justify-between items-center">
        <h2 className="text-2xl">Side Attractions</h2>
        <p className="text-[rgba(251,133,0,1)] hover:underline">See more</p>
      </header>
      <figure className="flex flex-wrap justify-between gap-2">
        {imageArray.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-[45%] md:w-[20%]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="block w-20 h-20 object-contain"
            />
            <p className="text-[0.8rem] font-bold text-center mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </figure>
    </div>
  );
};

export default FloatingHero;
