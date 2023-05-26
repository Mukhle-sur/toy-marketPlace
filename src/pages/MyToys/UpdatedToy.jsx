import React from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";
import { useLocation, useNavigate } from "react-router-dom";

const UpdatedToy = () => {
  useTitle("UpdateToy");
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/myToy";
  console.log(location);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const price = parseFloat(form.price.value);
    const quantity = parseFloat(form.quantity.value);
    const massage = form.massage.value;
    const updatedToy = {
      price,
      quantity,
      massage,
    };
    console.log(updatedToy);
    fetch(`https://assignment-11-server-side-dun.vercel.app/myToys/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toy Updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        navigate(from, { replace: true });
      });
  };
  return (
    <div className="bg-gray-50 p-24 rounded-xl my-10">
      <h1 className="text-center text-4xl mb-10 text-bold">Updated A Toy</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <input
                type="number"
                placeholder="Price"
                name="price"
                required
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Available quantity"
                name="quantity"
                className="input input-bordered"
                required
              />
            </div>
          </div>
          <div className="form-control mt-5">
            <textarea
              name="massage"
              id=""
              cols="30"
              rows="10"
              required
              placeholder="Detail description"
              className="input input-bordered pt-3 h-[250px] resize-none"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value=" Updated A Toy"
              className="btn btn-error text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedToy;
