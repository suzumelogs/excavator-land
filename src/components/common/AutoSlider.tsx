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
