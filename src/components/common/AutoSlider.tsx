import FinalMasterImage from '../../assets/images/finals/final-master.png'
import FinalMasterMobileImage from '../../assets/images/finals/final-master-mobile.png'

const AutoSlider = () => {
  const handleSubmit = () => {
    window.open(
      'https://comacpro.com/register/?gidzl=2hIgRC1_Psm3gg9YmcTWQ0AfhM7VOpfX5QwgFDHjR3P6fAayr3m-Cn7n_cpJCszW4lcjRMNp-_GvotjcO0&gidzl=HFH_BhdYwLf9wNyWllhkNaZcVIQZyUvUKESgAgtoxbPOj2ijggYuK0kxVIxx_-jG2BnrUJJ59QTDi-3hMW',
      '_blank'
    )
  }

  return (
    <div className='relative w-full mx-auto'>
      <img
        src={FinalMasterImage}
        alt='Slide'
        className='object-fill md:object-contain w-full h-[250px] md:h-full hidden md:block'
      />
      <img
        src={FinalMasterMobileImage}
        alt='Slide'
        className='object-fill md:object-contain w-full h-[250px] md:h-full block md:hidden'
      />
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
