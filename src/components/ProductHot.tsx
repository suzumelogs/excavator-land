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
import HotIcon from '../assets/svgs/hot-icon.svg'
import { products } from '~/constants'
import styled from 'styled-components'

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 5px;
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
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          centerPadding: '0px'
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
    <div className='w-full bg-secondary px-[5px] md:px-[10px] mt-[30px] md:mt-10 py-[30px] md:py-[40px]'>
      <div className='flex justify-between items-center px-[5px] md:px-[10px]'>
        <div className='flex gap-[10px] items-center'>
          <FireIcon />
          <p className='font-bold text-[18px] md:text-[30px] uppercase text-[#20201E]'>Sản phẩm hot</p>
        </div>
        <div className='flex gap-[10px] md:gap-[20px] items-center'>
          <button
            onClick={handlePrev}
            aria-label='Previous product'
            className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] bg-primary rounded-[4px] md:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowLeftBlackIcon />
          </button>
          <button
            onClick={handleNext}
            aria-label='Next product'
            className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] bg-primary rounded-[4px] md:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowRightBlackIcon />
          </button>
        </div>
      </div>
      <div className='mt-[11px] md:mt-4 md:px-[5px]'>
        <StyledSlider {...settings} ref={sliderRef}>
          {products.map((product) => (
            <div key={product.id} className='border-[#ECECEC] max-w-[calc(25% - 18px)] rounded-[10px]'>
              <div className='relative'>
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className='object-cover transition-transform duration-300 transform hover:scale-105 w-full'
                />
                <div className='absolute top-2 left-[-4px]'>
                  <HotIcon />
                </div>
                <div className='p-[10px] md:p-4 bg-white rounded-b-[10px]'>
                  <p className='text-[#4C4A48] font-bold text-[11px] md:text-[18px]'>{product.title}</p>
                  <span className='flex items-center gap-2 text-[11px] md:text-[16px] text-[#4C4A48] font-medium'>
                    <LocationIcon />
                    {product.location}
                  </span>
                  <div className='flex flex-col gap-2'>
                    <div className='flex justify-between items-center text-[10px] md:text-[14px] font-medium text-[#4C4A48] mt-2'>
                      <p>Năm sản xuất</p>
                      <p>{product.year}</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] md:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian sử dụng</p>
                      <p>{product.usage}</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] md:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian bàn giao</p>
                      <p>{product.deliveryTime}</p>
                    </div>
                    <span className='items-center gap-2 flex justify-end text-[10px] md:text-[14px] font-semibold text-[#4C4A48]'>
                      Xem thêm thông tin
                      <span className='hover:opacity-80 transition-opacity duration-300 cursor-pointer'>
                        <ArrowRightPrimaryIcon />
                      </span>
                    </span>
                  </div>
                  <div className='border mt-2'></div>
                  <div className='mt-[7px] md:mt-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex flex-col'>
                        <p className='italic text-[11px] md:text-[18px] font-medium text-[#706C69] line-through'>
                          {product.oldPrice}
                        </p>
                        <p className='font-semibold text-[#FFA21A] text-[14px] md:text-[24px]'>{product.newPrice}</p>
                      </div>
                      <AsyncIcon />
                    </div>
                    <div className='flex flex-row justify-between items-center mt-4 gap-[10px]'>
                      <button className='w-[40px] h-[30px] md:w-[44px] md:h-[42px] bg-white border-[1.5px] border-[#4C4A48] rounded-[6px] md:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
                        <CartIcon />
                      </button>
                      <button className='h-[30px] md:h-[42px] w-full text-[12px] md:text-[14px] md:w-[245px] bg-[#FFA21A] text-[#2C2A29] rounded-[6px] md:rounded-[10px] shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300'>
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
