import React from 'react'
import {BiSearchAlt2} from "react-icons/bi"

function Hero() {

  const handleSubmit = (e:any) => {
    e.preventDefault();
    alert("Submitted")
  }

  return (
    <main className="w-full bg-white py-10 md:py-18 z-10">
      <section className='max-w-[430px] md:max-w-[1300px] mx-auto grid md:grid-cols-2'>

          <div className='flex flex-col justify-start gap-1'>
            <p className='py-1 text-center md:text-left text-lg md:text-xl lg::text-2xl text-[#20B486] font-semibold'>START TO SUCCESS</p>
            <h1 className='py-4 text-center md:text-left font-semibold text-5xl md:text-6xl lg:text-7xl '>Access to over 5000+ Fucks given from people all over Nigeria</h1>
            <p className='py-3 text-center md:text-left text-lg text-gray-600'>Various version have evolved all over the years, sometimes by acident, sometimes by people finding out.</p>
            <form onSubmit={handleSubmit} className='max-w-[700px] mx-auto md:mx-0 p-4 w-2/3 md:w-2/3 shadow-lg rounded-md flex justify-between items-center '>
              <input type='text' 
                      placeholder='Do you wanna find out today?'
                      className='bg-white w-2/3 text-gray-500 focus:outline-none active:border-none' />
              <BiSearchAlt2 onClick={handleSubmit} size={24} className="text-gray-400 cursor-pointer" />
            </form>
          </div>

          <div></div>
      </section>
    </main>
  )
}

export default Hero
