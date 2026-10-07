import Sidebar from "./components/Sidebar";

const App = () => {
  return (
    <div className="h-screen bg-black overflow-x-hidden">
      <div className="h-[90%] flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
