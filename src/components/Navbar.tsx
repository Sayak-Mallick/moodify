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
        <button className="bg-black text-white text-[15px] font-medium px-4 py-1.5 rounded-2xl hidden md:block cursor-pointer">Install App</button>
        <div className="bg-blue-400 text-white w-7 h-7 rounded-full flex items-center justify-between">S</div>
      </div>
    </div>
  );
};

export default Navbar;