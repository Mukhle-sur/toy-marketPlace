import React from "react";
import profile from "../../assets/profile1.jpg";
import profile2 from "../../assets/profile2.jpg";
import profile3 from "../../assets/profile3.jpg";

const HappyClients = () => {
  return (
    <div className="my-12">
      <h1 className="text-center font-bold text-5xl mb-10">
        Our Shop Happy Clients Review
      </h1>
      <div className="grid md:grid-cols-3 gap-5" data-aos="zoom-in-up">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profile} alt="Shoes" className="rounded-xl h-52" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name : Guru Rudro</h2>
            <h4>From : London</h4>
            <p>
              Super Heroes sets Ultimate Battle Set is a prime example. This set
              features various characters from the Marvel Universe, and allows
              you to Infinity War. The high-quality bricks and detailed make it
              a fantastic addition to any LEGO collection.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in-up">
          <figure className="px-10 pt-10">
            <img src={profile2} alt="Shoes" className="rounded-xl h-52" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Name : Hero Alom</h2>
            <h4>From : Bangladesh</h4>
            <p>
              Super Heroes sets Ultimate Battle Set is a prime example. This set
              features various characters from the Marvel Universe, and allows
              you to Infinity War. The high-quality bricks and detailed make it
              a fantastic addition to any LEGO collection.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={profile3} alt="Shoes" className="rounded-xl h-52" />
          </figure>
          <div
            className="card-body items-center text-center"
            data-aos="zoom-in-down"
          >
            <h2 className="card-title">Name : Jhankar Vai</h2>
            <h4>From : America</h4>
            <p>
              Super Heroes sets Ultimate Battle Set is a prime example. This set
              features various characters from the Marvel Universe, and allows
              you to Infinity War. The high-quality bricks and detailed make it
              a fantastic addition to any LEGO collection.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HappyClients;
