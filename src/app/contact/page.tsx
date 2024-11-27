import { MailIcon } from "lucide-react";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#13131A] text-white w-full px-4 py-8 md:px-8">
      {/* Main Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-indigo-400">Contact Us</h1>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 md:gap-24">

        <div className="md:w-1/3">
          <h2 className="text-indigo-400 text-2xl font-medium mb-2">
            Connect with me:
          </h2>
          <p className="text-gray-400 mb-6">
            Satisfied with me? Please contact me
          </p>

          <div className="flex gap-4">
            <a className="text-indigo-400 hover:text-indigo-300" href='https://www.linkedin.com/in/saima-qadri-b4a6582b9/' target='_blank' rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a className="text-indigo-400 hover:text-indigo-300" href="https://github.com/saima08" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6" />
            </a>
            <a className="text-indigo-400 hover:text-indigo-300" href="mailto:saimaqadri008@gmail.com">
              <MailIcon className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="md:w-2/3">
          <h2 className="text-2xl font-medium mb-8">
            Contact me, let&apos;s make magic together
          </h2>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name:"
              className="bg-[#1E1E27] rounded p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <input
              type="email"
              placeholder="Email:"
              className="bg-[#1E1E27] rounded p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <textarea
              placeholder="Message:"
              rows={4}
              className="bg-[#1E1E27] rounded p-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />

            <button
              type="submit"
              className="bg-indigo-500 text-white py-3 px-6 rounded w-24 hover:bg-indigo-600 transition-colors"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
