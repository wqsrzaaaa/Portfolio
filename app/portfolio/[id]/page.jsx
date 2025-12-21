import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SeeMyworkbtn from "@/components/SeeMyworkbtn";
import work from "@/work.json";
import Image from "next/image";


export async function generateMetadata({ params }) {
  const { id } = await params;

  const project = work.find(
    (item) =>
      item.title.toLowerCase().replace(/\s+/g, "-") ===
      id.toLowerCase()
  );

  if (!project) {
    return {
      title: "Project not found | Waqas Raza",
    };
  }

  return {
    title: `${project.title} | Waqas Raza - Full Stack Developer`,
    description: `Waqas Raza (wqsrz), a web developer. Explore the ${project.title} project showcasing modern web development, UI/UX, and performance-focused design.`,
    keywords: [
      "Waqas Raza",
      "wqsrz",
      "web developer",
      "frontend developer",
      "react developer",
      project.title
    ],
    openGraph: {
      title: `${project.title} | Waqas Raza`,
      description: `Portfolio project by Waqas Raza (wqsrz), web developer.`,
      images: [project.img],
    },
  };
}


export default async function ProjectPage({ params }) {
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

        <div className="w-full flex py-10 flex-wrap items-center gap-10 md:justify-between justify-center ">
          <p
            className="text-lg leading-8 w-full lg:w-[60%] mb-10"
            dangerouslySetInnerHTML={{ __html: project.desc }}
          />
          <div className="w-80 h-140 rounded-2xl bg-amber-700 overflow-hidden">
            <Image src={project.imgMbl}
              width={350}
              height={350}
              className="object-cover w-full h-full "
              alt={`Waqas Raza wqsrza web developer ${project.title}`} />
          </div>
        </div>


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

        {/* Technologies */}
        <div className="flex gap-4 flex-wrap">
          {project.technologies.map((tech, i) => (
            <Image
              key={i}
              src={tech}
              alt={`Waqas Raza wqsrza web dev ${project.title}`}
              className="object-contain"
              width={45}
              height={40}
            />
          ))}
        </div>

        <a
          href={project.weblink}
          target="_blank"
          className="inline-block mt-12  text-lg"
        >
          <SeeMyworkbtn label="Visit Website" />
        </a>

        <a
          href={`/portfolio`}
          className="  mt-2 underline flex items-center text-lg"
        >
          ← Back to projects
        </a>
      </section>
      <Footer />
    </>
  );
};

