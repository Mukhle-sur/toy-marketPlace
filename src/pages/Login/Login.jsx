import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";
  console.log(location);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        navigate(from, { replace: true });
        console.log(loginUser);
        form.reset();
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="border p-16 rounded-md w-1/2 mx-auto my-12">
      <h2 className="text-4xl font-semibold text-center mb-11">Login Please</h2>
      <form onSubmit={handleLogin}>
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-6 ">
          <input
            type="submit"
            value="Sign In"
            className="btn btn-error text-white"
          />
        </div>
        <p className="text-red-500 text-lg my-3">{error}</p>
      </form>
      <div>
        <SocialLogin></SocialLogin>
        <p className="text-center text-[#737373] text-lg font-semibold mt-3">
          Do Not Have an account?
          <Link to="/signUp" className="text-[#FF3811]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
