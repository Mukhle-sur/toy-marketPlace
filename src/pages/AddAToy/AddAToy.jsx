import React, { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);
  useTitle("AddAToy");

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const seller = form.seller.value;
    const category = form.category.value;
    const email = form.email.value;
    const picture = form.picture.value;
    const rating = form.rating.value;
    const price = parseFloat(form.price.value);
    const quantity = form.quantity.value;
    const massage = form.massage.value;
    const addAToyInfo = {
      name: name,
      sellerName: seller,
      category: category,
      email: email,
      massage: massage,
      image: picture,
      rating: rating,
      price: price,
      quantity: quantity,
    };
    console.log(addAToyInfo);
    fetch("https://assignment-11-server-side-dun.vercel.app/allToys", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(addAToyInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Your Toy Is Added",
            text: "Do you want to continue",
            icon: "success",
            confirmButtonText: "Ok",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="bg-gray-50 p-24 rounded-xl my-10">
      <h1 className="text-center text-4xl mb-10 text-bold">Add A Toy!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="form-control">
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Seller name"
                name="seller"
                defaultValue={user?.displayName}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Seller email"
                name="email"
                defaultValue={user?.email}
                readOnly
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Sub-category"
                name="category"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="url"
                placeholder="Picture URL"
                name="picture"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="number"
                placeholder="Price"
                name="price"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <input
                type="text"
                placeholder="Rating"
                name="rating"
                className="input input-bordered"
                required
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
              placeholder="Detail description"
              required
              className="input input-bordered pt-3 h-[250px] resize-none"
            ></textarea>
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              value=" Add A Toy"
              className="btn btn-error text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAToy;
