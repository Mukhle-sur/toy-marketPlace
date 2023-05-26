import React, { useEffect, useState } from "react";
import AllToysRow from "./AllToysRow";
import useTitle from "../../hooks/useTitle";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchText, setSearchText] = useState("");
  useTitle("AllToys");

  useEffect(() => {
    fetch("https://assignment-11-server-side-dun.vercel.app/allToys")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  const handleSearchToyName = () => {
    fetch(
      `https://assignment-11-server-side-dun.vercel.app/getToyNameByText/${searchText}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAllToys(data);
      });
  };

  const handleAscending = () => {
    fetch("https://assignment-11-server-side-dun.vercel.app/shortData")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };
  const handleDescending = () => {
    fetch("https://assignment-11-server-side-dun.vercel.app/shortLong")
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  };
  return (
    <div className="overflow-x-auto w-full my-12">
      <div className="flex justify-between items-center mb-10">
        <div className=" mt-10">
          <button className="btn" onClick={handleAscending}>
            Ascending
          </button>
          <button className="btn ml-4" onClick={handleDescending}>
            Descending
          </button>
        </div>
        <div className="form-control">
          <label className="text-center mb-5 font-bold">
            Search By Toy Name
          </label>
          <div className="input-group">
            <input
              onChange={(e) => setSearchText(e.target.value)}
              type="text"
              placeholder="Search…"
              className="input input-bordered "
            />
            <button className="btn btn-square" onClick={handleSearchToyName}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <table className="table w-full">
          <thead>
            <tr>
              <th>Toy image</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toys) => (
              <AllToysRow key={toys._id} toys={toys}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
