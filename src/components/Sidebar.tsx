import { assets } from "../assets/assets";

const Sidebar = () => {
  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.home_icon} alt="home" />
          <p className="font-bold">Home</p>
        </div>
        <div className="flex items-center gap-3 pl-8 cursor-pointer">
          <img className="w-6" src={assets.search_icon} alt="search" />
          <p className="font-bold">Search</p>
        </div>
      </div>
      <div className="bg-[#121212] h-[85%] rounded">
        <div className="flex items-center p-4 justify-between">
          <div className="flex items-center gap-3">
            {/*<img className="w-8" src={assets.stack_icon} alt="Playlist" />*/}
            <p className="font-semibold text-[16px]">Your Library</p>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="arrow" />
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-2xl justify-between text-[14px] font-semibold bg-[#242424] text-white">
              <img className="w-4" src={assets.plus_icon} alt="plus" />
              Create
            </button>
          </div>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
          <h1>Create your first playlist</h1>
          <p className="font-light">it's easy we will help you out</p>
          <button className="mt-4 px-4 py-1.5 bg-white text-[14px] text-black font-bold rounded-full">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
          <h1>Lets find some podcasts to follow</h1>
          <p className="font-light">we will keep you updated on new episodes</p>
          <button className="mt-4 px-4 py-1.5 bg-white text-[14px] text-black font-bold rounded-full">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
