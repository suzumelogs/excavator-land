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
    <div className='flex justify-between w-full px-[30px] py-[53px]'>
      {logos.map((logo, index) => (
        <img key={index} src={logo.src} alt={logo.alt} />
      ))}
    </div>
  )
}

export default Business
