import React from 'react'
import work from "@/work"
import SeeMyworkbtn from '@/components/SeeMyworkbtn'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const page = () => {
  return (
    <>
      <section className="w-full py-25 px-5 md:px-10 " id="portfolio">
        <Header />
        <h2 className="text-4xl font-extrabold  mb-12">/My Portfolio</h2>
        <div className="flex flex-wrap justify-center gap-10">
          {work.map((project) => (
            <div
              key={project.id}
              className="
  grid w-full grid-cols-1 lg:grid-cols-2 gap-10
  rounded-3xl p-8 items-center
  bg-white/15 backdrop-blur-xl
  border border-white/30
  shadow-[0_8px_32px_rgba(31,38,135,0.25)]
"
            >
              <div className="flex flex-col">
                <div className='flex items-center  gap-2'>
                  <span style={{ color: "#234567" }} className="text-sm font-semibold ">
                    {project.date} &nbsp;
                  </span>

                  <div style={{ color: "#234567" }}>
                    {project.tags.map((e, i) => <span key={i}> {e + " >"} &nbsp;</span>)}
                  </div>
                </div>

                <h2 className="text-3xl font-bold  mb-4 leading-tight">
                  {project.title}
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  {project.desc.length > 233
                    ? project.desc.slice(0, 233) + "..."
                    : project.desc}

                </p>

                <div className="flex items-center gap-4 mb-8">
                  {project.technologies.map((tech, i) => (
                    <img
                      key={i}
                      src={tech}
                      alt="technology"
                      className="w-8 h-8 object-contain opacity-80 hover:opacity-100 transition"
                    />
                  ))}
                </div>

                <a href={`/portfolio/${project.id}`}>
                  <SeeMyworkbtn label='Learn more' />
                </a>
              </div>

              <div className="relative">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={600}
                  height={500}
                  className="rounded-2xl object-cover shadow-md"
                />
              </div>
            </div>


          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export default page