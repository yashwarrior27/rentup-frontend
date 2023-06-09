import React, { useRef } from "react"
import Heading from "../../common/Heading"
import "./Testimonials.css"
import FeaturedCard from "./FeaturedCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const Testimonial = ({testimonial}) => {
  return (
      <div className="flex flex-col bg-white rounded-lg shadow-sm shadow-[#fca311] overflow-hidden m-4 col-span-1 pt-8">
          <img className="h-14 w-14 mt-6 rounded-full object-cover" src={testimonial.img} alt={testimonial.name}/>
          <div className="flex-1 bg-white p-6 flex flex-col justify-between">
              <div className="flex-1">
                  <p className="text-xl font-semibold text-[#fca311]">{testimonial.name}</p>
                  <p className="mt-3 text-base text-[#14213d]">{testimonial.text}</p>
              </div>
          </div>
      </div>
  )
}

const Testimonials = () => {
  const testimonials = [
    {name: "John Doe", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", img: "../images/profile1.jpg"},
    {name: "Jane Doe", text: "Vestibulum et felis at mi elementum dapibus aliquet et dui.", img: "../images/profile2.jpg"},
    {name: "Steve Smith", text: "Proin auctor sapien eu lacus congue, nec semper nisl pretium.", img: "../images/profile3.jpg"},
    {name: "Steve Smith", text: "Proin auctor sapien eu lacus congue, nec semper nisl pretium.", img: "../images/profile2.jpg"},

    // More testimonials...
];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // nextArrow: <SliderNextArrow />,
    // prevArrow: <SliderPrevArrow />,
  
  };
  const sliderRef = useRef(null); 
return (
<section className='featured background2'>
  <div className="flex flex-wrap justify-center items-center bg-primary-500 text-center">
      <div className="text-gray-800 text-base font-semibold mb-6 w-full justify-center">
          What Our Customers Say
      </div>
      <div className="relative w-full">
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) =>
            <Testimonial key={index} testimonial={testimonial} />
          )}
        </Slider>
        {/* <SliderNextArrow className="!right-4" onClick={() => sliderRef.current.slickNext()} />
        <SliderPrevArrow className="!left-4" onClick={() => sliderRef.current.slickPrev()} /> */}
      </div>
  </div>
  </section>
)
}

export default Testimonials

export function SliderNextArrow(props) {
    const { className, style, onClick } = props
    return (
      <button
        className=
          'z-10 mr-2 !h-8 !w-8 !right-4 content-center items-center justify-center rounded-full !border  border-gray-200 !bg-white'
        
        style={ {border: 'inherit'} }
        onClick={onClick}
      >
        <ChevronRightIcon className="h-4 w-4 text-purple-700" />
      </button>
    )
  }
  
  export function SliderPrevArrow(props) {
    const { className, style, onClick } = props
    return (
        <button
        className=
          'z-10 ml-2 h-8 w-8 items-center !left-4 justify-center rounded-full !border border-gray-200 !bg-white'

        style={{border: 'inherit' }}
        onClick={onClick}
      >
        <ChevronLeftIcon className="h-4 w-4 text-purple-700" />
      </button>
    )
  }
  