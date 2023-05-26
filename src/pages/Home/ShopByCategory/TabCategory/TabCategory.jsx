import React from "react";
import { Link } from "react-router-dom";

const TabCategory = ({ category }) => {
  const { _id, pictureURL, name, price, rating } = category;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mb-5" data-aos="zoom-in">
      <figure className="px-10 pt-10">
        <img src={pictureURL} alt="Shoes" className="rounded-xl h-[250px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Toy Name : {name}</h2>
        <p>Price : ${price}</p>
        <p>Rating : {rating}</p>
        <div className="card-actions">
          <Link to={`/toyDetails/${_id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TabCategory;
