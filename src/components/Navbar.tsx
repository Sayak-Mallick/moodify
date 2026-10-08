import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between gap-4 font-semibold">
      <div className="flex items-center gap-2">
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white shadow-lg shadow-black/20 transition hover:bg-black/60">
          <img className="w-4" src={assets.arrow_left} alt="Previous" />
        </button>
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white shadow-lg shadow-black/20 transition hover:bg-black/60">
          <img className="w-4" src={assets.arrow_right} alt="Next" />
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button className="hidden cursor-pointer rounded-full bg-white px-4 py-2 text-[14px] font-semibold text-black transition hover:scale-[1.02] md:block">
          Explore Premium
        </button>
        <button className="flex cursor-pointer items-center justify-center gap-2 rounded-full bg-white/6 px-3 py-2 text-[14px] font-medium text-zinc-200 transition hover:bg-white/10">
          <img className="w-4" src={assets.download_icon} alt="Download app" />
          Install App
        </button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3b82f6] text-sm font-bold text-white shadow-lg shadow-blue-500/30">
          S
        </div>
      </div>
    </div>
  );
};

export default Navbar;