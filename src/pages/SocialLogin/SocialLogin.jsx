import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const [error, setError] = useState("");
  const { googleLogin } = useContext(AuthContext);
  
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loginUser = result.user;
        navigate(from, { replace: true });
        console.log(loginUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div>
      <p className="text-red-500 text-lg my-3">{error}</p>
      <div className="divider">Or Sign In with</div>
      <div className="flex justify-center my-8">
        <FaGoogle
          onClick={handleGoogleLogin}
          className="text-red-600 text-4xl cursor-pointer"
        ></FaGoogle>
      </div>
    </div>
  );
};

export default SocialLogin;
