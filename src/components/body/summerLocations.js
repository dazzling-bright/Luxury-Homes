import Button from "../button";
import Santorini from "../../images/santorini.png";
import Dubai from "../../images/dubai.png";
import Paris from "../../images/paris.png";
import BookmarkCheck from "../../images/bookmark_check.svg";
import BackgroundImage from "../../images/flight.svg";

const SummerLocations = () => {
  const summerLocationImages = [
    { name: "Santorini", image: Santorini, description: "Santorini beach" },
    { name: "Dubai", image: Dubai, description: "Dubai beach" },
    { name: "Paris", image: Paris, description: "Paris beach" },
  ];

  return (
    <div className="mt-[25rem] lg:mt-[15rem] mb-20">
      <header
        className="font-bold text-2xl text-center bg-center bg-contain bg-no-repeat py-10"
        style={{
          backgroundImage: `url(${BackgroundImage})`,
        }}
      >
        <h2 className="text-3xl">Summer Vacay Locations</h2>
        <p className="font-thin text-[0.8rem]">
          Let's give you the memorable summer you deserve
        </p>
      </header>

      {/** Card Component */}
      <main
        className="flex p-8 rounded-lg shadow-md"
        style={{
          background:
            "linear-gradient(to bottom, white, white, rgba(142, 236, 245))",
        }}
      >
        {summerLocationImages.map((location, index) => (
          <article
            key={index}
            className="flex flex-col mx-4 rounded-lg overflow-hidden bg-white shadow-lg"
          >
            <figure>
              <img
                src={location.image}
                alt={location.description}
                className="w-full h-full object-cover rounded-t-lg"
              />
            </figure>
            <div className="p-4 flex flex-col gap-4">
              <h3 className="text-lg font-semibold flex justify-between items-center">
                <div>
                  {location.name}{" "}
                  <span style={{ display: "block" }} className="font-thin">
                    $2000
                  </span>
                </div>
                <img src={BookmarkCheck} alt="Bookmark" className="ml-2" />
              </h3>
              <p className="text-gray-600 flex justify-between items-center flex-wrap">
                <span>Booking ID: 24863dr</span>
                <Button>Book now</Button>
              </p>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default SummerLocations;
