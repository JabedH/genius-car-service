import React from "react";
import expert1 from "../../../../images/experts/expert-1.jpg";
import expert2 from "../../../../images/experts/expert-2.jpg";
import expert3 from "../../../../images/experts/expert-3.jpg";
import expert4 from "../../../../images/experts/expert-4.jpg";
import expert5 from "../../../../images/experts/expert-5.jpg";
import expert6 from "../../../../images/experts/expert-6.png";
import Expert from "../Expert/Expert";

const exoerts = [
  { id: 1, name: "will smith", img: expert1 },
  { id: 2, name: "jon smith", img: expert2 },
  { id: 3, name: "ton smith", img: expert3 },
  { id: 4, name: "kom smith", img: expert4 },
  { id: 5, name: "con smith", img: expert5 },
  { id: 6, name: "lon smith", img: expert6 },
];
const Experts = () => {
  return (
    <div id="experts" className="container">
      <h1 className="text-primary text-center">Our Experts</h1>
      <div className="row ">
        {exoerts.map((expert) => (
          <Expert expert={expert} key={expert.id} />
        ))}
      </div>
    </div>
  );
};

export default Experts;
