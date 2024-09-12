import KobelcoImage from '../assets/images/logo/kbc-logo.png'
import HitachiImage from '../assets/images/logo/htc-logo.png'
import YanmarImage from '../assets/images/logo/ym-logo.png'
import CaterpillarImage from '../assets/images/logo/cpl-logo.png'
import HyundaiImage from '../assets/images/logo/hd-logo.png'

const logos = [
  { src: KobelcoImage, alt: 'Kobelco Logo' },
  { src: HitachiImage, alt: 'Hitachi Logo' },
  { src: YanmarImage, alt: 'Yanmar Logo' },
  { src: CaterpillarImage, alt: 'Caterpillar Logo' },
  { src: HyundaiImage, alt: 'Hyundai Logo' }
]

const Business = () => {
  return (
    <div className='relative overflow-hidden w-full py-10'>
      <div className='flex items-center animate-scroll gap-6'>
        {logos.map((logo, index) => (
          <img key={index} src={logo.src} alt={logo.alt} className='w-40' />
        ))}

        {/* Nhân đôi danh sách logo để tạo hiệu ứng liên tục */}
        {logos.map((logo, index) => (
          <img key={index + logos.length} src={logo.src} alt={logo.alt} className='w-40' />
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
          display: flex;
          white-space: nowrap;
        }
      `}</style>
    </div>
  )
}

export default Business
