const SingUp = () => {
  return (
    <div className="h-screen relative">
      <div className="h-[50%] bg-[#7ED7C1]"></div>
      <div className="h-[50%] bg-[#FFF78A]"></div>
      <div className="bg-[#F9F9E0] absolute top-[260px] lg:top-[220px] md:top-[330px] md:left-[250px] left-[40px] lg:left-[600px] p-10 rounded">
        <h1 className="text-[#092635]">
          Welcome to Task<span className="text-red-500 font-semibold">-</span>
          manage<span className="text-blue-400">m</span>ent
        </h1>
        <form className="flex flex-col gap-4 mt-5">
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
          <button className="bg-[#B0926A] w-full text-white p-1 rounded ">
            Sing in
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingUp;
