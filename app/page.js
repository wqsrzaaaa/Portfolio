import AboutPage from '@/components/AboutPage'
import BlogSec from '@/components/BlogSec'
import Contact from '@/components/Contact'
import FirstPage from '@/components/First'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Portfolio from '@/components/Portfolio'
import Skills from '@/components/Skills'
import WhyMe from '@/components/WhyMe'
import React from 'react'

const page = () => {
  return (
    <main>
      <Header />
      <FirstPage />
      <AboutPage />
      <Portfolio />
      <Skills />
      <BlogSec />
      <WhyMe />
      <Contact />
      <Footer />
    </main>
  )
}

export default page 