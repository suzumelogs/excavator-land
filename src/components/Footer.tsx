import CmpLogo from '../assets/images/logo/cmp-logo.png'

const Footer = () => {
  const companyInfo = {
    name: 'Công ty cổ phần CoMacPro',
    registration: {
      number: '0110449655',
      date: '14/08/2023',
      place: 'Sở kế hoạch và đầu tư thành phố Hà Nội'
    },
    address: 'Số 162, ngõ 189 phố Nguyễn Ngọc Vũ, Phường Trung Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam',
    hotline: '(+84) 90 111 8288',
    email: 'info@antbuildz.com'
  }

  const quickAccess = ['Đăng kí', 'Về chúng tôi', 'Sản phẩm', 'Blogs', 'Bảo hiểm', 'Điều kiện', 'FAQs']

  const userLinks = ['FAQs', 'Hướng dẫn thuê', 'Hướng dẫn mua']
  const partnerLinks = ['FAQs', 'Trở thành đối tác', 'Hướng dẫn bán']

  return (
    <footer className='bg-secondary w-full py-10 px-5 md:px-[60px]'>
      <img src={CmpLogo} alt='CoMacPro Logo' className='object-cover w-[150px] mx-auto md:mx-0' />
      <div className='container mt-8 flex flex-col md:flex-row gap-[30px] md:gap-[70px] justify-between'>
        <div>
          <div className='flex flex-col gap-[10px]'>
            <p className='font-semibold text-[18px] md:text-[20px] text-[#2C2A29]'>{companyInfo.name}</p>
            <div className='flex gap-4 md:gap-8'>
              <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
                <p>Số GCNĐKDN</p>
                <p>Cấp ngày</p>
                <p>Nơi cấp</p>
              </div>
              <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
                <p>{companyInfo.registration.number}</p>
                <p>{companyInfo.registration.date}</p>
                <p>{companyInfo.registration.place}</p>
              </div>
            </div>
          </div>

          <div className='mt-5 flex flex-col gap-[10px]'>
            <p className='font-semibold text-[16px] md:text-[18px] text-[#2C2A29]'>Trụ sở chính:</p>
            <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
              <p>{companyInfo.address}</p>
            </div>
          </div>

          <div className='flex mt-5 gap-[20px] md:gap-[30px]'>
            <div className='flex flex-col gap-[10px]'>
              <p className='font-semibold text-[16px] md:text-[18px] text-[#2C2A29]'>Hotline</p>
              <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
                <p>{companyInfo.hotline}</p>
              </div>
            </div>
            <div className='flex flex-col gap-[10px]'>
              <p className='font-semibold text-[16px] md:text-[18px] text-[#2C2A29]'>Email</p>
              <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
                <p>{companyInfo.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-[30px]'>
          <div className='flex flex-col gap-[10px]'>
            <p className='font-semibold text-[16px] md:text-[18px] text-[#2C2A29]'>Người dùng</p>
            <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
              {userLinks.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          </div>

          <div className='flex flex-col gap-[10px]'>
            <p className='font-semibold text-[16px] md:text-[18px] text-[#2C2A29]'>Đối tác</p>
            <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
              {partnerLinks.map((link, index) => (
                <p key={index}>{link}</p>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[10px]'>
              <p className='font-semibold text-[16px] md:text-[18px] text-[#2C2A29]'>Truy cập nhanh</p>
              <div className='font-normal text-[14px] md:text-[16px] text-[#4C4A48]'>
                {quickAccess.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-[30px]'>
            <div className='flex flex-col gap-[10px]'>
              <p className='font-semibold text-[16px] md:text-[18px] text-[#2C2A29]'>Mạng xã hội</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
