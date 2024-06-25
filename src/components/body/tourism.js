import Button from "../button";
import TouristImage from "../../images/tourists.png";
import { FaArrowRight } from "react-icons/fa";

const Tourism = () => {
  return (
    <section className="flex flex-col gap-4 md:flex-row justify-center items-center mt-8 lg:mt-2 lg:gap-20">
      <article className="w-full lg:w-1/2 px-16 lg:px-4 py-1">
        <h2 className="font-bold text-2xl mb-4">Tourism</h2>
        <p className="mb-4">
          What’s a vacation in a different country if you can’t experience the
          exciting places and tourist attractions that it embodies? With
          LuxuryVacays, you don’t have to worry about this question as it is our
          utmost goal that you get to experience all the best places in your
          country of choice.
        </p>
        <Button>Book now</Button>
        <a
          href="/"
          className="text-[rgba(251,133,0,1)] inline mx-2 cursor-pointer focus:outline-none focus:ring focus:border-transparent"
          aria-label="View vacation details"
        >
          <span className="hover:mr-2 transition-all">Vacation details</span>
          <FaArrowRight className="inline ml-2 hover:ml-4 transition-all" />
        </a>
      </article>
      <figure className="rounded-full bg-gradient-to-b from-white via-white to-[rgba(142,236,245)] overflow-hidden max-w-xs lg:max-w-md">
        <img
          className="block max-h-full w-full object-cover rounded-full"
          src={TouristImage}
          alt="A man and a smiling woman capturing a side attraction using a camera"
        />
      </figure>
    </section>
  );
};

export default Tourism;
