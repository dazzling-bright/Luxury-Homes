import Button from "../button";
import TouristImage from "../../images/tourists.png";
import { FaArrowRight } from "react-icons/fa";

const Tourism = () => {
  return (
    <section className="flex items-center justify-center gap-2 mt-8 lg:mt-2">
      <article className="w-full lg:w-1/2 py-4 p-4">
        <h2 className="font-bold text-2xl">Tourism</h2>
        <p>
          What’s a vacation in a different country if you can’t experience the
          exciting places and tourist attractions that it embodies? With
          LuxuryVacays, you don’t have to worry about this question as it is our
          utmost goal that you get to experience all the best places in your
          country of choice.
        </p>
        <Button>Book now</Button>
        <a
          href="/"
          className="text-[rgba(251,133,0,1)] inline-flex items-center mx-2 cursor-pointer mt-4 focus:outline-none focus:ring-2 focus:ring-orange-500"
          aria-label="View vacation details"
        >
          <span>Vacation details</span>
          <FaArrowRight className="ml-2" />
        </a>
      </article>
      <figure className="w-full lg:w-1/2 rounded-full bg-gradient-to-b from-white via-white to-[rgba(142,236,245)] overflow-hidden max-w-xs lg:max-w-md">
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
