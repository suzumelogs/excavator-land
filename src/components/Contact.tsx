import { useState } from 'react'
import ContactImage from '../assets/images/contact.png'
import { sendMailContact } from '~/api'

const Contact = () => {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    setIsSubmitting(true)
    setError(null)

    try {
      await sendMailContact(name, phone, message)
      alert('Yêu cầu của bạn đã được gửi thành công!')
      setName('')
      setPhone('')
      setMessage('')
    } catch (error) {
      console.log(error)
      setError('Đã xảy ra lỗi khi gửi yêu cầu. Vui lòng thử lại.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className='w-full bg-[#E8F1F5] px-[10px] md:px-[40px] lg:px-[121px] py-[30px] md:py-[82px] flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 gap-[16px] md:gap-[32px] lg:gap-[102px]'>
      <div className='flex-1'>
        <div className='flex justify-between items-center gap-[20px]'>
          <div className='flex-shrink-0 max-w-[113px] md:w-auto block md:hidden'>
            <img src={ContactImage} alt='Contact' className='w-full h-auto max-w-full md:max-w-md' />
          </div>
          <div>
            <h2 className='text-[#FFA21A] font-bold uppercase text-[22px] md:text-[32px]'>Nhận ưu đãi</h2>
            <p className='font-medium md:font-semibold text-[#4C4A48] text-[16px] md:text-[18px]'>
              Vui lòng để lại thông tin, chúng tôi sẽ liên hệ lại ngay
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className='flex flex-col gap-[10px] mt-[30px]'>
          <div className='flex flex-col md:flex-row gap-[10px]'>
            <input
              type='text'
              placeholder='Họ tên'
              aria-label='Họ tên'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='px-[12px] py-[11.5px] md:px-[12px] md:py-[14.5px] border border-[#E1DEDD] rounded-[6px] md:rounded-[10px] focus:outline-none focus:border-primary w-full max-w-full md:max-w-[350px] text-[14px] font-medium'
              required
            />
            <input
              type='tel'
              placeholder='Số điện thoại'
              aria-label='Số điện thoại'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className='px-[12px] py-[11.5px] md:px-[12px] md:py-[14.5px] border border-[#E1DEDD] rounded-[6px] md:rounded-[10px] focus:outline-none focus:border-primary w-full max-w-full md:max-w-[350px] text-[14px] font-medium'
              required
            />
          </div>
          <textarea
            placeholder='Nội dung yêu cầu'
            aria-label='Nội dung yêu cầu'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className='px-[12px] py-[10px] border border-[#E1DEDD] rounded-[6px] md:rounded-[10px] focus:outline-none focus:border-primary w-full max-w-full md:max-w-[710px] text-[14px] font-medium'
            rows={4}
            required
          />
          <div className='flex justify-end max-w-full md:max-w-[710px] mt-[10px]'>
            <button
              type='submit'
              disabled={isSubmitting}
              className='px-4 py-[9px] w-[150px] bg-[#FFA21A] text-[#2C2A29] rounded-[10px] shadow-md transform focus:outline-none focus:ring-2 focus:ring-[#FFA21A] opacity-100 font-semibold hover:opacity-80 transition-opacity duration-300 text-[14px]'
            >
              {isSubmitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
            </button>
          </div>
          {error && <p className='text-red-500 mt-2'>{error}</p>}
        </form>
      </div>
      <div className='flex-shrink-0 w-full md:w-auto hidden md:block'>
        <img src={ContactImage} alt='Contact' className='w-full h-auto max-w-full md:max-w-md' />
      </div>
    </div>
  )
}

export default Contact
