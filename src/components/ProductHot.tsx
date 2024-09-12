import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FireIcon from '../assets/svgs/fire-icon.svg'
import ArrowLeftBlackIcon from '../assets/svgs/arrow-left-black-icon.svg'
import ArrowRightBlackIcon from '../assets/svgs/arrow-right-black-icon.svg'
import ArrowRightPrimaryIcon from '../assets/svgs/arrow-right-primary-icon.svg'
import LocationIcon from '../assets/svgs/location-icon.svg'
import CartIcon from '../assets/svgs/cart-icon.svg'
import AsyncIcon from '../assets/svgs/async-icon.svg'
import { products } from '~/constants'
import styled from 'styled-components'

const StyledSlider = styled(Slider)`
  .slick-slide {
    margin: 0 9px; /* Khoảng cách 18px giữa các item */
  }
  .slick-track {
    display: flex;
  }
`

const ProductHot = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowRightBlackIcon />,
    prevArrow: <ArrowLeftBlackIcon />,
    centerMode: false,
    arrows: false,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '10%'
        }
      }
    ]
  }

  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <div className='w-full px-[20px] mt-10 bg-secondary py-[40px]'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[10px] items-center'>
          <FireIcon />
          <p className='font-bold text-[18px] sm:text-[30px] uppercase text-[#20201E]'>Sản phẩm hot</p>
        </div>
        <div className='flex gap-[10px] sm:gap-[20px] items-center'>
          <button
            onClick={handlePrev}
            aria-label='Previous product'
            className='w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] bg-primary rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowLeftBlackIcon />
          </button>
          <button
            onClick={handleNext}
            aria-label='Next product'
            className='w-[36px] h-[36px] sm:w-[48px] sm:h-[48px] bg-primary rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowRightBlackIcon />
          </button>
        </div>
      </div>
      <div className='mt-4'>
        <StyledSlider {...settings} ref={sliderRef}>
          {products.map((product) => (
            <div
              key={product.id}
              className='border-[#ECECEC] max-w-[calc(25% - 18px)] sm:max-w-[calc(25% - 18px)] rounded-[8px] sm:rounded-[10px] overflow-hidden'
            >
              <div className='relative'>
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className='object-cover transition-transform duration-300 transform hover:scale-105 w-full'
                />
                <div className='p-4 bg-white'>
                  <p className='text-[#4C4A48] font-bold text-[14px] sm:text-[16px] md:text-[18px]'>{product.title}</p>
                  <span className='flex items-center gap-1 sm:gap-2 text-[12px] sm:text-[14px] md:text-[16px] text-[#4C4A48] font-medium'>
                    <LocationIcon />
                    {product.location}
                  </span>
                  <div className='flex flex-col gap-1 sm:gap-2'>
                    <div className='flex justify-between items-center text-[10px] sm:text-[12px] md:text-[14px] font-medium text-[#4C4A48] mt-1 sm:mt-2'>
                      <p>Tình trạng</p>
                      <p>{product.year}</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] sm:text-[12px] md:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian sử dụng</p>
                      <p>{product.usage}</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] sm:text-[12px] md:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian bàn giao</p>
                      <p>{product.deliveryTime}</p>
                    </div>
                    <span className='items-center gap-1 sm:gap-2 flex justify-end text-[10px] sm:text-[12px] md:text-[14px] font-semibold text-[#4C4A48]'>
                      Xem thêm thông tin
                      <span className='hover:opacity-80 transition-opacity duration-300 cursor-pointer'>
                        <ArrowRightPrimaryIcon />
                      </span>
                    </span>
                  </div>
                  <div className='border mt-2'></div>
                  <div className='mt-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex flex-col'>
                        <p className='italic text-[14px] sm:text-[16px] md:text-[18px] font-medium text-[#706C69] line-through'>
                          {product.oldPrice}
                        </p>
                        <p className='font-semibold text-[#FFA21A] text-[18px] sm:text-[22px] md:text-[24px]'>
                          {product.newPrice}
                        </p>
                      </div>
                      <AsyncIcon />
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between mt-4'>
                      <button className='w-[36px] h-[36px] sm:w-[44px] sm:h-[42px] bg-white border-[1.5px] border-[#4C4A48] rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
                        <CartIcon />
                      </button>
                      <button className='px-4 py-2 w-full sm:w-[245px] bg-[#FFA21A] text-[#2C2A29] rounded-lg shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300 mt-2 sm:mt-0'>
                        Đặt hàng
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StyledSlider>
      </div>
    </div>
  )
}

export default ProductHot
