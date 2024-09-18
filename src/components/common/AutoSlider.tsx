// import React from 'react'
// import Slider from 'react-slick'
// import 'slick-carousel/slick/slick.css'
// import 'slick-carousel/slick/slick-theme.css'

// import Slider1 from '../../assets/images/sliders/slider-1.png'
// import Slider2 from '../../assets/images/sliders/slider-1.png'
// import Slider3 from '../../assets/images/sliders/slider-1.png'
// import Slider4 from '../../assets/images/sliders/slider-1.png'

// interface ArrowProps {
//   className: string
//   onClick: () => void
// }

// const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
//   <button
//     className={`${className} absolute top-1/2 left-4 transform -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-primary text-white rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300`}
//     onClick={onClick}
//   >
//     &lt;
//   </button>
// )

// const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => (
//   <button
//     className={`${className} absolute top-1/2 right-4 transform -translate-y-1/2 z-10 flex items-center justify-center w-8 h-8 md:w-12 md:h-12 bg-primary text-white rounded-full shadow-lg opacity-75 hover:opacity-100 transition-opacity duration-300`}
//     onClick={onClick}
//   >
//     &gt;
//   </button>
// )

// const AutoSlider: React.FC = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     pauseOnHover: true,
//     arrows: true,
//     prevArrow: <PrevArrow className='slick-prev' onClick={() => {}} />,
//     nextArrow: <NextArrow className='slick-next' onClick={() => {}} />,
//     fade: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: true,
//           slidesToShow: 1
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           slidesToShow: 1
//         }
//       }
//     ]
//   }

//   const slides = [Slider1, Slider2, Slider3, Slider4]

//   return (
//     <div className='relative w-full mx-auto'>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <div className='flex items-center justify-center'>
//             <img src={slide} alt={`Slide ${index + 1}`} className='object-contain w-full h-full ' />
//           </div>
//         ))}
//       </Slider>
//     </div>
//   )
// }

// export default AutoSlider

import FinalMMasterImage from '../../assets/images/finals/final-master.png'

const AutoSlider = () => {
  const handleSubmit = () => {
    window.open('https://comacpro.com/', '_blank')
  }

  return (
    <div className='relative w-full mx-auto'>
      <img src={FinalMMasterImage} alt='Slide' className='object-fill md:object-contain w-full h-[250px] md:h-full' />
      <button
        onClick={handleSubmit}
        className='absolute left-[10px] md:left-[60px] bottom-[20px] md:bottom-[70px] md:px-4 md:py-[11px] w-[113px] md:w-[165px] bg-[#FFA21A] text-[#2C2A29] rounded-[4.6px]  md:rounded-lg shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300 mt-2 md:mt-0 text-[9px] md:text-[16px] h-[27px] md:h-[46px]'
      >
        Đăng ký ngay
      </button>
    </div>
  )
}

export default AutoSlider
