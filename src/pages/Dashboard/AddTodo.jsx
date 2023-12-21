import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Firebase/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddTodo = () => {
  const { user } = useContext(AuthContext);
  const [priority, setPriority] = useState("low");
  const userEmail = user?.email;
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    const todoPriority = (data.priority = priority);
    const addUserEmail = (data.email = userEmail);
    const role = (data.role = "created");
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER}/addTodo`,
        data
      );
      if (res.status == 200) {
        toast("Todo Add Successful");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" bg-[#EEF296] h-screen flex items-center justify-center">
      <ToastContainer></ToastContainer>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border w-[50%] bg-white flex flex-col gap-3 p-5 rounded-md"
      >
        <span className="flex flex-col gap-2">
          <label htmlFor="job">Job</label>
          <input
            className="border rounded-md p-2 border-black"
            type="text"
            name="job"
            id="job"
            placeholder="job"
            {...register("job")}
            required
          />
        </span>
        <span className="flex flex-col gap-2">
          <label htmlFor="title">Title</label>
          <input
            className="border rounded-md p-2 border-black"
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            {...register("title")}
            required
          />
        </span>

        <span className="flex flex-col gap-2">
          <label htmlFor="descriptions">Descriptions</label>
          <input
            className="border rounded-md p-2 border-black"
            type="text"
            name="descriptions"
            id="descriptions"
            placeholder="Descriptions"
            {...register("descriptions")}
            required
          />
        </span>
        <span className="flex flex-col gap-2">
          <label htmlFor="date">Deadline</label>
          <input
            className="border rounded-md p-2 border-black"
            type="date"
            name="date"
            id="date"
            placeholder="Deadline"
            {...register("date")}
            required
          />
        </span>
        <span className="flex flex-col gap-2">
          <label htmlFor="priority">priority</label>
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            name=""
            id="priority"
            className="border border-black p-2 rounded-md"
          >
            <option value="low">Low</option>
            <option value="moderate">Moderate</option>
            <option value="high">High</option>
          </select>
        </span>
        {loading ? (
          <h1 className="text-center text-blue-400">Loading..</h1>
        ) : (
          <button className="w-full bg-[#092635] text-white p-1 rounded-sm">
            Add TODO
          </button>
        )}
      </form>
    </div>
  );
};

export default AddTodo;
