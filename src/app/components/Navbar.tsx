import Link from "next/link"

const Navbar = () => {
    return (
        <header className="h-20 flex items-center fixed left-0 right-0 w-full top-0 bg-white shadow-md z-10">
            <div className="container mx-auto flex justify-between">
                <div>
                    <Link href="/" className="w-16 font-black text-xl uppercase">
                        <span>Swift</span>
                        <span className="text-purple-600">Buy</span>
                    </Link>
                </div>
                <div className="text-base font-medium flex items-center gap-x-8">
                    <Link href="/">Home</Link>
                    <Link href="/">About</Link>
                    <Link href="/checkout">
                        Cart <span>(0)</span>
                    </Link>
                </div>
                <div className="text-base font-medium text-white">
                    <Link href="/login" className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors">Login</Link>
                    <Link href="/signup" className="bg-purple-600 px-6 py-3 ml-4 rounded-lg hover:bg-purple-700 transition-colors">Signup</Link>
                </div>
            </div>
        </header>
    )
}

export default Navbar