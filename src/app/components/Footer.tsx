import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import React from 'react';
import { MailIcon } from 'lucide-react';

function Footer() {
  return (
    <div className="bg-[#0f1117]">
      <footer className="max-w-6xl mx-auto pt-8 pb-8 border-t border-gray-800 text-center">
        <div className="flex flex-col md:flex-row justify-center items-center gap-4">
          <p className="text-gray-400">©2024 Saima Ishaq</p>

          <div className="flex gap-6 text-gray-400 justify-center">
            <span>Fullstack Developer</span>
            <span>UI Designer</span>
         
          </div>

          <p className="text-gray-400">Designed by @saimaishaq</p>

          <div className="flex gap-4 justify-center">
           
            <a className="text-indigo-400 hover:text-indigo-300" href='https://www.linkedin.com/in/saima-qadri-b4a6582b9/' target='_blank'>
              <FaLinkedinIn className="w-5 h-5" />
            </a>
            <a className="text-indigo-400 hover:text-indigo-300" href='https://github.com/saima08' target='_blank'>
              <FaGithub className="w-5 h-5" />
            </a>
            <a className="text-indigo-400 hover:text-indigo-300" href='mailto:saimaqadri008@gmail.com'>
              <MailIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
