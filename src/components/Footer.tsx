import CmpLogo from '../assets/images/logo/cmp-logo.png'

const Footer = () => {
  return (
    <footer className='bg-secondary w-full py-10 px-[60px]'>
      <img src={CmpLogo} alt='CoMacPro Logo' className='object-cover' />
      <div>
        {/* 1 */}
        <div className='flex flex-col gap-[10px]'>
          <p className='font-semibold text-[20px] text-[#2C2A29]'>Công ty cổ phần CoMacPro</p>
          <div className='flex gap-8'>
            <div className='font-normal text-[16px] text-[#4C4A48]'>
              <p>Số GCNĐKDN</p>
              <p>Cấp ngày</p>
              <p>Nơi cấp</p>
            </div>
            <div className='font-normal text-[16px] text-[#4C4A48]'>
              <p>0110449655 </p>
              <p>14/08/2023</p>
              <p>Sở kế hoạch và đầu tư thành phố Hà Nội</p>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <p className='font-semibold text-[18px] text-[#2C2A29]'>Trụ sở chính:</p>
          <div className='flex gap-8'>
            <div className='font-normal text-[16px] text-[#4C4A48]'>
              <p>Số 162, ngõ 189 phố Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className='flex'>
          <div>
            <p className='font-semibold text-[18px] text-[#2C2A29]'>Hotline</p>
            <div className='flex gap-8'>
              <div className='font-normal text-[16px] text-[#4C4A48]'>
                <p>Link → +65-8831 8705</p>
              </div>
            </div>
          </div>
          <div>
            <p className='font-semibold text-[18px] text-[#2C2A29]'>Email</p>
            <div className='flex gap-8'>
              <div className='font-normal text-[16px] text-[#4C4A48]'>
                <p>info@antbuildz.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
