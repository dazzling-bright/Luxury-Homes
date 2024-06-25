import React from "react";
import Button from "../button";

const HeroButtons = () => {
  return (
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
  );
};

export default HeroButtons;
