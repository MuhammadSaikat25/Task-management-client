import img from "../../assets/banner.jpg";
const Header = () => {
  return (
    <div className="relative mt-11 md:mt-11 lg:mt-0">
      <img className="lg:h-[600px] w-full object-fill" src={img} alt="" />
      <button className="bg-[#363062] text-white p-1 rounded-sm font-semibold absolute top-[80px] left-[150px] md:top-[230px] md:left-[370px] lg:left-[700px] lg:top-[300px]">
        Let’s Explore
      </button>
    </div>
  );
};

export default Header;
