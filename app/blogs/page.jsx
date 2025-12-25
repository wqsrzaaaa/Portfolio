import React from 'react'
import work from "@/blog"
import SeeMyworkbtn from '@/components/SeeMyworkbtn'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <section className="w-full py-25 px-5 md:px-10 " id="portfolio">
        <Header />
        <h2 className="text-4xl font-extrabold  mb-12">/My Blogs</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {work.map((project) => (
           <div
  key={project.id}
  className={`
    w-full flex flex-wrap justify-center gap-10
    rounded-3xl p-8 items-center
    bg-white/15 backdrop-blur-xl
    border border-white/30
    shadow-[0_8px_32px_rgba(31,38,135,0.25)]
  `}
>
  <div className={`flex flex-col ${project.img ? 'w-full lg:w-[60%]' : 'w-full'}`}>
    <div className="flex items-center gap-2">
      <span style={{ color: "#234567" }} className="text-sm font-semibold">
        {project.date} &nbsp;
      </span>
      <div style={{ color: "#234567" }}>
        {project.tags.map((e, i) => <span key={i}> {e + " >"} &nbsp;</span>)}
      </div>
    </div>

    <h2 className="text-3xl font-bold mb-4 leading-tight">
      {project.title}
    </h2>

    <p className="leading-relaxed mb-6">
      {project.desc.length > 233
        ? project.desc.slice(0, 233) + "..."
        : project.desc}
    </p>

    <a href={project.url ? project.url : `/blogs/${project.id}`}>
      <SeeMyworkbtn label="Learn more" />
    </a>
  </div>

  {project.img && (
    <div className="relative w-full lg:w-[35%]">
      <Image
        src={project.img}
        alt={project.title}
        width={350}
        height={400}
        className="rounded-2xl object-cover shadow-md"
      />
    </div>
  )}
</div>



          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page