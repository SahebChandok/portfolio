import React from 'react';
import Image from "next/image"

const Projects = () => {
    return (
        <div>
            <div className='container mx-auto px-4 pt-16 pb-24 mb-10 mt-30 border-b-2 border-gray-200 max-w-[1400px]'>
                <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Projects</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20'>
                    <div className='max-w-[1100px] mx-auto flex flex-col lg:flex-row bg-gray-100 rounded-lg border-gray-300 border-2 mt-5 hover:shadow-2xl transition-shadow duration-300 shadow-lg'>
                        <div className='w-full flex items-center'>
                            <Image src="/portfolio.png" alt="Not Found" width={1200} height={1200} className="px-5 py-10 lg:py-1" />
                        </div>
                        <div className='w-full px-7'>
                            <h1 className='text-gray-700 font-bold text-2xl mt-5'>Portfolio Website</h1>
                            <p className='text-gray-700 py-5'>July 2024 - August 2024</p>

                            <p>I have successfully developed and hosted a dynamic personal portfolio website utilizing Next.js and Tailwind CSS.</p>
                            <div className='flex flex-row'>
                                <a className="bg-blue-500 my-5 text-white flex items-center rounded-2xl px-7 py-5 hover:cursor-pointer" onClick={() => window.open('https://github.com/SahebChandok/portfolio', '_blank')}>View Code</a>
                                <a className=" bg-white my-5 ml-5 flex items-center rounded-2xl px-7 py-3 text-black border-2 border-blue-500 hover:cursor-pointer" onClick={() => window.open('https://saheb-chandok.vercel.app/', '_blank')}>View Live</a>
                            </div>
                        </div>

                    </div>

                    <div className='max-w-[1100px] mx-auto flex flex-col lg:flex-row bg-gray-100 rounded-lg border-gray-300 border-2 mt-5 hover:shadow-2xl transition-shadow duration-300 shadow-lg '>
                        <div className='w-full flex items-center'>
                            <Image src="/Jira.png" alt="Not Found" width={1200} height={1200} className="px-5 py-10 lg:py-1" />
                        </div>
                        <div className='w-full px-7'>
                            <h1 className='text-gray-700 font-bold text-2xl mt-5'>Jira Voice Assistant</h1>
                            <p className='text-gray-700 py-5'>January 2024 - April 2024</p>

                            <p>Developed a Chrome extension for Jira that streamlines user story management with voice commands. </p>
                            <div className='flex flex-row'>
                                <a className="bg-blue-500 my-5 text-white flex items-center rounded-2xl px-7 py-5 hover:cursor-pointer" onClick={() => window.open('https://github.com/SahebChandok/jira-voice-assistant', '_blank')}>View Code</a>
                                <a className=" bg-white my-5 ml-5 flex items-center rounded-2xl px-7 py-3 text-black border-2 border-blue-500 hover:cursor-pointer" onClick={() => window.open('https://chromewebstore.google.com/detail/jira-voice-assistant/pmkkodnnklbefedoioocpgnccmnibfni?pli=1', '_blank')}>View Live</a>
                            </div>
                        </div>

                    </div>

                    <div className='max-w-[1100px] mx-auto flex flex-col lg:flex-row bg-gray-100 rounded-lg border-gray-300 border-2 mt-5 hover:shadow-2xl transition-shadow duration-300 shadow-lg'>
                        <div className='w-full flex items-center'>
                            <Image src="/image.png" alt="Not Found" width={1200} height={1200} className="px-5 py-10 lg:py-1" />
                        </div>
                        <div className='w-full px-7'>
                            <h1 className='text-gray-700 font-bold text-2xl mt-5'>Domination Game</h1>
                            <p className='text-gray-700 py-5'>Sept 2023 - Dec 2023</p>

                            <p>Created a console-based Warzone game leveraging &quot;Java&apos;s collections and OOP concepts. Employed design patterns like State, Command.</p>
                            <div className='flex flex-row'>
                                <a className="bg-blue-500 my-5 text-white flex items-center rounded-2xl px-7 py-5 hover:cursor-pointer" onClick={() => window.open('https://github.com/SahebChandok/warzone', '_blank')}>View Code</a>
                            </div>
                        </div>

                    </div>

                    <div className='max-w-[1100px] mx-auto flex flex-col lg:flex-row bg-gray-100 rounded-lg border-gray-300 border-2 mt-5 hover:shadow-2xl transition-shadow duration-300 shadow-lg'>
                        <div className='w-full flex items-center'>
                            <Image src="/IEEE-Logo.jpg" alt="Not Found" width={1200} height={1200} className="px-5 py-10 lg:py-1" />
                        </div>
                        <div className='w-full px-7'>
                            <h1 className='text-gray-700 font-bold text-2xl mt-5'>Cyber attack detection</h1>
                            <p className='text-gray-700 py-5'>January 2024 - April 2024</p>

                            <p> The aim was to create a system capable of predicting malicious activities by leveraging machine learning algorithms.</p>
                            <div className='flex flex-row'>
                                <a className="bg-blue-500 my-5 text-white flex items-center rounded-2xl px-7 py-5 hover:cursor-pointer" onClick={() => window.open('https://ieeexplore.ieee.org/document/9938367', '_blank')}>View Paper</a>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    )
}

export default Projects
