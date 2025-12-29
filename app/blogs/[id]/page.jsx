

import React from 'react'
import work from "@/blog"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const projectId = resolvedParams.id;

  const project = work.find(p => p.id.toString() === projectId);


  if (!project) {
    return {
      title: `Not found | Waqas Raza`,
      description: `Project not found on Waqas Raza's portfolio.`,
    };
  }

  return {
    title: `${project.title} | Waqas Raza - Software Developer`,
    description: `Explore the ${project.title} project showcasing modern web development, UI/UX, and performance focused design.`,
    keywords: [
      "Waqas Raza",
      "wqsrz",
      "ecommerce website development",
      "Software developer tips",
      "software developer",
      project.title
    ],
    openGraph: {
      title: `${project.title} | Waqas Raza`,
      description: `Portfolio project by Waqas Raza (wqsrz), web developer.`,
      images: [project.img],
    },
  };
}


export default async function page({ params }) {
  const resolvedParams = await params;
  const projectId = resolvedParams.id;

  const project = work.find(p => p.id.toString() === projectId);

  if (!project) return <div>Project not found.</div>;
  return (
    <>
      <section className="max-w-6xl mx-auto px-6 pt-35 py-20">
        <Header />
        <h1 className="text-6xl font-extrabold mb-4">
          {project.title}
        </h1>

        <p style={{ color: "#234567" }} className=" mb-6">{project.date}</p>

        <Image
          src={project.img}
          alt={`Waqas Raza wqsrza web dev ${project.title}`}
          width={1200}
          height={600}
          className="rounded-xl   mb-10"
        />

          <div
            className=" leading-8 w-full  mb-10"
            dangerouslySetInnerHTML={{ __html: project.desc }}
          />

        <div className="flex gap-3 flex-wrap mb-8">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              style={{ backgroundColor: "#234567" }}
              className="px-4 py-1 rounded-full text-white  text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <a
          href={`/blogs`}
          className="  mt-2 underline flex items-center text-lg"
        >
          ← Back to blogs
        </a>
      </section>
      <Footer />
    </>
  );
};
