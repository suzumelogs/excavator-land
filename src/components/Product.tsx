import QuickiIcon from '../assets/svgs/quicki-icon.svg'
import ArrowLeftWhiteIcon from '../assets/svgs/arrow-left-white-icon.svg'
import ArrowRightWhiteIcon from '../assets/svgs/arrow-right-white-icon.svg'
import ArrowRightPrimaryIcon from '../assets/svgs/arrow-right-primary-icon.svg'
import LocationIcon from '../assets/svgs/location-icon.svg'
import AsyncIcon from '../assets/svgs/async-icon.svg'
import { useState } from 'react'
import { products } from '~/constants'

const Product = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsToShow = 4

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    if (currentIndex < products.length - itemsToShow) {
      setCurrentIndex(currentIndex + 1)
    }
  }
  return (
    <div className='w-full px-[20px] mt-10'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[10px] items-center'>
          <QuickiIcon />
          <p className='font-bold text-[30px] uppercase text-accent'>Sản phẩm đặt trước</p>
        </div>
        <div className='flex gap-[20px] items-center'>
          <button
            onClick={handlePrev}
            className={`w-[48px] h-[48px] bg-primary rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300 ${currentIndex === 0 ? 'opacity-50' : ''}`}
            disabled={currentIndex === 0}
          >
            <ArrowLeftWhiteIcon />
          </button>
          <button
            onClick={handleNext}
            className={`w-[48px] h-[48px] bg-primary rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300 ${currentIndex >= products.length - itemsToShow ? 'opacity-50' : ''}`}
            disabled={currentIndex >= products.length - itemsToShow}
          >
            <ArrowRightWhiteIcon />
          </button>
        </div>
      </div>
      {/* Items */}
      <div className='flex gap-4 mt-4 justify-between overflow-hidden'>
        {products.slice(currentIndex, currentIndex + itemsToShow).map((product) => (
          <div key={product.id} className='border max-w-[100%] rounded-[10px] overflow-hidden'>
            <div className='relative'>
              <img
                src={product.image}
                alt={`product ${product.id}`}
                className='object-cover transition-transform duration-300 transform hover:scale-105 w-full'
              />
              <div className='p-4'>
                <p className='text-[#4C4A48] font-bold text-[16px] sm:text-[18px]'>{product.title}</p>
                <span className='flex items-center gap-2 text-[14px] sm:text-[16px] text-[#4C4A48] font-medium'>
                  <LocationIcon />
                  {product.location}
                </span>
                {/* Other product details */}
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between items-center text-[12px] sm:text-[14px] font-medium text-[#4C4A48] mt-2'>
                    <p>Năm sản xuất</p>
                    <p>{product.year}</p>
                  </div>
                  <div className='flex justify-between items-center text-[12px] sm:text-[14px] font-medium text-[#4C4A48]'>
                    <p>Thời gian sử dụng</p>
                    <p>{product.usage}</p>
                  </div>
                  <div className='flex justify-between items-center text-[12px] sm:text-[14px] font-medium text-[#4C4A48]'>
                    <p>Thời gian bàn giao</p>
                    <p>{product.deliveryTime}</p>
                  </div>
                  <span className='items-center gap-2 flex justify-end text-[12px] sm:text-[14px] font-semibold text-[#4C4A48]'>
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
                      <p className='italic text-[16px] sm:text-[18px] font-medium text-[#706C69] line-through'>
                        {product.oldPrice}
                      </p>
                      <p className='font-semibold text-[#FFA21A] text-[22px] sm:text-[24px]'>{product.newPrice}</p>
                    </div>
                    <AsyncIcon />
                  </div>
                  <div className='flex flex-col sm:flex-row justify-between mt-4'>
                    <div className='flex flex-col'>
                      <p className='text-[12px] sm:text-[14px] text-[#4C4A48] font-semibold flex justify-end'>
                        Hết hạn sau
                      </p>
                      <p className='text-[16px] sm:text-[18px] text-[#E42024] font-bold'>{product.expiry}</p>
                    </div>
                    <button className='px-4 py-2 w-full sm:w-[202px] bg-[#FFA21A] text-[#2C2A29] rounded-lg shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300'>
                      Đặt hàng
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Product
