import React from 'react';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <>
      <section className="w-full min-h-screen flex flex-col  justify-center px-5 sm:text-start text-center md:px-10 py-20">
        <h2 className="text-5xl font-extrabold w-full  text-start mb-16 ">
          /About Me
        </h2>
        <div className='w-full flex flex-wrap-reverse justify-between '>

          <div className='md:w-1/2 w-full min-w-45'>
            <p className="text-lg max-w-4xl  mb-16">
              <strong>Waqas Raza (wqsrz)</strong>, a committed <strong>full stack developer</strong> and <strong>web designer</strong> based in Sydney, Australia. I specialize in creating robust, scalable, and interactive web applications that help businesses grow and individuals bring their ideas to life.
            </p>
            <p className="text-lg max-w-4xl  mb-16">
              My expertise spans <strong>frontend development</strong> with React and Next.js for better performance, and <strong>backend development</strong> using Node.js and mongoDB and modern server technologies. I focus on building solutions that are not only visually stunning and user-friendly, but also performant, secure, and SEO-friendly.
            </p>
            <p className="text-lg max-w-4xl ">
              Whether you need a full featured web application, a responsive website, e commerce, or a custom solution tailored to your business needs, I can help turn your ideas into real, working products. My focus is to deliver results that make an impact and drive success for my clients.
            </p>
          </div>
          <div className='md:w-[35%] w-full min-w-85 md:-mt-65 pb-5 h-full flex flex-col gap-3 items-center justify-center relative'>
            <Image src={"/me33.png"} alt='Waqas Raza (wqsrz)' width={500} height={500} className='relative z-10 me' />
          </div>


        </div>
      </section>
    </>
  );
};

export default AboutPage;
