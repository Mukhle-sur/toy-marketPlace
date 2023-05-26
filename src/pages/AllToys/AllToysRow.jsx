import React from "react";
import { Link } from "react-router-dom";

const AllToysRow = ({ toys }) => {
  const {
    _id,
    name,
    image,
    pictureURL,
    subCategory,
    sellerName,
    price,
    availableQuantity,
  } = toys;
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src={pictureURL ? pictureURL : image}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
        </div>
      </td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{subCategory}</td>
      <td>${price}</td>
      <td>Quantity : {availableQuantity}</td>
      <th>
        <Link to={`/toyDetails/${_id}`}>
          <button className="btn btn-ghost btn-xs">View Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default AllToysRow;
