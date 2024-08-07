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
import Skills from './skills'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Saheb Chandok</title>
      </Head>
      <main>
        <section className="text-gray-600 border-b-2 border-gray-200 mx-28 ">
          <nav className="py-5 px-10 mb-12 flex justify-between border-b-2 border-gray-200 w-full fixed top-0 left-0 bg-gray-50">
            <h1 className="text-xl text-gray-600">{"{developedbysaheb}"}</h1>
            <ul className="flex flex-col lg:flex-row gap-x-8 items-center text-lg">
              <li><BsFillMoonStarsFill className="cursor-pointer text-xl" /></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Experience</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Interests</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div className="flex justify-between">
            <div className="flex flex-col px-20 items-center justify-center h-screen">
              <ul>
                <li className="pb-10 text-2xl">
                  <Link href="https://www.linkedin.com/in/saheb-singh-chandok/"><FaLinkedinIn /></Link>
                </li>
                <li className="pb-10 text-2xl">
                  <Link href="https://github.com/SahebChandok"><FaGithub /></Link>
                </li>
                <li className="pb-10 text-2xl">
                  <Link href="https://www.instagram.com/saheb_chandok/"><FaInstagram /></Link>
                </li>
              </ul>
            </div>
            <div className="pt-20">
              <h2 className="flex items-center text-4xl font-extrabold text-gray-700 pt-20">Saheb Chandok <IoMdHand className="text-yellow-500" /></h2>


              <div className="flex items-center py-5 text-gray-500">
                <PiPenNibStraightLight className="mr-2 font-extrabold" />
                <TypeAnimation
                  sequence={[
                    'Graduate Student',
                    1000,
                    'Web Developer',
                    1000,
                    'Software Developer',
                    1000,
                    'Footballer',
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: '2em', display: 'inline-block' }}
                  repeat={Infinity}
                />
              </div>

              <p>I am a Software Developer based in Montreal,<br></br> and I am very passionate and dedicated towards my work. </p>
              <button className="bg-gray-700 text-white flex items-center my-20 rounded-lg px-7 py-5">Say Hello <FaRegPaperPlane className="ml-4" /></button>
              <h2 className="flex items-center">Scroll Down <FaArrowDownLong /></h2>
            </div>
            <div className="pt-10 mr-20 content-center">
              <Image src="/picture.png" alt="Not Found" width={500} height={500} className="" />
            </div>
            
          </div>
          {/* <Image src="/picture1.png" alt="Not Found" width={500} height={500} className="w-full h-100 " /> */}
        </section>
        {/* Add the Skills component here */}
        <Skills />
      </main>
    </div>

  );
}
