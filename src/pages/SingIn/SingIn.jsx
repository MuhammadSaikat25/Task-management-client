import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";

const SingIn = () => {
  const { login } = useContext(AuthContext);
  const [error, seTError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const singIn = async (e) => {
    e.preventDefault();
    setLoading(true);
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await login(email, password);
      setLoading(false)
      seTError("");
      navigate("/");
    } catch (error) {
      setLoading(false);
      if (error.code === "auth/invalid-login-credentials") {
        seTError("invalid-login-credentials");
      }
    }
  
  };
  return (
    <div>
      <div className="h-screen relative">
        <div className="h-[50%] bg-[#FFB534]"></div>
        <div className="h-[50%] bg-[#FFF78A]"></div>
        <div className="bg-[#FDF7E4] absolute top-[260px] lg:top-[220px] md:top-[330px] md:left-[250px] left-[40px] lg:left-[600px] p-10 rounded">
          <h1 className="text-[#092635]">
            Welcome to Task<span className="text-red-500 font-semibold">-</span>
            manage<span className="text-blue-400">m</span>ent
          </h1>
          <form onSubmit={singIn} className="flex flex-col gap-4 mt-5">
            <input
              className="border p-1 rounded border-gray-500"
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <input
              className="border p-1 rounded border-gray-500"
              type="password"
              name="password"
              placeholder="Your Password"
              required
            />
            {loading ? (
              <h1>loading...</h1>
            ) : (
              <button className="bg-[#B0926A] w-full text-white p-1 rounded ">
                Sing in
              </button>
            )}
          </form>
          <h1>{error}</h1>
          <div className="">
            <span>
              Don't have an account ? <Link to={"/singUp"}>sing Up</Link>
            </span>
            {/* <button>Google</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
