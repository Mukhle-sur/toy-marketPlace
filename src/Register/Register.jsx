import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../pages/SocialLogin/SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  console.log(location)

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const signUpUser = result.user;
        navigate(from, { replace: true });
        console.log(signUpUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="border p-16 rounded-md w-1/2 mx-auto my-12">
      <h2 className="text-4xl font-semibold text-center mb-11">
        Register Please!
      </h2>
      <form onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="url"
            placeholder="Photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            name="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6 ">
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-error text-white"
          />
        </div>
        <p className="text-red-500 text-lg my-3">{error}</p>
      </form>
      <div>
        <SocialLogin></SocialLogin>
        <p className="text-center text-[#737373] text-lg font-semibold mt-3">
          Already have an account?
          <Link to="/login" className="text-[#FF3811]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
