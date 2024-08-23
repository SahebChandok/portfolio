'use client'
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoMdHand } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";
import { FaRegPaperPlane } from "react-icons/fa6";
import { FaArrowDownLong } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { PiPenNibStraightLight } from "react-icons/pi";
import { FiAlignJustify } from "react-icons/fi";
import Skills from '../components/skills'
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Interest from "@/components/interest";
import Contact from "@/components/contact";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Saheb Chandok</title>
      </Head>
      <main>
        <div id="about" className="text-gray-600 border-b-2 border-gray-200 max-w-[1400px] mx-auto">
          <nav className="py-5 px-4 md:px-10 mb-12 z-50 flex justify-between w-screen fixed top-0 left-0 bg-gray-50">
            <h1 className="text-lg md:text-xl text-gray-600">{"{developedbysaheb}"}</h1>
            
            <ul className="hidden lg:flex lg:flex-row sm:flex-col gap-x-8 items-center text-lg">
              <li><a href="#about" className="hover:text-black">About</a></li>
              <li><a href="#skills" className="hover:text-black">Skills</a></li>
              <li><a href="#experience" className="hover:text-black">Experience</a></li>
              <li><a href="#projects" className="hover:text-black">Projects</a></li>
              <li><a href="#interests" className="hover:text-black">Interests</a></li>
              <li><a href="#contact" className="hover:text-black">Contact</a></li>
              <li></li>
            </ul>
            <FiAlignJustify className="lg:hidden text-3xl font-bold" />
          </nav>

          <div className="lg:flex justify-between mt-20 px-4 md:px-10 lg:px-0">
            <div className="hidden lg:flex flex-col items-center justify-center">
              <ul>
                <li className="pb-10 text-3xl">
                  <Link href="https://www.linkedin.com/in/saheb-singh-chandok/"><FaLinkedinIn /></Link>
                </li>
                <li className="pb-10 text-3xl">
                  <Link href="https://github.com/SahebChandok"><FaGithub /></Link>
                </li>
                <li className="pb-10 text-3xl">
                  <Link href="https://www.instagram.com/saheb_chandok/"><FaInstagram /></Link>
                </li>
              </ul>
            </div>

            <div className="lg:pt-20 w-full lg:w-[750px] lg:ml-0 lg:pl-20">
              <h2 className="flex items-center text-4xl lg:text-4xl xl:text-6xl font-extrabold text-gray-700 lg:pt-20">
                Saheb Chandok
                <IoMdHand className="text-yellow-500 ml-2 text-3xl lg:text-6xl" />
              </h2>

              <div className="flex items-center py-5 text-gray-500">
                <PiPenNibStraightLight className="mr-2 font-extrabold text-3xl lg:text-4xl" />
                <TypeAnimation
                  sequence={[
                    'Graduate Student',
                    1000,
                    'Web Developer',
                    1000,
                    'Software Developer',
                    1000,
                    'Football Player',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="text-3xl lg:text-5xl"
                  style={{ display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>

              <p className="text-l lg:text-xl mt-5 w-fit">
                &quot;I&apos;m a Software Developer with over a year of experience in the IT industry. Currently, I am pursuing a Master&apos;s degree in Applied Computer Science from Concordia University, Canada. Feel free to explore my projects and get in touch.&quot;
              </p>

              <a className="bg-gray-700 text-white flex items-center my-12 rounded-2xl px-7 py-5 w-[159.08px] hover:cursor-pointer" href="#contact">
                Say Hello <FaRegPaperPlane className="ml-4" />
              </a>
              
              <p className="md:hidden">Connect With Me !</p>
              <div className="md:hidden flex flex-row items-center mt-10">
                  <div className="pr-5 text-3xl">
                  
                      <Link href="https://www.linkedin.com/in/saheb-singh-chandok/"><FaLinkedinIn /></Link>
                    
                  </div>
                  <div className="px-5 text-3xl">
                  
                      <Link href="https://github.com/SahebChandok"><FaGithub /></Link>
                   
                  </div>
                  <div className="px-5 text-3xl"> 
                   
                      <Link href="https://www.instagram.com/saheb_chandok/"><FaInstagram /></Link>
                 
                  </div>
              </div>

              <h2 className="hidden md:flex md:flex-row items-center mt-28">Scroll Down <FaArrowDownLong /></h2>
            </div>

            <div className="flex justify-center content-center">
              <Image src="/picture.png" alt="Not Found" width={500} height={700} className="w-[400px] h-[500px] md:w-[580px] md:h-[750px]" />
            </div>
          </div>
        </div>

        {/* Skills component */}
        <Skills />

        {/* Experience Component */}
        <Experience />

        {/* Projects Component */}
        <Projects />

        {/*Interests Component*/}
        <Interest />

        {/*Contact Component */}
        <Contact />
      </main>
    </div>

  );
}
