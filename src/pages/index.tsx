import Business from '~/components/Business'
import Contact from '~/components/Contact'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
import Product from '~/components/Product'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
      <Header />
      <Product />
      <Contact />
      <Business />
      <Footer />
    </div>
  )
}

export default Page
