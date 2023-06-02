import CategoryCard from "../minicomponents/CategoryCard";
import {ImPen} from "react-icons/im"







export default function Categories() {
  return (
    <main className="w-full bg-white py-10 md:py-40 md:px-44 z-10">
      <section className='max-w-[430px] md:max-w-[1300px] mx-auto'>

        <div className='flex flex-col justify-center lg:justify-start gap-1'>
            <h1 className='font-geologica py-2 text-center md:text-left font-semibold text-2xl md:text-3xl lg:text-4xl '>Most <span className="text-primary">Popular Categories</span></h1>
            <p className='font-rubik py-2 text-center md:text-left text-base md:text-lg text-gray-600'>Various version have evolved all over the years, sometimes by acident, sometimes by people finding out.</p>
            <p className='font-rubik py-3.5 text-center md:text-left text-base md:text-lg text-gray-600'>This are meant to be different, but im lazy af, this repo is just to practice my progress on using tailwind for responsive sites as i want tailwind to be my default for styling.</p>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5">
            <CategoryCard icon={<ImPen/>} title={"Hello"} />
            <CategoryCard title={"Literature"} />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>            


        </div>

      </section>
    </main>
  )
}
