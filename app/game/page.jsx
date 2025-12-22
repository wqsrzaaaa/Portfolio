"use client";

import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import SeeMyworkbtn from "@/components/SeeMyworkbtn"; // assuming you have this button component

const project = {
  title: "2048 Game",
  date: "March 2024",
  desc: `Play the classic 2048 game online! Merge tiles and reach 2048. Fun for casual and hardcore gamers alike.`,
  weblink: "https://game2048-wqsrz.netlify.app/",
};

const GamePage = () => {
  return (
    <section className="max-w-6xl select-none mx-auto px-6 pt-35 py-20">
      <Header />

      <h1 className="text-6xl font-extrabold mb-4">{project.title}</h1>
      <p style={{ color: "#234567" }} className="mb-6">{project.date}</p>

      <div className="hidden md:block w-full h-screen border rounded-2xl border-blue-300">
        <iframe
          src={project.weblink}
          title="2048 Game"
          className="w-full h-full"
          frameBorder="0"
          allowFullScreen
        />
      </div>

      <div className="md:hidden w-full h-[60vh] flex flex-col items-center justify-center border rounded-2xl border-blue-300 text-center px-6">
        <h2 className="text-2xl font-bold mb-3">Not available on small screens</h2>
        <p className="text-gray-600 mb-4">
          Please visit this page on a desktop or larger screen to play the game.
        </p>

        <a
          href={project.weblink}
          target="_blank"
          className="underline font-semibold"
        >
          Visit site directly →
        </a>
      </div>


      <div className="w-full flex py-10 flex-wrap items-center gap-10 md:justify-between justify-center">
        <p
          className="text-lg leading-8 w-full lg:w-[60%] mb-10"
          dangerouslySetInnerHTML={{ __html: project.desc }}
        />
      </div>



      <a
        href={`/`}
        className="mt-2 underline flex items-center text-lg"
      >
        ← Back to Home
      </a>
    </section>
  );
};

export default GamePage;
