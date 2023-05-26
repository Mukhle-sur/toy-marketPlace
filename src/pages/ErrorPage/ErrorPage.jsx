import React from "react";
import image from "../../assets/404-page.jpg";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center">
      <img src={image} alt="" className="mx-auto" />

      <Link to="/">
        <button class="btn btn-active btn-secondary my-8 text-center">Back Home Page</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
