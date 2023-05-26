import React from "react";
import { Link } from "react-router-dom";

const Toys = ({ toy, handleDelete }) => {
  const { _id, name, image, category, sellerName, price, quantity } = toy;
  return (
    <tr>
      <th>
        <button className="btn btn-circle" onClick={() => handleDelete(_id)}>
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-24 h-24">
              <img
                src={image}
                alt="Avatar Tailwind CSS Component"
                className="w-24"
              />
            </div>
          </div>
        </div>
      </td>
      <td>{sellerName}</td>
      <td>{name}</td>
      <td>{category}</td>
      <td>${price}</td>
      <td className="text-center">{quantity} Item</td>
      <th>
        <Link to={`/updatedToy/${_id}`}>
          <button className="btn btn-ghost btn-xs">Update</button>
        </Link>
      </th>
    </tr>
  );
};

export default Toys;
