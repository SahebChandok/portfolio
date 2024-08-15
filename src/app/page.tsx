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
import Skills from '../components/skills'
import Experience from "@/components/experience";
import Projects from "@/components/projects";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Saheb Chandok</title>
      </Head>
      <main>
        <section className="text-gray-600 border-b-2 border-gray-200 mx-28 max-w-[1679px]">
          <nav className="py-5 px-10 mb-12 flex justify-between  w-full fixed top-0 left-0 bg-gray-50">
            <h1 className="text-xl text-gray-600">{"{developedbysaheb}"}</h1>
            <ul className="hidden lg:flex flex-row gap-x-8 items-center text-lg">
              <li><BsFillMoonStarsFill className="cursor-pointer text-xl" /></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Interests</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div className="lg:flex justify-between mt-20">
            <div className="flex flex-col px-20 items-center justify-center">
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
            <div className="pt-20 w-[750px]">
              <h2 className="lg:flex text-xl items-center md:text-2xl lg:text-4xl xl:text-6xl font-extrabold text-gray-700 pt-20">Saheb Chandok <IoMdHand className="text-yellow-500 lg:text-6xl text-5xl" /></h2>


              <div className="flex items-center py-5 text-gray-500">
                <PiPenNibStraightLight className="mr-2 font-extrabold text-4xl" />
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
                  style={{ fontSize: '3em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>

              <p className="text-xl mt-5">
                &quot;I&apos;m a Software Developer with over a year of experience in the IT industry. Currently, I am pursuing a Master&apos;s degree in Applied Computer Science from Concordia University, Canada. Feel free to explore my projects and get in touch.&quot;
              </p>

              <button className="bg-gray-700 text-white flex items-center my-12 rounded-2xl px-7 py-5">Say Hello <FaRegPaperPlane className="ml-4" /></button>
              <h2 className="flex items-center mt-28">Scroll Down <FaArrowDownLong /></h2>
            </div>
            <div className="content-center">
              <Image src="/picture.png" alt="Not Found" width={500} height={700} className="w-[580px] h-[750px]" />
            </div>

          </div>
        </section>
        {/* Skills component */}
        <Skills />

        {/* Experience Component */}
        <Experience />

        {/* Projects Component */}
        <Projects />
      </main>
    </div>

  );
}
