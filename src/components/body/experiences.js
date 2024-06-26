import React from "react";
import Button from "../button";
import ResortImageOne from "../../images/resort-image-one.png";
import ResortImageTwo from "../../images/resort-image-two.png";
import ResortImageThree from "../../images/resort-image-three.png";
import { FaArrowRight } from "react-icons/fa";

const imageArray = [
  { src: ResortImageOne, description: "A woman watching the sun." },
  {
    src: ResortImageTwo,
    description: "A man and his friend happily skydiving.",
  },
  {
    src: ResortImageThree,
    description: "A group of friends wining and dining together.",
  },
];

const Experiences = () => {
  return (
    <section className="flex items-center lg:gap-[10%] gap-2 flex-col sm:flex-row sm:w-5/6 mx-auto">
      <div
        className="sm:w-1/2 px-2 py-4 max-h-64 h-64 flex items-center justify-between rounded-3xl"
        style={{
          background:
            "linear-gradient(to bottom, white, white, rgba(142, 236, 245))",
        }}
        aria-labelledby="resort-treat-image"
      >
        {imageArray.map((item, index) => (
          <figure key={index} className="flex-1 mx-1 h-full flex items-center">
            <img
              className="object-contain h-full w-full"
              src={item.src}
              alt={item.description}
              tabIndex={0} // Make images focusable for keyboard users
            />
          </figure>
        ))}
      </div>
      <article className="sm:w-1/2 justify-between px-4 py-2">
        <h3 id="resort-treat-image" className="text-xl font-bold mb-4">
          Exciting Experiences
        </h3>
        <p className="mb-4">
          From group picnics, to boat cruise down to exciting adventures,
          luxuryvacay summer edition promises to leave you thrilled every step
          of the way. It’s going to be an endless round of new and exciting
          experiences with strangers turned friends.
        </p>
        <Button>Book now</Button>
        <a
          href="/"
          className="text-[rgba(251,133,0,1)] inline mx-2 cursor-pointer"
          aria-label="View vacation details"
        >
          <span className="hover:mr-2 transition-all">Vacation details</span>
          <FaArrowRight className="inline ml-2 hover:ml-4 transition-all" />
        </a>
      </article>
    </section>
  );
};

export default Experiences;
