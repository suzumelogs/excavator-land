import FireIcon from '../assets/svgs/fire-icon.svg'
import ArrowLeftWhiteIcon from '../assets/svgs/arrow-left-white-icon.svg'
import ArrowRightWhiteIcon from '../assets/svgs/arrow-right-white-icon.svg'
import ArrowRightPrimaryIcon from '../assets/svgs/arrow-right-primary-icon.svg'
import CartIcon from '../assets/svgs/cart-icon.svg'
import LocationIcon from '../assets/svgs/location-icon.svg'
import AsyncIcon from '../assets/svgs/async-icon.svg'
import Product1Image from '../assets/images/product-1.png'
import Product2Image from '../assets/images/product-1.png'
import Product3Image from '../assets/images/product-1.png'
import Product4Image from '../assets/images/product-1.png'

const products = [
  {
    id: 1,
    image: Product1Image,
    title: 'Yanmar Compact Excavators Summarized - 2017',
    location: 'Hà nội',
    year: '2017',
    usage: '1000 giờ',
    deliveryTime: '15 -20 ngày',
    oldPrice: '2.500.000.000đ',
    newPrice: '2.500.000.000đ',
    expiry: '3d:5h:60m'
  },
  {
    id: 2,
    image: Product2Image,
    title: 'Yanmar Compact Excavators Summarized - 2017',
    location: 'Hà nội',
    year: '2017',
    usage: '1000 giờ',
    deliveryTime: '15 -20 ngày',
    oldPrice: '2.500.000.000đ',
    newPrice: '2.500.000.000đ',
    expiry: '3d:5h:60m'
  },
  {
    id: 3,
    image: Product3Image,
    title: 'Yanmar Compact Excavators Summarized - 2017',
    location: 'Hà nội',
    year: '2017',
    usage: '1000 giờ',
    deliveryTime: '15 -20 ngày',
    oldPrice: '2.500.000.000đ',
    newPrice: '2.500.000.000đ',
    expiry: '3d:5h:60m'
  },
  {
    id: 4,
    image: Product4Image,
    title: 'Yanmar Compact Excavators Summarized - 2017',
    location: 'Hà nội',
    year: '2017',
    usage: '1000 giờ',
    deliveryTime: '15 -20 ngày',
    oldPrice: '2.500.000.000đ',
    newPrice: '2.500.000.000đ',
    expiry: '3d:5h:60m'
  }
]

const ProductHot = () => {
  return (
    <div className='w-full px-[20px] mt-10 bg-secondary py-[40px]'>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[10px] items-center'>
          <FireIcon />
          <p className='font-bold text-[30px] uppercase text-[#20201E]'>Sản phẩm hot</p>
        </div>
        <div className='flex gap-[20px] items-center'>
          <button className='w-[48px] h-[48px] bg-primary rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
            <ArrowLeftWhiteIcon />
          </button>
          <button className='w-[48px] h-[48px] bg-primary rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
            <ArrowRightWhiteIcon />
          </button>
        </div>
      </div>
      {/* Items */}
      <div className='flex flex-wrap gap-4 mt-4 justify-between'>
        {products.map((product) => (
          <div key={product.id} className='border-[#ECECEC] max-w-[100%]  rounded-[10px] overflow-hidden'>
            <div className='relative'>
              <img
                src={product.image}
                alt={`product ${product.id}`}
                className='object-cover transition-transform duration-300 transform hover:scale-105 w-full'
              />
              <div className='p-4 bg-white'>
                <p className='text-[#4C4A48] font-bold text-[16px] sm:text-[18px]'>{product.title}</p>
                <span className='flex items-center gap-2 text-[14px] sm:text-[16px] text-[#4C4A48] font-medium'>
                  <LocationIcon />
                  {product.location}
                </span>
                <div className='flex flex-col gap-2'>
                  <div className='flex justify-between items-center text-[12px] sm:text-[14px] font-medium text-[#4C4A48] mt-2'>
                    <p>Tình trạng</p>
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
                    <button className='w-[44px] h-[42px] bg-white border-[1.5px] border-[#4C4A48] rounded-[10px] flex items-center justify-center hover:opacity-80 transition-opacity duration-300'>
                      <CartIcon />
                    </button>
                    <button className='px-4 py-2 w-full sm:w-[245px] bg-[#FFA21A] text-[#2C2A29] rounded-lg shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300'>
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

export default ProductHot
