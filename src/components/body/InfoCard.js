import React from "react";
import { IoIosGlobe } from "react-icons/io";
import { IoRibbonOutline } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
const InfoCard = () => {
  const infoData = [
    {
      ariaLabel: "Travel Experiences Count",
      icon: <IoRibbonOutline className="text-4xl mb-2" />,
      number: 28000,
      text: "Travel Experiences",
    },
    {
      ariaLabel: "Number of Visited Countries",
      icon: <IoIosGlobe className="text-4xl mb-2" />,
      number: "62+",
      text: "Countries",
    },
    {
      ariaLabel: "Happy Traveller Count",
      icon: <FaPeopleGroup className="text-4xl mb-2" />,
      number: 35000,
      text: "Happy Travellers",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 px-4 py-8 m-4">
      {infoData.map(({ ariaLabel, icon, number, text }, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center border border-solid rounded-2xl p-6 text-center w-60"
          aria-label={ariaLabel}
          style={{
            boxShadow: "0 0 2px 5px rgba(204, 240, 247, 1)",
          }}
        >
          <div aria-hidden="true">{icon}</div>
          <p className="font-bold text-xl" aria-live="polite">
            {number}
          </p>
          <p className="text-gray-600">{text}</p>
        </div>
      ))}
    </div>
  );
};

export default InfoCard;
