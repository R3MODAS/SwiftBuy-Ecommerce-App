"use client"

import { toggleSidebar } from '@/utils/store/features/toggleSlice'
import { useAppDispatch, useAppSelector } from '@/utils/store/hooks'
import Link from 'next/link'
import { IoIosCloseCircleOutline } from 'react-icons/io'

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const isSidebarOpen = useAppSelector(store => store.toggle.isSidebarOpen)

  const handleCloseSidebar = () => {
    dispatch(toggleSidebar())
    document.body.classList.remove("overflow-hidden")
  }

  return (
    <div className={`login-sidebar fixed top-0 right-0 h-full overflow-y-scroll bg-white transition-all duration-500 z-20 px-10 py-10 flex flex-col w-full ${isSidebarOpen ? "translate-x-0" : "translate-x-full"}`}>
      <button onClick={handleCloseSidebar} className='text-3xl'>
        <IoIosCloseCircleOutline />
      </button>
      <div className='flex flex-col items-center justify-center text-xl font-medium gap-10 h-full'>
        <Link onClick={handleCloseSidebar} href="/">Home</Link>
        <Link onClick={handleCloseSidebar} href="/">About</Link>
        <Link onClick={handleCloseSidebar} href="/">Blog</Link>
        <Link onClick={handleCloseSidebar} href="/">Contact</Link>
      </div>
    </div>
  )
}

export default Sidebar