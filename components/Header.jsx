import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className='w-full fixed top-0 left-0 z-999 h-33 flex items-center justify-center'>
      <nav className="liquid-nav md:w-[70%]! items-center justify-between px-10 hidden md:flex shadow-2xl">
        <div className="liquid-glass"></div>

        <div>
          <Image src={"/3dcart.png"} className="filter hue-rotate-0" unoptimized alt='3d cartoon by waqas' width={70} height={70} />
        </div>

        <ul className="nav-content w-[80%]">
          <li><Link href="/">{`<About />`}</Link></li>
          <li><Link href="/portfolio">{`<Projects />`}</Link></li>
          <li><Link href="/#contact">{`<Contact />`}</Link></li>
          <li><Link href={"/game"}>{`<Games />`}</Link></li>
          <li><Link href="/#blogs">{`<Blogs />`}</Link></li>
        </ul>

      </nav>






    </header>
  )
}

export default Header