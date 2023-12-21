import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Firebase/AuthProvider";
import { updateProfile } from "firebase/auth";
import axios from "axios";
const SingUp = () => {
  const { createUser, auth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, seTError] = useState("");
  const navigate = useNavigate();

  const singUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const name = e.target.name.value;
    const enteredEmail = e.target.email.value;
    const email = enteredEmail.toLowerCase();
    const image = e.target.image.value;
    const job = e.target.job.value;
    const password = e.target.password.value;

    try {
      const crateRes = await createUser(email, password);
      const updateRes = await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: image,
      });
      const userData = {
        email,
        name,
        job,
      };
      const postUser = await axios.post(
        `${import.meta.env.VITE_SERVER}/postUser`,
        userData
      );
      setLoading(false);
      navigate("/");
      seTError("");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        seTError("Email is already in use.");
      }
      setLoading(false);
    }
  };
  return (
    <div className="h-screen relative">
      <div className="h-[50%] bg-[#7ED7C1]"></div>
      <div className="h-[50%] bg-[#FFF78A]"></div>
      <div className="bg-[#F9F9E0] absolute top-[260px] lg:top-[160px] md:top-[330px] md:left-[250px] left-[40px] lg:left-[600px] p-10 rounded">
        <h1 className="text-[#092635]">
          Welcome to Task<span className="text-red-500 font-semibold">-</span>
          manage<span className="text-blue-400">m</span>ent
        </h1>
        <form onSubmit={singUp} className="flex flex-col gap-4 mt-5">
          <input
            className="border p-1 rounded border-gray-500"
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />
          <input
            className="border p-1 rounded border-gray-500"
            type="text"
            name="image"
            placeholder="Image Url"
            required
          />

          <input
            className="border p-1 rounded border-gray-500"
            type="text"
            name="job"
            placeholder="Your job"
            required
          />
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
            <h1 className="text-blue-600 text-center text-xl ">Loading...</h1>
          ) : (
            <button className="bg-[#B0926A] w-full text-white p-1 rounded ">
              Sing Up
            </button>
          )}
        </form>
        <h1>{error}</h1>
        <div className="">
          Already have an account ? <Link to={"/login"}>sing In</Link>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
