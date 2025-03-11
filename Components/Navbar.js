import Link from "next/link"
import Image from "next/image"
const Navbar = () => {
  return (
      <nav className='h-20 w-full flex justify-between items-center sticky z-10 top-0 bg-purple-400 text-white px-8 py-2'>
        <div className="logo">
            <Image src="/nuthatch.png" className='border-white'  width={70}
          height={37} alt="Logo" />
        </div>
        <ul className='flex justify-evenly items-center gap-5 text-black'>
            <li><Link href = '/' >Home</Link></li>
            <li><Link href = '/about' >About</Link></li>
            <li><Link href = '/contact' >Contact</Link></li>
            <li><Link href = '/services' >Services</Link></li>
            {/* <li><Link href = '/api/postGet' >MongoDbdata</Link></li> */}
        </ul>
      </nav>
  )
}

export default Navbar
