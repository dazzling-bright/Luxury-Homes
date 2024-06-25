import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SaraBrent from "../../images/SaraBrent.png";
import SimoneOlufemi from "../../images/SimoneOlufemi.svg";
import CraigSimon from "../../images/CraigSimon.png";

const reviews = [
  {
    imgSrc: SaraBrent,
    imgAlt: "Sara Brent passport",
    name: "Sara Brent",
    review:
      "I used LuxuryVacays for the first time for my holiday vacation and it was the best decision I ever made.",
  },
  {
    imgSrc: SimoneOlufemi,
    imgAlt: "Simone Olufemi passport",
    name: "Simone Olufemi",
    review:
      "With LuxuryVacays, you can totally take their word for it. They give you premium vacation experience that they promise to give.",
  },
  {
    imgSrc: CraigSimon,
    imgAlt: "Craig Simon passport",
    name: "Craig Simon",
    review:
      "LuxuryVacays literally leaves you positively shocked every single day of the trip. They deserve all the stars.",
  },
];

const ReviewSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    swipeToSlide: true,
  };

  return (
    <section>
      <header className="text-center">
        <h3 className="font-bold text-2xl mb-2">See our Reviews</h3>
        <p>See what our customers have to say about us</p>
      </header>
      <div
        className="w-[80%] rounded-3xl mx-auto mb-8 mt-4 p-8"
        style={{
          background:
            "linear-gradient(to bottom, white, white, rgba(142, 236, 245))",
        }}
      >
        <Slider {...settings}>
          {reviews.map(({ imgSrc, imgAlt, name, review }, index) => (
            <article key={index} className="carousel-item">
              <div
                className="min-h-[300px] justify-evenly m-8 flex flex-col items-center p-4 gap-2 border border-solid rounded-2xl bg-white text-center"
                style={{
                  boxShadow: "0 0 2px 5px rgba(254, 214, 170, 1)",
                }}
              >
                <figure>
                  <img className="w-10 h-10" src={imgSrc} alt={imgAlt} />
                </figure>
                <p className="font-bold">{name}</p>
                <p>{review}</p>
              </div>
            </article>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ReviewSection;
