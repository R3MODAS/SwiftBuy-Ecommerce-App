"use client"

import Link from "next/link"

const Signup = () => {
  return (
    <div className="container mx-auto my-10 px-5">
      <div className="flex flex-col justify-center min-h-screen max-w-md mx-auto sm:px-0">
        <h2 className="text-2xl text-center font-bold">Welcome to the SwiftBuy</h2>
        <div className="mt-5">
          <form>
            <div className="flex items-center gap-x-5 justify-center">
              <div className="relative mb-4 w-1/2">
                <input
                  type="text"
                  id="firstname"
                  className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="firstname"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  First name
                </label>
              </div>
              <div className="relative mb-4 w-1/2">
                <input
                  type="text"
                  id="lastName"
                  className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                  placeholder=""
                />
                <label
                  htmlFor="lastName"
                  className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                >
                  Last name
                </label>
              </div>
            </div>
            <div className="relative mb-4">
              <input
                type="email"
                id="email"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=""
              />
              <label
                htmlFor="email"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Email
              </label>
            </div>
            <div className="relative mb-5">
              <input
                type="password"
                id="password"
                className="block px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-1 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-600 peer"
                placeholder=""
              />
              <label
                htmlFor="password"
                className="absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-purple-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
              >
                Password
              </label>
            </div>
            <div className="text-center">
              <button className="bg-purple-600 text-white px-5 py-3 rounded-md text-sm font-medium">Signup</button>
              <p className="mt-4 text-sm">Already Registered? <Link href="/login" className="text-purple-400">Login in</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup