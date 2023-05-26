import React from "react";
import banner from "../../assets/banner1.jpg";
import banner1 from "../../assets/banner2.jpg";
import banner2 from "../../assets/banner3.jpg";
import banner3 from "../../assets/banner4.jpg";

const Banner = () => {
  return (
    <div className="carousel w-full h-fit md:h-[600px] rounded-xl mt-12">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="md:p-24 p-5" data-aos="fade-down">
            <div>
              <h1 className="text-3xl sm:text-6xl  font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Toys Buy! Today.
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Toys Info
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Toys
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="md:p-24 p-5" data-aos="fade-up-right">
            <div>
              <h1 className="text-3xl sm:text-6xl font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner2} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="md:p-24 p-5" data-aos="fade-left">
            <div>
              <h1 className="text-3xl sm:text-6xl font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner3} className="w-full" />
        <div className="absolute bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]  w-full h-full bg-opacity-90">
          <div className="md:p-24 p-5">
            <div>
              <h1 className="text-3xl sm:text-6xl font-bold text-white leading-tight max-w-md mb-5">
                Affordable Price For Car Servicing
              </h1>
              <p className="text-lg leading-7 text-white max-w-md">
                There are many variations of passages of available, but the
                majority have suffered alteration in some form
              </p>
            </div>
            <div className="mt-5">
              <button className="btn btn-error text-white mr-5">
                Discover More
              </button>
              <button className="btn btn-outline btn-primary text-white">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
