import React, { useEffect, useRef, useState } from "react";
import Stars from "../../images/stars.svg";
import Button from "../button";
import ResortTreatImage from "../../images/resortTreat.png";
import { FaArrowRight } from "react-icons/fa";

const ResortTreat = () => {
  const listItem = [
    "Luxury Spa",
    "Pool Bar",
    "Banquetting",
    "Indoor Cinema",
    "Tour Guides",
    "Indoor Mall",
  ];

  const divRef = useRef(null);
  const figureRef = useRef(null);
  const [figureHeight, setFigureHeight] = useState(0);

  useEffect(() => {
    const setHeight = () => {
      if (divRef.current && figureRef.current) {
        const height = divRef.current.clientHeight;
        if (height !== figureHeight) {
          setFigureHeight(height);
        }
      }
    };

    setHeight();

    const handleResize = () => {
      window.requestAnimationFrame(setHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [figureHeight]);

  return (
    <article className="p-8 lg:p-12 md:w-5/6 md:p-4 mx-auto">
      <header
        className="font-bold text-3xl lg:text-4xl text-center bg-center bg-contain bg-no-repeat py-10"
        style={{ backgroundImage: `url(${Stars})` }}
      >
        <h2>What to Expect</h2>
        <p className="font-thin text-sm lg:text-base">
          We are committed to making your vacation experiences all-round
          exciting
        </p>
      </header>
      <section className="flex flex-col sm:flex-row gap-4 pb-8">
        <div className="justify-between lg:w-1/2 lg:p-4" ref={divRef}>
          <h3 className="font-bold text-2xl lg:text-3xl mb-4">Resort Treats</h3>
          <p className="text-sm lg:text-base">
            We’ve curated an exciting number of things to give you the luxurious
            vacation that you deserve and keep you thrilled every second of the
            day.
          </p>
          <ul className="mt-8 py-0">
            {listItem.map((item, index) => (
              <li className="my-2 p-2 flex items-center" key={index}>
                <span
                  className="flex items-center justify-center w-8 h-8 rounded-full text-white bg-[rgba(251,133,0,1)] mr-4"
                  aria-label={`Item ${index + 1}`}
                >
                  {index + 1}
                </span>
                {item}
              </li>
            ))}
          </ul>
          <Button>Book now</Button>
          <a
            href="/"
            className="text-[rgba(251,133,0,1)] inline mx-2 cursor-pointer"
            aria-label="View vacation details"
          >
            <span className="hover:mr-2 transition-all">Vacation details</span>
            <FaArrowRight className="inline ml-2 hover:ml-4 transition-all" />
          </a>
        </div>
        <figure
          className="w-full lg:w-1/2 p-12 flex rounded-3xl items-center justify-center"
          style={{
            background:
              "linear-gradient(to bottom, white, white, rgba(142, 236, 245))",
            height: `${figureHeight}px`,
          }}
          ref={figureRef}
          aria-labelledby="resort-treat-image"
        >
          <img
            className="block h-full object-cover rounded-3xl cursor-pointer"
            src={ResortTreatImage}
            alt="Resort Treat"
            id="resort-treat-image"
          />
        </figure>
      </section>
    </article>
  );
};

export default ResortTreat;
