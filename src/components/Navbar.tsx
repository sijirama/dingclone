import React from "react";
import {AiOutlineLock , AiOutlineMenu , AiOutlineClose} from "react-icons/ai"

function Navbar() {

  const [toggle , setToggle] = React.useState(false)

  const handletoggle = () => {
    setToggle((prev) => !prev)
  }
  return (
    <div className="bg-white border-b w-full h-20">
      <div className="max-w-[600px] md:max-w-[1300px] mx-auto h-full flex justify-between items-center">

        <div className="flex items-center justify-center">
          <p className=" my-auto mx-2 w-full h-full md:mx-0 font-bold text-4xl md:text-4xl lg:text-5xl  -tracking-widest md:tracking-[-0.3rem]">
            xerox
          </p>
        </div>

        <div className=" hidden md:flex items-center">
          <ul className="flex gap-4">
            <li className="text-base cursor-pointer font-semibold hover:text-[#20B486]">Home</li>
            <li className="text-base cursor-pointer font-semibold hover:text-[#20B486]">About</li>
            <li className="text-base cursor-pointer font-semibold hover:text-[#20B486]">Support</li>
            <li className="text-base cursor-pointer font-semibold hover:text-[#20B486]">Platform</li>
            <li className="text-base cursor-pointer font-semibold hover:text-[#20B486]">Pricing</li>
          </ul>
        </div>

        <div className="hidden md:flex gap-4 justify-between ">
          <button className="flex items-center gap-2 bg-transparent px-5 opacity-80 text-base text-center justify-center">
            <AiOutlineLock size={22} /> Login
          </button>
          <button className="bg-[#20B486] text-white font-bold px-6 py-1 rounded-md"> Sign up For Free</button>
        </div>

        <div className=" flex items-center justify-center md:hidden ">
          {toggle ? (
            <AiOutlineClose onClick={handletoggle} className="mx-4 cursor-pointer" size={24} />
          ) : (
            <AiOutlineMenu onClick={handletoggle} className="mx-4 cursor-pointer" size={24}  />
          )}
        </div>

      </div>

      <div className={toggle ? ("absolute bg-white z-20 p-4 px-4 w-full md:hidden") : ("hidden")} >
          <ul className="">
            <li className="text-base p-2 hover:bg-gray-300 rounded-md cursor-pointer ">Home</li>
            <li className="text-base p-2 hover:bg-gray-300 rounded-md cursor-pointer ">About</li>
            <li className="text-base p-2 hover:bg-gray-300 rounded-md cursor-pointer ">Support</li>
            <li className="text-base p-2 hover:bg-gray-300 rounded-md cursor-pointer ">Platform</li>
            <li className="text-base p-2 hover:bg-gray-300 rounded-md cursor-pointer ">Pricing</li>
            <div className="flex gap-2 justify-between flex-col ">
              <button className="border border-[#20B486] rounded-md py-1 mt-3 flex items-center gap-2 bg-transparent px-5 opacity-80 text-base text-center justify-center">
                <AiOutlineLock size={22} /> Login
              </button>
              <button className="bg-[#20B486] text-white font-bold px-6 py-2 rounded-md"> Sign up For Free</button>
            </div>
          </ul>             
      </div>

    </div>
  );
}

export default Navbar;
