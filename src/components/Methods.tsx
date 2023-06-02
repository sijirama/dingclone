import Card from "../minicomponents/Card"
import Slider from "react-slick";
import "../index.scss"

export default function Methods() {

  var settings = {
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
    <main className="w-full bg-tertiary p-7 md:py-18 z-10">
      <section className='max-w-[430px] md:max-w-[1300px] mx-auto'>
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
