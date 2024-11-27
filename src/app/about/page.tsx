import { CodeIcon } from "lucide-react";
import React from "react";
import Image from "next/image";
import { TbBrandNextjs, TbBrandTypescript } from "react-icons/tb";

export default function AboutMe() {
  return (
    <div className="w-full min-h-screen bg-slate-900 text-white p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="lg:w-2/5 xl:w-1/3">
            <div className="sticky top-8 transition-transform duration-300 hover:scale-[1.02]">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl h-96">
                <Image
                  src="/images/profile.jpeg"
                  alt="profile Image"
                  className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  width={502}
                  height={450}
                />
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 xl:w-2/3 space-y-10">
            <div className="space-y-6">
              <h1 className="text-indigo-400 text-4xl lg:text-5xl font-bold tracking-tight">
                About me
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                Hi, I&apos;m Saima Ishaq, a front-end developer with over 1 year of experience in HTML and CSS.
                I also create user-friendly programs using TypeScript, combining design and functionality
                to build efficient and engaging solutions.
              </p>
            </div>

            <div className="py-6 border-y border-gray-700">
              <div className="flex items-baseline gap-4">
                <span className="text-6xl lg:text-7xl font-bold text-indigo-400 transition-colors duration-300 hover:text-indigo-300">
                  1+
                </span>
                <p className="text-gray-300 text-lg">
                  I have some experience in specialized in building programs
                  that are user-friendly in Next.js environment, I also have some experience in
                  HTML, CSS &amp; TypeScript.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="group bg-indigo-600/90 p-8 rounded-2xl transition-all duration-300 hover:bg-indigo-600 hover:shadow-xl hover:shadow-indigo-600/20">
                <CodeIcon className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-xl mb-2">Front-end</h3>
                <p className="text-indigo-100">HTML , CSS DESIGNER</p>
              </div>

              <div className="group bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:bg-gray-700 hover:shadow-xl">
                <TbBrandTypescript className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-xl mb-2">TypeScript</h3>
                <p className="text-gray-300">PROGRAMMER</p>
              </div>

              <div className="group bg-gray-800 p-8 rounded-2xl transition-all duration-300 hover:bg-gray-700 hover:shadow-xl">
                <TbBrandNextjs className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110" />
                <h3 className="font-bold text-xl mb-2">Next.js</h3>
                <p className="text-gray-300">DEVELOPER</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
