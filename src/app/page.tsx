import {
  DatabaseIcon,
  MailIcon,
  CalculatorIcon,
  DollarSignIcon,
  Gamepad2Icon,
  ClipboardIcon,
  WholeWordIcon,
} from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: <CalculatorIcon className="w-12 h-12 text-[#8b5cf6] mb-4" />,
    title: "Npm Calculator",
    description:
      "This CLI-based calculator, built with TypeScript and Node.js, performs essential operations: addition, subtraction, multiplication, and division.",
    href: "https://github.com/saima08/simple-calculator-typeScript",
  },
  {
    icon: <DollarSignIcon className="w-12 h-12 text-[#8b5cf6] mb-4" />,
    title: "Npm Currency Converter",
    description:
      "This CLI-based currency converter, built with TypeScript and Node.js, efficiently converts currencies in real time using the latest exchange rates.",
    href: "https://github.com/saima08/currency_convertor",
  },
  {
    icon: <Gamepad2Icon className="w-12 h-12 text-[#8b5cf6] mb-4" />,
    title: "Npm Number Guessing Game",
    description:
      "This CLI-based number guessing game, built with TypeScript and Node.js, offers an engaging experience by challenging users to guess a randomly generated number within a defined range.",
    href: "https://github.com/saima08/cli_number-guessing-game",
  },
  {
    icon: <ClipboardIcon className="w-12 h-12 text-[#8b5cf6] mb-4" />,
    title: "Npm To-do List",
    description:
      "This CLI-based to-do list application, built with TypeScript and Node.js, helps users manage tasks efficiently by allowing them to add, update, and delete tasks directly from the command line.",
    href: "https://github.com/saima08/simple-to_do-list",
  },
  {
    icon: <WholeWordIcon className="w-12 h-12 text-[#8b5cf6] mb-4" />,
    title: "Npm Word Counter",
    description:
      "This CLI-based word counter, built with TypeScript and Node.js, quickly analyzes text to provide accurate word and character counts, making it a handy tool for writers and developers.",
    href: "https://github.com/saima08/word_countor",
  },
  {
    icon: <DatabaseIcon className="w-12 h-12 text-[#8b5cf6] mb-4" />,
    title: "Web Scraping",
    description:
      "Collect and analyze data from the web with efficient web scraping techniques.",
    href: "https://www.github.com/saima08",
  },
];


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#0f1117] text-white">
      <main className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center justify-between py-12">
          <div className="text-center md:text-left mb-12 md:mb-0">
            <p className="text-xl md:text-2xl mb-2">Hello, I'm</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Saima Ishaq</h2>
            <p className="text-gray-400 mb-8 max-w-md">
              Front-end developer, UI designer. I create seamless web
              experiences for front-end users.
            </p>
            <Link href="/about">
              <button className="bg-[#8b5cf6] px-6 py-3 rounded-md hover:bg-[#7c3aed] transition">
                About Me
              </button>
            </Link>
          </div>
          <div className="relative">
            <div className="w-72 h-72 md:w-80 md:h-80 bg-[#8b5cf6] rounded-full absolute -z-10 right-0 blur-sm"></div>
            <Image
              src="/images/profile.jpeg"
              alt="Profile Image"
              className="w-64 h-64 md:w-72 md:h-72 object-cover rounded-full border-4 border-white/10"
              width={300}
              height={300}
            />
          </div>
        </div>

        {/* Projects Section */}
        <section className="py-16">
          <h3 className="text-[#8b5cf6] text-2xl mb-12">My Projects:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="border border-[#8b5cf6] rounded-lg p-8 hover:bg-[#8b5cf6]/5 transition"
              >
                {service.icon}
                <h4 className="text-[#8b5cf6] mb-4">{service.title}</h4>
                <p className="text-gray-400 mb-4">{service.description}</p>
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-4 py-2 text-white bg-[#8b5cf6] rounded hover:bg-[#6d41d8] transition"
                >
                  View Code
                </a>
              </div>
            ))}
          </div>
        </section>



        {/* Contact Section */}
        <section className="py-16">
          <div className="flex flex-col md:flex-row justify-between gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-[#8b5cf6] text-2xl mb-4">Connect with me:</h3>
              <p className="text-gray-400 mb-6">
                Satisfied with me? Please contact me
              </p>
              <div className="flex gap-6">
                <a
                  href="https://www.linkedin.com/in/saima-qadri-b4a6582b9/"
                  target="_blank"
                  className="transition"
                >
                  <FaLinkedin className="w-6 h-6 text-[#8b5cf6] hover:text-[#7c3aed] cursor-pointer" />
                </a>

                <a
                  href="https://github.com/saima08"
                  target="_blank"
                  className="transition"
                >
                  <FaGithub className="w-6 h-6 text-[#8b5cf6] hover:text-[#7c3aed] cursor-pointer" />
                </a>

                <a
                  href="mailto:saimaqadri008@gmail.com"
                  className="transition"
                >
                  <MailIcon className="w-6 h-6 text-[#8b5cf6] hover:text-[#7c3aed] cursor-pointer" />
                </a>
              </div>

            </div>

            {/* Contact Form */}
            <div className="max-w-md w-full">
              <h3 className="text-2xl mb-8">
                Contact me, let's make magic together
              </h3>
              <form className="flex flex-col gap-6">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[#161822] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-[#161822] p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8b5cf6]"
                />
                <textarea
                  placeholder="Message"
                  className="bg-[#161822] p-4 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#8b5cf6] resize-none"
                ></textarea>
                <button className="bg-[#8b5cf6] px-8 py-3 rounded-md hover:bg-[#7c3aed] transition w-32">
                  Send
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
