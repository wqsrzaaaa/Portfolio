import Image from 'next/image'
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
          <li> <a href="/">{"<About />"} </a></li>
          <li> <a href="/portfolio">{"<Projects />"} </a></li>
          <li>
            <a href="/#contact" className="cursor-pointer">{"<Contact />"}</a>
          </li>
          <li>{"<Games />"}</li>
          <li>{"<Blogs />"}</li>
        </ul>
      </nav>






    </header>
  )
}

export default Header