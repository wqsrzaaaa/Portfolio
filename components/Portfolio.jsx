import React from 'react';
import Image from 'next/image';
import SeeMyworkbtn from './SeeMyworkbtn';

const Portfolio = () => {


  const work = [
    {
      "id": 6,
      "title": "BloggedIn",
      "name": "BloggedIn",
      "date": "April 2025",
      "weblink": "https://blogedin.vercel.app/",
      "desc": "BloggedIn is a modern blogging platform designed for writers and content creators who seek a seamless online publishing experience. Users can effortlessly create, edit, and manage posts with a rich text editor that supports advanced formatting and media integration. The platform also includes an intuitive image cropping tool, ensuring visuals are always perfectly displayed alongside written content. Beyond just writing, BloggedIn allows users to customize their profiles and upload banners, giving each account a unique identity. Its responsive design guarantees smooth interaction across devices, making both reading and writing enjoyable whether on desktop or mobile. The interface is crafted with React and Tailwind CSS, while animations are handled through GSAP to deliver a dynamic user experience. Additionally, BloggedIn integrates Node.js and Express for backend functionality, paired with MongoDB to securely manage posts, user data, and images. Every feature is optimized for speed and efficiency, resulting in a professional-grade platform that combines aesthetic design with robust functionality. This project demonstrates a full-stack approach to modern web application development.",
      "img": "/blogDesk.png",
      "imgMbl": "/blogmbl.jpg",
      "tags": ["Full Stack", "API", "Database", "Animation"],
      "technologies": [
        "/react.png",
        "/tailwind.png",
        "/gsap.png",
        "/node-js.png",
        "/exp.png",
        "/mongodb.png"
      ]
    },
    {
      "id": 1,
      "title": "E-Commerce Website",
      "name": "Needle&Knot",
      "weblink": "https://wqsrzaaaa.github.io/NeedleKnot/",
      "date": " Feb, 2025",
      "desc": "Needle&Knot is a fully functional e-commerce platform built to offer a smooth and engaging shopping experience. With a focus on UI/UX design, it provides users with intuitive navigation, responsive layouts, and interactive product displays that work seamlessly across all devices. Features like product search, filtering, and category sorting make finding desired items effortless. The website leverages React for its dynamic front-end capabilities and Tailwind CSS for modern, responsive styling. GSAP animations enhance user interaction by creating fluid transitions, hover effects, and smooth scrolling. Every component is optimized to ensure users enjoy a visually appealing and highly functional shopping environment. The project highlights the creation of a complete front-end shopping experience without relying on a backend, demonstrating a clear understanding of React's component-based architecture. Needle&Knot not only reflects attention to design and usability but also serves as a showcase of practical front-end development skills applicable to real-world e-commerce solutions.",
      "img": "/NeedleKNotDesktop.png",
      "imgMbl": "/needlembl.jpg",
      "tags": ["Frontend", "Animation", "UI"],
      "technologies": [
        "/react.png",
        "/tailwind.png",
        "/gsap.png"
      ]
    },
  ]


  return (
    <section className="w-full min-w-42  py-20 md:px-10 px-5 " id="portfolio">
      <h2 className="text-4xl font-extrabold  mb-12">/My Portfolio</h2>
      <div className="flex flex-wrap justify-center gap-10 mb-12">
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
                <span style={{ color: "#234567" }} className="text-sm w-32 font-semibold ">
                  {project.date} &nbsp;
                </span>

                <div style={{ color: "#234567" }}>
                  {project.tags.map((e, i) => <span key={i}> {e + " >"} &nbsp;</span>)}
                </div>
              </div>

              <h2 className="text-3xl font-bold  mb-4 leading-tight">
                {project.title}
              </h2>

              <p className=" leading-relaxed mb-6">
                {project.desc.length > 233
                  ? project.desc.slice(0, 233) + "..."
                  : project.desc}

              </p>

              <div className="flex items-center flex-wrap gap-4 mb-8">
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

      <a href='/portfolio' >
        <SeeMyworkbtn label="See all work" />
      </a>
    </section>
  );
};

export default Portfolio;
