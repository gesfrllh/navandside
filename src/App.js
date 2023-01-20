import Content from "./components/Content";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="flex border-2 gap-8 h-full">
        <div className=" w-52">
          
      <Sidebar className='w-96'/>
        </div>
      <Content />
      </div>
    </div>
  );
}

export default App;
