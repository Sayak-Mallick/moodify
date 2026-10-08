import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const Display = () => {
  return (
    <div className="m-2 w-full overflow-auto rounded-[28px] bg-[#121212] px-5 py-4 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] lg:ml-0 lg:w-[75%]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Display;
