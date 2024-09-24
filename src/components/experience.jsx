import React, { useState } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import useMediaQuery from '@mui/material/useMediaQuery';
import Image from "next/image";
import { useTheme } from '@mui/material/styles';

const Experience = () => {
  const isLargeScreen = useMediaQuery('(min-width:748px)');
  const theme = useTheme();
  const [openModalId, setOpenModalId] = useState(null);

  // Function to open a specific modal
  const openModal = (id) => {
    setOpenModalId(id);
  };

  // Function to close the modal
  const closeModal = () => {
    setOpenModalId(null);
  };

  return (
    <div id='experience' className="container mx-auto px-4 pt-16 pb-24 mb-10 mt-30 border-b-2 border-gray-200 max-w-[1400px]">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-700">Experience</h2>
      <div className='lg:px-48 mt-5'>
        <Timeline position={isLargeScreen ? "alternate" : undefined}
          sx={!isLargeScreen ? {
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          } : {}}
        >
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex'>
                <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 justify-start w-full shadow-lg hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300 ' onClick={() => openModal(1)}>
                  <div className='items-center my-auto'>
                    <Image src="/concordia.png" alt="Not Found" width={500} height={700} className="w-[30px] h-[30px] md:w-[50px] md:h-[50px]" />
                  </div>
                  <div className='ml-10'>
                    <p className='text-gray-700 font-bold text-sm md:text-lg'>MS in Computer Science</p>
                    <p className='mt-3 text-sm md:text-lg'>Concordia University, Canada</p>
                    <p className='text-sm md:text-lg'>Sept 2023 - Present</p>
                  </div>
                </div>
              </div>

              {openModalId === 1 && (
                <div id="modal-wrapper" className='fixed z-10 inset-0'>
                  <div className='flex items-center justify-center min-h-screen bg-gray-300 bg-opacity-20 transition-all'>
                    <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                      <h3 className='text-2xl font-medium tracking-wider'>Masters in Applied Computer Science</h3>
                      <p className='my-8 text-xl'>
                      I am currently pursuing a M.Sc in Applied Computer Science at Concordia University, where I am enhancing my technical and problem-solving skills through advanced coursework and hands-on projects. My studies focus on software development, algorithms, and modern computing technologies, preparing me to excel in the dynamic field of computer science.
                      </p>
                      <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                    </div>
                  </div>
                </div>
              )}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex justify-end'>
                <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 w-full shadow-lg hover:cursor-pointer hover:shadow-2xl transition-shadow duration-300' onClick={() => openModal(2)}>
                  <div className='items-center my-auto'>
                    <Image src="/Oracle.png" alt="Not Found" width={500} height={700} className="h-[40px] w-[40px] md:w-[70px] md:h-[70px] rounded-full" />
                  </div>
                  <div className='ml-10 justify-end w-full'>
                    <p className='text-gray-700 font-bold text-sm md:text-lg'>Software Developer</p>
                    <p className='mt-3 text-sm md:text-lg'>Oracle, India</p>
                    <p className='text-sm md:text-lg'>July 2022 - August 2023</p>
                  </div>
                </div>
              </div>

              {openModalId === 2 && (
                <div id="modal-wrapper" className='fixed z-10 inset-0'>
                  <div className='flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-20 transition-all'>
                    <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                      <h3 className='text-2xl font-medium tracking-wider'>Software Developer</h3>
                      <p className='my-8 text-xl text-left'>
                      I played a key role in a high-impact project, leading the development of user-friendly interface screens for a major financial institution. I implemented modern technologies, optimized workflows, and enhanced the overall user experience. Additionally, I led a team of interns, driving the project from design to deployment while ensuring seamless migration to a new tech stack.
                      </p>
                      <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                    </div>
                  </div>
                </div>
              )}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex'>
                <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 justify-start w-full hover:cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300' onClick={() => openModal(3)}>
                  <div className='items-center my-auto'>
                    <Image src="/aic.png" alt="Not Found" width={500} height={700} className="w-[40px] h-[40px] md:w-[70px] md:h-[70px]" />
                  </div>
                  <div className='ml-10'>
                    <p className='text-gray-700 font-bold text-sm md:text-lg'>Web Developer Intern</p>
                    <p className='mt-3 text-sm md:text-lg'>Ask In City, India</p>
                    <p className='text-sm md:text-lg'>Oct 2020 - Dec 2020</p>
                  </div>
                </div>
              </div>
              {openModalId === 3 && (
                <div id="modal-wrapper" className='fixed z-10 inset-0'>
                  <div className='flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-20 transition-all'>
                    <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                      <h3 className='text-2xl font-medium tracking-wider'>Web Developer Intern</h3>
                      <p className='my-8 text-xl'>
                      I contributed to the development of responsive and interactive websites by translating UI designs into functional frontend code, ensuring a seamless user experience. I collaborated closely with the development team to implement design specifications, optimizing the websites for performance and accessibility. By utilizing modern web technologies, I helped enhance the overall functionality and visual appeal of the sites.
                      </p>
                      <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                    </div>
                  </div>
                </div>
              )}
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <div className='flex justify-end'>
                <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 w-full hover:cursor-pointer shadow-lg hover:shadow-2xl transition-shadow duration-300' onClick={() => openModal(4)}>
                  <div className='items-center my-auto'>
                    <Image src="/IIIT.png" alt="Not Found" width={500} height={700} className="h-[40px] w-[40px] md:w-[70px] md:h-[70px]" />
                  </div>
                  <div className='ml-10 justify-end w-full'>
                    <p className='text-gray-700 font-bold text-sm md:text-lg'>B.E. in Information Technology</p>
                    <p className='mt-3 text-sm md:text-lg'>Pune University, India</p>
                    <p className='text-sm md:text-lg'>June 2018 - July 2022</p>
                  </div>
                </div>
              </div>

              {openModalId === 4 && (
                <div id="modal-wrapper" className='fixed z-10 inset-0'>
                  <div className='flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-20 transition-all'>
                    <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                      <h3 className='text-2xl font-medium tracking-wider'>Bachelor of Engineering in Information Technology</h3>
                      <p className='my-8 text-xl text-left'>
                      I completed my Bachelor of Engineering in Information Technology, building a strong foundation in areas like databases, networks, algorithms, and software engineering. During my later years, I worked on one key project: 'Detection of Cyber and Network Attacks using machine learning algorithms'. These experiences solidified my interest in full-stack development and machine learning, allowing me to apply my theoretical knowledge to real-world challenges.
                      </p>
                      <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                    </div>
                  </div>
                </div>
              )}
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    </div>
  )
}

export default Experience
