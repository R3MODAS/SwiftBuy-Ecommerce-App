"use client"

import Link from "next/link";
import { FaRegUserCircle } from "react-icons/fa";
import { navlinks } from "../utils/navlinks";
import { IoCartOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "@/utils/store/hooks";
import { RiMenu3Fill } from "react-icons/ri";
import { toggleSidebar } from "@/utils/store/features/toggleSlice";

const Navbar = () => {

    const cartItems = useAppSelector(store => store.cart.items)
    const dispatch = useAppDispatch()

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar())
        document.body.classList.add("overflow-hidden")
    }

    return (
        <header className="h-20 flex items-center fixed left-0 right-0 w-full top-0 bg-white shadow-md z-10">
            <div className="container mx-auto flex justify-between items-center px-5">
                <div>
                    <Link href="/" className="w-16 font-black text-xl uppercase">
                        <span>Swift</span>
                        <span className="text-purple-600">Buy</span>
                    </Link>
                </div>
                <div className="items-center gap-x-10 sm:flex hidden">
                    <div className="text-base font-medium flex items-center gap-x-8 mr-5">
                        {
                            navlinks?.map((item) => (
                                <Link key={item?.id} href={item?.link}>{item?.title}</Link>
                            ))
                        }
                    </div>
                    <div className="text-base flex items-center gap-x-4">
                        <Link href="/signup">
                            <FaRegUserCircle className="text-2xl" />
                        </Link>
                        <Link href="/checkout" className="relative">
                            <span className="absolute -top-3.5 -translate-x-1/2 left-1/2 text-xs bg-purple-400 text-white w-5 h-5 flex items-center justify-center rounded-full">{cartItems?.length}</span>
                            <IoCartOutline className="text-3xl" />
                        </Link>
                    </div>
                </div>
                <div className="text-2xl sm:hidden flex items-center gap-x-3">
                    <button onClick={handleToggleSidebar}>
                        <RiMenu3Fill />
                    </button>
                    <Link href="/checkout" className="relative">
                        <span className="absolute -top-3.5 -translate-x-1/2 left-1/2 text-xs bg-purple-400 text-white w-5 h-5 flex items-center justify-center rounded-full">{cartItems?.length}</span>
                        <IoCartOutline className="text-3xl" />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Navbar