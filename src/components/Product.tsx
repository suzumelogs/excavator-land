import { useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import QuickiIcon from '../assets/svgs/quicki-icon.svg'
import ArrowLeftWhiteIcon from '../assets/svgs/arrow-left-white-icon.svg'
import ArrowRightWhiteIcon from '../assets/svgs/arrow-right-white-icon.svg'
import ArrowRightPrimaryIcon from '../assets/svgs/arrow-right-primary-icon.svg'
import LocationIcon from '../assets/svgs/location-icon.svg'
import AsyncIcon from '../assets/svgs/async-icon.svg'
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

const Product = () => {
  const sliderRef = useRef<Slider | null>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowRightWhiteIcon />,
    prevArrow: <ArrowLeftWhiteIcon />,
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
    <div className='w-full px-[5px] sm:px-[10px] mt-[30px] sm:mt-10'>
      <div className='flex justify-between items-center px-[5px] sm:px-[10px]'>
        <div className='flex gap-[10px] items-center'>
          <QuickiIcon />
          <p className='font-bold text-[18px] sm:text-[30px] uppercase text-accent'>Sản phẩm đặt trước</p>
        </div>
        <div className='flex gap-[10px] sm:gap-[20px] items-center'>
          <button
            onClick={handlePrev}
            aria-label='Previous product'
            className='w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] bg-primary rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowLeftWhiteIcon />
          </button>
          <button
            onClick={handleNext}
            aria-label='Next product'
            className='w-[32px] h-[32px] sm:w-[48px] sm:h-[48px] bg-primary rounded-[8px] sm:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowRightWhiteIcon />
          </button>
        </div>
      </div>
      <div className='mt-[11px] sm:mt-4 sm:px-[5px]'>
        <StyledSlider {...settings} ref={sliderRef}>
          {products.map((product) => (
            <div key={product.id} className='border max-w-[calc(25% - 18px)] rounded-[10px] overflow-hidden'>
              <div className='relative'>
                <img
                  src={product.image}
                  alt={`Product ${product.id}`}
                  className='object-cover transition-transform duration-300 transform hover:scale-105 w-full'
                />
                <div className='p-[10px] sm:p-4'>
                  <p className='text-[#4C4A48] font-bold text-[11px] sm:text-[18px]'>{product.title}</p>
                  <span className='flex items-center gap-2 text-[11px] sm:text-[16px] text-[#4C4A48] font-medium'>
                    <LocationIcon />
                    {product.location}
                  </span>
                  <div className='flex flex-col gap-2'>
                    <div className='flex justify-between items-center text-[10px] sm:text-[14px] font-medium text-[#4C4A48] mt-2'>
                      <p>Năm sản xuất</p>
                      <p>{product.year}</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] sm:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian sử dụng</p>
                      <p>{product.usage}</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] sm:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian bàn giao</p>
                      <p>{product.deliveryTime}</p>
                    </div>
                    <span className='items-center gap-2 flex justify-end text-[10px] sm:text-[14px] font-semibold text-[#4C4A48]'>
                      Xem thêm thông tin
                      <span className='hover:opacity-80 transition-opacity duration-300 cursor-pointer'>
                        <ArrowRightPrimaryIcon />
                      </span>
                    </span>
                  </div>
                  <div className='border mt-2'></div>
                  <div className='mt-[7px] sm:mt-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex flex-col'>
                        <p className='italic text-[11px] sm:text-[18px] font-medium text-[#706C69] line-through'>
                          {product.oldPrice}
                        </p>
                        <p className='font-semibold text-[#FFA21A] text-[14px] sm:text-[24px]'>{product.newPrice}</p>
                      </div>
                      <AsyncIcon />
                    </div>
                    <div className='flex flex-row justify-between mt-[7px] sm:mt-4 gap-[10px]'>
                      <div className='flex flex-col justify-end'>
                        <p className='text-[10px] sm:text-[14px] text-[#4C4A48] font-semibold flex justify-start sm:justify-end'>
                          Hết hạn sau
                        </p>
                        <p className='text-[14px] sm:text-[18px] text-[#E42024] font-bold'>{product.expiry}</p>
                      </div>
                      <button className='sm:h-[42px] w-full text-[12px] sm:text-[14px] sm:max-w-[202px] bg-[#FFA21A] text-[#121110] rounded-[6px] sm:rounded-[10px] shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300 mt-2 sm:mt-0'>
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

export default Product
