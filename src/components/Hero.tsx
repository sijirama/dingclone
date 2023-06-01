
import React from 'react'

function Hero() {
  return (
    <main className="w-full bg-white py-12 md:py-24 z-10">
      <section className='max-w-[1300px] mx-auto grid md:grid-cols-2'>

          <div className=''>
            <p className='text-center md:text-left text-lg md:text-xl lg::text-2xl text-[#20B486] font-semibold'>START TO SUCCESS</p>
            <h1 className='text-center md:text-left font-semibold text-5xl md:text-6xl lg:text-7xl '>Access to over 5000+ Fucks given from people all over Nigeria</h1>
            <p className='text-center md:text-left text-lg text-gray-600'>Various version have evolved all over the years, sometimes by acident, sometimes by people finding out.</p>
            <form className='p-4  shadow-lg rounded-md '>
              <input type='text' 
                      placeholder='Do you wanna find out today?'
                      className='bg-white w-2/3 text-gray-800 focus:outline-none active:border-none ' />
            </form>
          </div>

          <div></div>
      </section>
    </main>
  )
}

export default Hero
