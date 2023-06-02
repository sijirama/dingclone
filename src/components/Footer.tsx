import {BsGithub , BsLinkedin , BsTwitter , BsInstagram} from "react-icons/bs"

export default function Footer() {
  const ICON_SIZE = 30
  return (
    <main className="w-full bg-white py-7 md:py-18 z-10">
      <section className='max-w-[430px] md:max-w-[1300px] m-auto grid md:grid-cols-2  lg:grid-cols-4 gap-10'>
        <div className='px-2 lg:px-6'>
          <p className="font-geologica text-primary font-bold -tracking-widest text-2xl lg:text-4xl ">Xerox</p>
          <p className="font-rubik text-black text-lg lg:text-xl font-medium">Contact Us</p>
          <p className="text-base text-gray-600 font-light font-rubik">Call: +230-8181818181</p>
          <p className="text-base text-gray-600 font-light font-rubik">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla distinctio itaque nemo aspernatur corrupti nesciunt.</p>
          <p className="text-base text-gray-600 font-semibold font-rubik">Email: helloworld@gmail.com</p>
          <div className="flex justify-start gap-3 md:justify-between my-2">
            <BsGithub size={ICON_SIZE} />
            <BsLinkedin size={ICON_SIZE} />
            <BsTwitter size={ICON_SIZE} />
            <BsInstagram size={ICON_SIZE} />
          </div>
        </div>
        <div className='px-2 lg:px-6'>
          <p className="text-lg lg:text-xl font-rubik font-semibold">Explore</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Home</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">About</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Course</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Blog</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Contact</p>
        </div>
        <div className='px-2 lg:px-6'>
          <p className="text-lg lg:text-xl font-rubik font-semibold">Category</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Design</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Development</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Marketing</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Business</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Lifestyle</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Photography</p>
          <p className="text-base text-gray-600 font-light hover:text-primary cursor-pointer font-rubik py-1">Music</p>
        </div>
        <div className='px-2 lg:px-6'>
          <p className="text-lg lg:text-xl font-rubik font-semibold">Subscribe</p>
          <p className="text-base text-gray-600 font-medium font-rubik py-1">Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
          <form className="flex flex-col gap-3 items-start py-2">
            <input type="text" placeholder="Email here"  className="shadow-lg py-2 px-2 focus:outline-none border border-gray-400  lg:px-5 rounded-lg"/>
            <button className="shadow-md w-40  p-2 rounded-lg bg-primary text-white font-rubik font-medium">Subscribe now</button>
          </form>
        </div>

      </section>
    </main>
  )
}
