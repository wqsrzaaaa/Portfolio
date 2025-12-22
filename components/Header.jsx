"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'

const Header = () => {

  const menuRef = useRef(null);

  const closeMenu = () => {
    if (menuRef.current) {
      menuRef.current.checked = false;
    }
  };

  return (
    <header className='w-full fixed top-0 left-0 z-999 h-33 flex items-center justify-center'>
      <nav className="liquid-nav md:w-[70%]! items-center justify-between px-10 hidden lg:flex shadow-2xl">
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

      <nav className=' w-full  h-12  items-center justify-between px-10 lg:hidden flex '>

        <input ref={menuRef} className="menu-icon hidden" type="checkbox" id="menu-icon" name="menu-icon" />
        <label htmlFor="menu-icon"></label>
        <nav className="nav ">
          <div className=" w-full flex items-center justify-center mb-6">
            <Image
              src="/3dcart.png"
              unoptimized
              alt="3d cartoon by waqas Raza"
              width={100}
              height={100}
            />
          </div>


          <ul className="text-4xl font-extrabold gap-8 flex flex-col">

            <div className=" w-full flex items-center justify-center ">
              <Image
                src="/3dcart.png"
                unoptimized
                alt="3d cartoon by waqas Raza"
                width={100}
                height={100}
              />
            </div>

            <li onClick={closeMenu}>
              <Link href="/">{`<About />`}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/portfolio">{`<Projects />`}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/#contact">{`<Contact />`}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/game">{`<Games />`}</Link>
            </li>
            <li onClick={closeMenu}>
              <Link href="/#blogs">{`<Blogs />`}</Link>
            </li>
          </ul>
        </nav>

      </nav>







    </header>
  )
}

export default Header