import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const ToyDetails = () => {
  const allToys = useLoaderData();
  useTitle('ToyDetails')
  console.log(allToys);
  const {
    pictureURL,
    name,
    image,
    sellerEmail,
    sellerName,
    price,
    rating,
    availableQuantity,
    description,
  } = allToys;
  return (
    <div className="hero min-h-screen bg-pink-50 rounded-xl my-10 p-5">
      <div className="hero-content flex-col md:flex-row gap-10">
        <img src={pictureURL?pictureURL:image} className="w-full rounded-lg shadow-2xl" data-aos="zoom-in-down" />
        <div  data-aos="flip-left">
          <h4 className="text-2xl font-semibold">
            <span className="font-bold text-blue-500">Toy Name : </span> {name}
          </h4>
          <p className="text-lg font-medium mt-1">
            <span className="text-lg font-medium leading-7 text-blue-500">
              SellerEmail :  </span> {sellerEmail}
          </p>
          <p className="text-lg font-medium leading-7 mt-1">
            <span className="text-blue-500">SellerName : </span> {sellerName}
          </p>
          <p className="text-lg font-medium leading-7 mt-1">
            <span className="text-blue-500">Price : </span> ${price}
          </p>
          <p className="text-lg font-medium leading-7 mt-1">
            <span className="text-blue-500">Rating : </span> {rating}
          </p>
          <p className="text-lg font-medium leading-7 mt-1">
            <span className="text-blue-500">AvailableQuantity : </span> {availableQuantity}
          </p>
          <p className="text-lg font-medium leading-7 mt-1 md:max-w-4xl">
            <span className="text-blue-500">Toy Info : </span> {description}
          </p>
          <Link to='/allToys'><button className="btn btn-primary mt-5">Back To All Toy Page</button></Link>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
