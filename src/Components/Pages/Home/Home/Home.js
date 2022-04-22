import React from "react";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";
import Slider from "../Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <Services />
      <Experts />
    </div>
  );
};

export default Home;
