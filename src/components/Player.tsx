import { assets, songsData } from "../assets/assets";

const Player = () => {
  return (
    <div className="flex h-[10%] min-h-[84px] items-center justify-between gap-4 bg-black px-4 text-white">
      <div className="hidden min-w-[220px] items-center gap-3 lg:flex">
        <img className="h-12 w-12 rounded-lg object-cover shadow-lg shadow-black/30" src={songsData[0].image} alt={songsData[0].name} />
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-white">{songsData[0].name}</p>
          <p className="truncate text-[11px] text-zinc-400">{songsData[0].desc.slice(0, 18)}</p>
        </div>
        <button className="ml-1 rounded-full p-2 text-zinc-300 transition hover:bg-white/5 hover:text-white">
          <img className="w-4" src={assets.like_icon} alt="Like" />
        </button>
      </div>

      <div className="m-auto flex w-full max-w-180 flex-col items-center gap-2">
        <div className="flex items-center gap-5 text-zinc-300">
          <button className="rounded-full p-1.5 transition hover:bg-white/5 hover:text-white">
            <img src={assets.shuffle_icon} className="w-4" alt="Shuffle" />
          </button>
          <button className="rounded-full p-1.5 transition hover:bg-white/5 hover:text-white">
            <img src={assets.prev_icon} className="w-4" alt="Previous" />
          </button>
          <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-black shadow-lg shadow-white/20 transition hover:scale-[1.03]">
            <img src={assets.play_icon} className="w-4" alt="Play" />
          </button>
          <button className="rounded-full p-1.5 transition hover:bg-white/5 hover:text-white">
            <img src={assets.next_icon} className="w-4" alt="Next" />
          </button>
          <button className="rounded-full p-1.5 transition hover:bg-white/5 hover:text-white">
            <img src={assets.loop_icon} className="w-4" alt="Loop" />
          </button>
        </div>

        <div className="flex w-full items-center gap-3">
          <span className="w-10 text-right text-[11px] text-zinc-400">1:06</span>
          <div className="h-1.5 flex-1 cursor-pointer rounded-full bg-white/10">
            <div className="h-full w-[38%] rounded-full bg-[#1ed760]" />
          </div>
          <span className="w-10 text-left text-[11px] text-zinc-400">3:50</span>
        </div>
      </div>

      <div className="hidden items-center gap-2 opacity-80 xl:flex">
        <button className="rounded-full p-1.5 transition hover:bg-white/5">
          <img className="w-4" src={assets.plays_icon} alt="Queue" />
        </button>
        <button className="rounded-full p-1.5 transition hover:bg-white/5">
          <img className="w-4" src={assets.mic_icon} alt="Microphone" />
        </button>
        <button className="rounded-full p-1.5 transition hover:bg-white/5">
          <img className="w-4" src={assets.queue_icon} alt="Queue" />
        </button>
        <button className="rounded-full p-1.5 transition hover:bg-white/5">
          <img className="w-4" src={assets.speaker_icon} alt="Speaker" />
        </button>
        <button className="rounded-full p-1.5 transition hover:bg-white/5">
          <img className="w-4" src={assets.volume_icon} alt="Volume" />
        </button>
        <div className="h-1.5 w-20 rounded-full bg-white/10">
          <div className="h-full w-2/3 rounded-full bg-white" />
        </div>
        <button className="rounded-full p-1.5 transition hover:bg-white/5">
          <img className="w-4" src={assets.mini_player_icon} alt="Mini player" />
        </button>
        <button className="rounded-full p-1.5 transition hover:bg-white/5">
          <img className="w-4" src={assets.zoom_icon} alt="Zoom" />
        </button>
      </div>
    </div>
  );
};

export default Player;
