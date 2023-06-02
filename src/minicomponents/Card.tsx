
export default function Card() {
  return (
    <div className="bg-white drop-shadow-md rounded-xl overflow-hidden m-5">
        <img src="/wavy.jpg" className="h-40 w-full object-cover object-center" />
        <div className="p-2 md:p-3 border-b">
            <h1 className="py-1 md:py-1 text-xs md:text-sm font-rubik text-black font-extralight">Place Holder category</h1>
            <p className="py-1 md:py-1 text-xl md:text-2xl font-geologica font-semibold text-2xl ">Place Holder Title</p>
        </div>
            <p className="px-3 py-1 md:py-2 font-rubik font-light">$500</p>
        
        <div className="absolute font-semibold top-0 left-0 bg-gray-200 m-2 py-[0.1rem] rounded-md px-2">
            Tag
        </div>
    </div>
  )
}
