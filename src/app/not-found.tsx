import Link from 'next/link'

export default function NotFound() {
  return (
    <section className="bg-white flex justify-center items-center min-h-screen text-center">
      <div className="container mx-auto">
        <h2 className='text-8xl font-bold'>404</h2>
        <div className="error-bg"></div>
        <h3 className='text-3xl font-semibold'>Looks like you&apos;re lost</h3>
        <p className='text-base font-medium'>the page you are looking for is not available!</p>
        <Link href="/" className="bg-purple-600 text-white px-5 py-[10px] my-5 inline-block rounded-md">Go to Home</Link>
      </div>
    </section>
  )
}