import Card from "../minicomponents/Card"
import Slider from "react-slick";
import "../index.scss"

export default function Methods() {

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 3,
    slidesToScroll: 1,
    //centerMode: true,
    //variableWidth: true,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]};

  return (
    <main className="w-full bg-tertiary py-16 p-7 md:py-36 z-10">
      <section className='max-w-[430px] md:max-w-[1300px] mx-auto'>
        <h1 className="py-2 px-4 text-3xl font-geologica font-semibold  ">Most Popular <span className="text-primary">Methods</span></h1>
        <p className="px-4 py-2 text-gray-600 font-rubik font-light">various versions have evolved over the years sometimes by accident</p>
        <Slider {...settings} >

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </Slider>
      </section>
    </main>
  )
}
