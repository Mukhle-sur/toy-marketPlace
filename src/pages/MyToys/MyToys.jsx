import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Toys from "./Toys";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const navigate = useNavigate();
  useTitle("MyToys");
  // const [Ascending]

  const url = `https://assignment-11-server-side-dun.vercel.app/myToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setMyToys(data);
        } else {
          navigate("/");
        }
      })
      .catch((error) => console.log(error));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be permanently delete this Toy!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assignment-11-server-side-dun.vercel.app/myToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toy has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="overflow-x-auto w-full my-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Delete Toy</th>
              <th>Toy image</th>
              <th>Seller Name</th>
              <th>Toy Name</th>
              <th>Sub-category</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Update Toy</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <Toys key={toy._id} toy={toy} handleDelete={handleDelete}></Toys>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
