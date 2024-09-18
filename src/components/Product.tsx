import { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import QuickiIcon from '../assets/svgs/quicki-icon.svg'
import ArrowLeftWhiteIcon from '../assets/svgs/arrow-left-white-icon.svg'
import ArrowRightWhiteIcon from '../assets/svgs/arrow-right-white-icon.svg'
import ArrowRightPrimaryIcon from '../assets/svgs/arrow-right-primary-icon.svg'
import LocationIcon from '../assets/svgs/location-icon.svg'
import styled from 'styled-components'
import { getListProductsPreorder } from '~/api'

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 5px;
  }
  .slick-track {
    display: flex;
  }
`

type Product = {
  id: string
  name: string
  model: string
  brand: string
  manufactureYear: number
  usedhours: string
  price: number
  ProductUrl: string
  EndDate: string
  image: string
}

const Product = () => {
  const sliderRef = useRef<Slider | null>(null)
  const [data, setData] = useState<Product[]>([])

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

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getListProductsPreorder()
        const fetchedData = response?.data

        setData(fetchedData)
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

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

  const handleSubmit = (url: string) => {
    window.open(url, '_blank')
  }

  const convertSecondsToTime = (totalSeconds: number): string => {
    if (isNaN(totalSeconds) || totalSeconds < 0) {
      return '0d:0h:0m'
    }

    const secondsInDay = 24 * 3600
    const secondsInHour = 3600
    const secondsInMinute = 60

    const days = Math.floor(totalSeconds / secondsInDay)
    const remainingAfterDays = totalSeconds % secondsInDay

    const hours = Math.floor(remainingAfterDays / secondsInHour)
    const remainingAfterHours = remainingAfterDays % secondsInHour

    const mins = Math.floor(remainingAfterHours / secondsInMinute)

    return `${days}d:${hours}h:${mins}m`
  }

  return (
    <div className='w-full px-[5px] md:px-[10px] mt-[30px] md:mt-10'>
      <div className='flex justify-between items-center px-[5px] md:px-[10px]'>
        <div className='flex gap-[10px] items-center'>
          <QuickiIcon />
          <p className='font-bold text-[18px] md:text-[30px] uppercase text-accent'>Sản phẩm đặt trước</p>
        </div>
        <div className='flex gap-[10px] md:gap-[20px] items-center'>
          <button
            onClick={handlePrev}
            aria-label='Previous product'
            className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] bg-primary rounded-[4px] md:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowLeftWhiteIcon />
          </button>
          <button
            onClick={handleNext}
            aria-label='Next product'
            className='w-[32px] h-[32px] md:w-[48px] md:h-[48px] bg-primary rounded-[4px] md:rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'
          >
            <ArrowRightWhiteIcon />
          </button>
        </div>
      </div>
      <div className='mt-[11px] md:mt-4 md:px-[5px]'>
        <StyledSlider {...settings} ref={sliderRef}>
          {data.map((item) => (
            <div key={item?.id} className='border max-w-[calc(25% - 18px)] rounded-[10px] overflow-hidden'>
              <div className='relative'>
                <img
                  src={JSON.parse(item?.image)[Math.floor(Math.random() * JSON.parse(item?.image).length)]}
                  alt={`Product ${item?.id}`}
                  className='object-cover object-center transition-transform duration-300 transform hover:scale-105 w-full max-h-[112px] md:max-h-[209px]'
                />
                <div className='p-[10px] md:p-4'>
                  <p className='text-[#4C4A48] font-bold text-[11px] md:text-[18px] truncate'>
                    {item?.name} {item?.brand} {item?.model} - {item?.manufactureYear}
                  </p>
                  <span className='flex items-center gap-2 text-[11px] md:text-[16px] text-[#4C4A48] font-medium'>
                    <LocationIcon />
                    Hà Nội
                  </span>
                  <div className='flex flex-col gap-2'>
                    <div className='flex justify-between items-center text-[10px] md:text-[14px] font-medium text-[#4C4A48] mt-2'>
                      <p>Năm sản xuất</p>
                      <p>{item?.manufactureYear}</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] md:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian sử dụng</p>
                      <p>{item?.usedhours} giờ</p>
                    </div>
                    <div className='flex justify-between items-center text-[10px] md:text-[14px] font-medium text-[#4C4A48]'>
                      <p>Thời gian bàn giao</p>
                      <p>Có sẵn</p>
                    </div>
                    <span
                      onClick={() => handleSubmit(item?.ProductUrl)}
                      className='items-center gap-2 flex justify-end text-[10px] md:text-[14px] font-semibold text-[#4C4A48] cursor-pointer'
                    >
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
                          {item?.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </p>
                        <p className='font-semibold text-[#FFA21A] text-[14px] md:text-[24px]'>
                          {item?.price?.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                        </p>
                      </div>
                    </div>
                    <div className='flex flex-row justify-between mt-[7px] md:mt-4 gap-[10px]'>
                      <div className='flex flex-col justify-end'>
                        <p className='text-[10px] md:text-[14px] text-[#4C4A48] font-semibold flex justify-start md:justify-end'>
                          Hết hạn sau
                        </p>
                        <p className='text-[14px] md:text-[18px] text-[#E42024] font-bold'>
                          {convertSecondsToTime(item?.EndDate == '' ? 0 : parseInt(item?.EndDate, 10))}
                        </p>
                      </div>
                      <button
                        onClick={() => handleSubmit(item?.ProductUrl)}
                        className='md:h-[42px] w-full text-[12px] md:text-[14px] md:max-w-[202px] bg-[#FFA21A] text-[#121110] rounded-[4px] md:rounded-[10px] shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300 mt-2 md:mt-0'
                      >
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
