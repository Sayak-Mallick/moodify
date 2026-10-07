import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const Display = () => {
  return (
    <div className="w-full m-2 px-5 py-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Display;
