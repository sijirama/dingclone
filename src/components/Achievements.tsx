import {FaGraduationCap , FaVideo} from "react-icons/fa"
import {MdPeopleAlt} from "react-icons/md"

export default function Achievements() {
  return (
    <main className="w-full bg-white py-10 md:py-24 z-10">
      <section className='max-w-[430px] md:max-w-[1300px] mx-auto grid lg:grid-cols-2'>

          <div className='flex flex-col justify-center lg:justify-start gap-1'>
            <h1 className='font-geologica py-2 text-center md:text-left font-semibold text-2xl md:text-3xl lg:text-4xl '>Our <span className="text-primary">Achievements</span></h1>
            <p className='font-rubik py-3 text-center md:text-left text-base md:text-lg text-gray-600'>Various version have evolved all over the years, sometimes by acident, sometimes by people finding out.</p>

            <div className="grid lg:grid-cols-2 gap- md:gap-12 ">
                <div className="py-4 rounded-lg  grid grid-cols-2  items-center ">
                    <div className="bg-[#E9F8F3] border-primary p-2 rounded-xl m-auto">
                        <FaGraduationCap className="text-primary" size={60} />
                    </div>
                    <div className="flex flex-col items-start text-center">
                        <p className="font-semibold font-rubik  text-xl md:text-2xl lg:text-3xl ">300</p>
                        <p className="font-light font-rubik text-sm md:text-base">Instructors</p>
                    </div>
                </div>
                <div className="py-4 rounded-lg  grid grid-cols-2  items-center ">
                    <div className="bg-[#FFFAF5] border-primary p-2 rounded-xl m-auto">
                        <FaVideo className ="text-[#FFC27A]" size={60} />
                    </div>
                    <div className="flex flex-col items-start text-center">
                        <p className="font-semibold font-rubik  text-xl md:text-2xl lg:text-3xl ">10,000+</p>
                        <p className="font-light font-rubik text-sm md:text-base">video</p>
                    </div>
                </div>
                <div className="py-4 rounded-lg  grid grid-cols-2  items-center ">
                    <div className="bg-[#FFEEF0] border-primary p-2 rounded-xl m-auto">
                        <FaGraduationCap className="text-[#ED4459]" size={60} />
                    </div>
                    <div className="flex flex-col items-start text-center">
                        <p className="font-semibold font-rubik  text-xl md:text-2xl lg:text-3xl ">20,000+</p>
                        <p className="font-light font-rubik text-sm md:text-base">students</p>
                    </div>
                </div>
                <div className="py-4 rounded-lg  grid grid-cols-2  items-center ">
                    <div className="bg-[#F0F7FF] border-primary p-2 rounded-xl m-auto">
                        <MdPeopleAlt size={60} className="text-[#0075FD]" />
                    </div>
                    <div className="flex flex-col items-start text-center">
                        <p className="font-semibold font-rubik  text-xl md:text-2xl lg:text-3xl ">1,000,000+</p>
                        <p className="font-light font-rubik text-sm md:text-base">users</p>
                    </div>
                </div>
            </div>
         </div>

          <div></div>
      </section>
    </main>
 
  )
}
