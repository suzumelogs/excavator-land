import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import KobelcoImage from '../assets/images/logo/kbc-logo.png'
import HitachiImage from '../assets/images/logo/htc-logo.png'
import YanmarImage from '../assets/images/logo/ym-logo.png'
import CaterpillarImage from '../assets/images/logo/cpl-logo.png'
import HyundaiImage from '../assets/images/logo/hd-logo.png'

const logos = [
  { src: KobelcoImage, alt: 'Kobelco Logo' },
  { src: HitachiImage, alt: 'Hitachi Logo' },
  { src: YanmarImage, alt: 'Yanmar Logo' },
  { src: CaterpillarImage, alt: 'Caterpillar Logo' },
  { src: HyundaiImage, alt: 'Hyundai Logo' }
]

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        centerMode: true,
        centerPadding: '10px'
      }
    }
  ]
}

const Business = () => {
  return (
    <div className='w-full sm:px-[0px] py-[34px] sm:py-[53px]'>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo.src}
            alt={logo.alt}
            className='object-contain flex items-center justify-center pr-[30px] sm:pr-[0px] sm:px-[76px]'
          />
        ))}
      </Slider>
    </div>
  )
}

export default Business
