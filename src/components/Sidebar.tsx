import { assets } from "../assets/assets";

const navItems = [
  { label: "Home", icon: assets.home_icon, active: true },
  { label: "Search", icon: assets.search_icon, active: false },
];

const Sidebar = () => {
  return (
    <div className="hidden h-full w-[25%] min-w-65 flex-col gap-3 p-2 text-white lg:flex">
      <div className="rounded-[26px] bg-[#121212] p-2 shadow-[0_20px_40px_rgba(0,0,0,0.32)]">
        {navItems.map(({ label, icon, active }) => (
          <button
            key={label}
            className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left transition-all duration-200 ${
              active
                ? "bg-white/10 text-white shadow-inner"
                : "text-zinc-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <img className="w-5 opacity-90" src={icon} alt={label} />
            <p className="text-[15px] font-semibold">{label}</p>
          </button>
        ))}
      </div>

      <div className="flex-1 rounded-[26px] bg-[#121212] p-3 shadow-[0_20px_45px_rgba(0,0,0,0.28)]">
        <div className="flex items-center justify-between px-2 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5">
              <img className="w-4" src={assets.stack_icon} alt="Library" />
            </div>
            <p className="text-[16px] font-semibold text-white">Your Library</p>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-8 w-8 items-center justify-center rounded-full bg-transparent text-zinc-300 transition hover:bg-white/5 hover:text-white">
              <img className="w-4" src={assets.arrow_icon} alt="Open library" />
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full bg-white/8 px-3 py-2 text-[13px] font-semibold text-white transition hover:bg-white/12">
              <img className="w-3.5" src={assets.plus_icon} alt="Create" />
              Create
            </button>
          </div>
        </div>

        <div className="mt-4 space-y-4 p-2">
          <div className="rounded-2xl bg-[#242424] p-5 shadow-inner shadow-black/30">
            <h2 className="text-[19px] font-semibold leading-snug text-white">
              Create your first playlist
            </h2>
            <p className="mt-2 text-[14px] leading-6 text-zinc-300">
              It&apos;s easy. We&apos;ll help you out.
            </p>
            <button className="mt-5 rounded-full bg-white px-4 py-2 text-[14px] font-bold text-black transition hover:scale-[1.02] hover:bg-[#f4f4f4]">
              Create Playlist
            </button>
          </div>

          <div className="rounded-2xl bg-[#242424] p-5 shadow-inner shadow-black/30">
            <h2 className="text-[19px] font-semibold leading-snug text-white">
              Let&apos;s find some podcasts to follow
            </h2>
            <p className="mt-2 text-[14px] leading-6 text-zinc-300">
              We&apos;ll keep you updated on new episodes.
            </p>
            <button className="mt-5 rounded-full bg-white px-4 py-2 text-[14px] font-bold text-black transition hover:scale-[1.02] hover:bg-[#f4f4f4]">
              Browse Podcasts
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
