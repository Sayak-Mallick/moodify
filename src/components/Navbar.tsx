import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center font-semibold">
      <div className="flex items-center gap-2">
        <img className="w-7 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_left} alt="" />
        <img className="w-7 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-white text-black text-[15px] font-medium px-4 py-1.5 rounded-2xl hidden md:block cursor-pointer">Explore Premium</button>
        <button className="flex items-center justify-center gap-2  text-gray-400 font-medium px-4 py-1.5 rounded-2xl cursor-pointer">
          <img className="w-5" src={assets.download_icon} alt="download app" />
          Install App
        </button>
        <div className="bg-blue-400 text-white w-7 h-7 rounded-full flex items-center justify-center">S</div>
      </div>
    </div>
  );
};

export default Navbar;