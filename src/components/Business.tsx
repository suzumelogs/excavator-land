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
        slidesToShow: 2
      }
    }
  ]
}

const Business = () => {
  return (
    <div className='w-full px-[30px] py-[53px]'>
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className='p-4 flex justify-between'>
            <img src={logo.src} alt={logo.alt} className='object-contain' />
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default Business
