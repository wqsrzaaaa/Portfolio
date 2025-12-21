
import React from "react";

const WhyMe = () => {

  return (
    <section className="w-full py-24 px-5 relative lg:px-10">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-10 ">
        Why Work With Me?
      </h2>

      <div className="w-full flex items-center justify-between flex-wrap gap-5 text-lg">
        {/* 1 */}
        <div className="md:w-[45%] min-h-[30vh] bg-white/15 backdrop-blur-xl border border-white/30 shadow-xl w-full p-6 rounded-2xl relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-3">Clean & Modern Code</h2>
          <p className="leading-relaxed">
              I write clean, reusable, and scalable frontend code following the latest React and Next.js patterns. My focus is always on maintainable structure and long-term performance."
          </p>
        </div>

        {/* 2 */}
        <div className="md:w-[45%] min-h-[30vh] bg-white/15 backdrop-blur-xl border border-white/30 shadow-xl w-full p-6 rounded-2xl relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-3">Pixel-Perfect UI</h2>
          <p className="leading-relaxed">
              I convert Figma designs into smooth, responsive, pixel-perfect interfaces using Tailwind, animations, and UI best practices.
          </p>
        </div>

        {/* 3 */}
        <div className="md:w-[45%] min-h-[30vh] bg-white/15 backdrop-blur-xl border border-white/30 shadow-xl w-full p-6 rounded-2xl relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-3">Strong Animation Skills</h2>
          <p className="leading-relaxed">
            
              I bring websites to life using GSAP, Framer Motion, and smooth transitions that enhance user experience without slowing performance.
          </p>
        </div>

        {/* 4 */}
        <div className="md:w-[45%] min-h-[30vh] bg-white/15 backdrop-blur-xl border border-white/30 shadow-xl w-full p-6 rounded-2xl relative overflow-hidden">
          <h2 className="text-2xl font-bold mb-3">Focused & Fast Learner</h2>
          <p className="leading-relaxed">
              I continuously improve myself by building real projects. I adapt fast and deliver high-quality work under deadlines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyMe;
