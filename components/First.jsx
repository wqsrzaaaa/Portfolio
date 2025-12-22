"use client"

import React from 'react'
import Head from 'next/head'
import SeeMyworkbtn from './SeeMyworkbtn'

const FirstPage = () => {
  return (
    <>
      <Head>
        <title>Waqas Raza (wqsrz) | Full Stack Developer & Web Designer</title>
        <meta
          name="description"
          content="Waqas Raza (wqsrz) is a skilled full stack developer and web designer based in Sydney, Australia. I help businesses and individuals bring their ideas to life by building robust, interactive, and scalable web applications. From designing responsive user interfaces to creating efficient backend systems, I turn concepts into real, working solutions that drive results."
        />
        <meta
          name="keywords"
          content="Waqas Raza, wqsrz, full stack developer, web designer, React developer, Next.js developer, backend developer, portfolio, web applications Sydney"
        />
      </Head>


      <div className='w-full sm:pt-0 flex items-center md:items-end py-10 sm:min-h-screen h-fit pt-40  px-10'>
        <div className='md:w-[80%] select-none w-full min-h-120 gap-0 flex flex-col justify-center'>
          <h3 className='text-4xl'>Hello, I'm</h3>
          <h2 className='waqas text-4xl md:text-[65px] font-extrabold'>Waqas Raza.</h2> 
          <h1 className='md:text-4xl text-2xl'>“I Transform Ideas into Interactive Solutions”</h1>
          <p className='mt-10'>
            Self taught Full Stack developer Waqas Raza has over 1.5 years of experience creating interactive, user friendly designs and web applications.
            I specialize in SEO friendly development, mobile responsive layouts, and applying color psychology to make businesses stand out.
            I love building innovative solutions and collaborating with teams, and turn ideas into engaging digital experiences.
          </p>

          <SeeMyworkbtn label="See my work" />
          <a
            href="/Waqascv.pdf"
            download="Waqas_Resume.pdf"
            style={{color : "#234567" }}
            className="w-fit font-semibold mt-4 ml-3 cursor-pointer border-b-2 border-dashed border-b-blue-500"
          >
            Download Resume
          </a>



        </div>
      </div>
    </>
  )
}

export default FirstPage
