import React, { useEffect, useState } from "react";
import feature from "../../assets/telemarketer.png";
import Marquee from "react-fast-marquee";
import ShowFeature from "./showFeature";


const OurFeature = () => {
  const [showAllToys, setShowAllToys] = useState([]);

  useEffect(() => {
    fetch("https://assignment-11-server-side-dun.vercel.app/allToy")
      .then((res) => res.json())
      .then((data) => setShowAllToys(data));
  }, []);

  return (
    <div className="my-10 p-10">
      <div className="text-center" data-aos="fade-down-right">
        <h2 className="text-4xl font-bold mb-3">Action Toys All Product Hare</h2>
        <p className="text-lg font-normal sm:max-w-[700px] mx-auto">
          These action figures boast a cutting-edge articulation system,
          allowing you to pose them in dynamic and lifelike positions. Whether
          it's an intense battle stance, a graceful aerial maneuver, or a
          powerful martial arts move, these figures can replicate it with
          remarkable precision.
        </p>
      </div>
      <div className="grid gap-5">
        <Marquee pauseOnHover={true} speed={120}>
          {showAllToys.map((allToy) => (
            <ShowFeature key={allToy._id} allToy={allToy}></ShowFeature>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default OurFeature;
