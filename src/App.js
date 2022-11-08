import './App.css';
import Filters from './Components/Filters';
import Image from './Components/Image';
import Navbar from './Components/Navbar';
import RightContent from './Components/Content/RightContent';

function App() {
  return (
    <div className=" w-full  ">
      <div className="h-[10vh] bg-white ">
        <Navbar/>
      </div>
      <div className="w-full h-[90vh] flex md:flex-row flex-col gap-3  p-5">
        <div className=" md:h-full h-[20%] md:w-[30%] w-full bg-trasparent md:order-none order-2 rounded-lg">
          <Filters/>
        </div>


        <div className="md:h-full h-[70%] md:w-[70%] w-full bg-transparent md:order-none order-1">
          <div className="h-[90%]">
            <Image/>
          </div>
          <div className="h-[9%] mt-1 backdrop-blur-sm bg-white rounded-lg">
            <RightContent/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
