import ContactImage from '../assets/images/contact.png'

const Contact = () => {
  return (
    <div className='w-full bg-[#E8F1F5] px-[16px] md:px-[40px] lg:px-[121px] py-[40px] md:py-[82px] flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-[16px] md:gap-[32px] lg:gap-[102px]'>
      <div className='flex-1'>
        <h2 className='text-[#FFA21A] font-bold uppercase text-[24px] md:text-[32px]'>Nhận ưu đãi</h2>
        <p className='font-semibold text-[#4C4A48] text-[16px] md:text-[18px]'>
          Vui lòng để lại thông tin, chúng tôi sẽ liên hệ lại ngay
        </p>
        <div className='flex flex-col gap-[10px] mt-[20px] md:mt-[30px]'>
          <div className='flex flex-col md:flex-row gap-[10px]'>
            <input
              type='text'
              placeholder='Họ tên'
              aria-label='Họ tên'
              className='px-[12px] py-[10px] border border-[#E1DEDD] rounded-[10px] focus:outline-none focus:border-primary w-full max-w-full md:max-w-[350px]'
            />
            <input
              type='tel'
              placeholder='Số điện thoại'
              aria-label='Số điện thoại'
              className='px-[12px] py-[10px] border border-[#E1DEDD] rounded-[10px] focus:outline-none focus:border-primary w-full max-w-full md:max-w-[350px]'
            />
          </div>
          <textarea
            placeholder='Nội dung yêu cầu'
            aria-label='Nội dung yêu cầu'
            className='px-[12px] py-[10px] border border-[#E1DEDD] rounded-[10px] focus:outline-none focus:border-primary w-full max-w-full md:max-w-[710px]'
            rows={4}
          />
          <div className='flex justify-end max-w-full md:max-w-[710px] mt-[10px]'>
            <button className='px-4 py-[9px] w-[150px] bg-[#FFA21A] text-[#2C2A29] rounded-lg shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300'>
              Gửi yêu cầu
            </button>
          </div>
        </div>
      </div>
      <div className='flex-shrink-0 w-full md:w-auto'>
        <img src={ContactImage} alt='Contact' className='w-full h-auto max-w-full md:max-w-md' />
      </div>
    </div>
  )
}

export default Contact
