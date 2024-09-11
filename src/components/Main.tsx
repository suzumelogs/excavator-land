import Button from './common/Button'

const Main = () => {
  return (
    <main className='flex flex-col items-center justify-center flex-1 p-4'>
      <h2 className='text-2xl font-semibold mb-4'>Introducing Our Product</h2>
      <p className='text-lg text-center mb-6'>
        Discover the best solution for your needs. Our product offers amazing features and benefits.
      </p>
      <Button type='submit' className='text-sm'>
        Xem chi tiết
      </Button>
    </main>
  )
}

export default Main
