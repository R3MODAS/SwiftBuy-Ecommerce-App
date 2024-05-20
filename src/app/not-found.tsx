import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-white flex justify-center items-center mt-28 text-center px-5">
      <div className="container mx-auto">
        <h2 className='md:text-8xl text-7xl font-bold'>404</h2>
        <img className='mx-auto mb-3' src="./assets/error.gif" alt="error" />
        <h3 className='text-3xl font-semibold'>Looks like you&apos;re lost</h3>
        <p className='text-base font-medium'>the page you are looking for is not available!</p>
        <Link href="/" className="my-5 inline-block common-btn">Go to Home</Link>
      </div>
    </section>
  )
}