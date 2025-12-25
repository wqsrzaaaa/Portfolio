import React from 'react'
import SeeMyworkbtn from './SeeMyworkbtn'

const blogs = [
  {
    id: 1,
    title: "My Journey Into Web Development: How I Became Waqas Raza (wqsrz), a Web Developer",
    description: "After discovering web development, my life completely changed. What started as curiosity quickly became a passion. I dove headfirst into learning HTML, CSS, and JavaScript. At first, it felt overwhelming—there were so many concepts, frameworks, and tools to understand but I kept going. I spent hours experimenting, building small projects, and breaking things just to figure out how they worked.",
    url: "https://medium.com/@wqsrz/my-journey-into-web-development-how-i-became-waqas-raza-wqsrz-a-web-developer-7792be3e4662"
  },
  {
    id: 2,
    title: "Life Before Web Dev",
    description: "Hey, I'm Waqas Raza(wqsrz), want to share a bit about life before I became a web developer. Honestly? It wasn't as easy as it is today. it was messy, confusing, and full of trial and error. Before web development, I spent my days feeling… lost. I was constantly searching for ways to build a better life, learning new skills, trying different things, hoping something would click. From one thing to another, nothing really seemed to work.",
    url: "https://medium.com/@wqsrza07/life-before-web-dev-a09e34a5fd17"
  }
]

const BlogSec = () => {
  return (
    <section id='blogs' className="py-6 px-5 md:px-10">
      <h2 className="text-4xl font-extrabold mb-6">/Latest Blogs</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {blogs.map(blog => (
          <article key={blog.id} className="w-full rounded-3xl p-4 items-center bg-white/15 backdrop-blur-xl border border-white/30 shadow-[0_8px_32px_rgba(31,38,135,0.25)]">
            <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
            <p className=" mb-2">
              {blog.description.length > 135 ? blog.description.slice(0, 135) + "..." : blog.description}
            </p>
            <a href={blog.url}>
              <SeeMyworkbtn label='Read More' />
            </a>
          </article>
        ))}
      </div>

        <a href="/blogs">
          <SeeMyworkbtn  label='See all blogs'/>
        </a>
    </section>
  )
}

export default BlogSec
