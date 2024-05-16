import Link from "next/link"

const Navbar = () => {
  return (
    <header className="h-20 flex items-center fixed left-0 right-0 w-full top-0 bg-white shadow-md z-10">
        <div className="container mx-auto flex items-center justify-between">
            <div>
                <Link href="/" className="w-16 font-bold text-xl uppercase">
                    <span>Swift</span>
                    <span className="text-purple-600">Buy</span>
                </Link>
            </div>
            <ul className="text-base font-medium flex items-center gap-x-8">
                <li className="hover:text-black/80 transition-colors">
                    <Link href="/">Home</Link>
                </li>
                <li className="hover:text-black/80 transition-colors">
                    <Link href="/">Shop</Link>
                </li>
                <li className="hover:text-black/80 transition-colors">
                    <Link href="/">Blog</Link>
                </li>
                <li className="hover:text-black/80 transition-colors">
                    <Link href="/">Contact</Link>
                </li>
                <li className="hover:text-black/80 transition-colors">
                    <Link href="/checkout">Cart (0)</Link>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar