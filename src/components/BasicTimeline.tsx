import React, { useState } from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Image from "next/image";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

// Type for the ID parameter
type ModalId = number | null;

export default function BasicTimeline() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  // State to track the currently open modal
  const [openModalId, setOpenModalId] = useState<ModalId>(null);

  // Function to open a specific modal
  const openModal = (id: React.SetStateAction<ModalId>) => {
    setOpenModalId(id);
  };

  // Function to close the modal
  const closeModal = () => {
    setOpenModalId(null);
  };



  return (
    <Timeline position={matches ? 'alternate' : undefined}>
      <TimelineItem className='pl-0 pr-0 ml-0 mr-0'>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 justify-start w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300 ' onClick={() => openModal(1)}>
            <div className='items-center my-auto'>
              <Image src="/concordia.png" alt="Not Found" width={500} height={700} className="w-[50px] h-[50px]" />
            </div>
            <div className='ml-10'>
              <p className='text-gray-700 font-bold'>Masters in Applied Computer Science</p>
              <p className='mt-3'>Concordia University, Canada</p>
              <p>Sept 2023 - Present</p>
            </div>
          </div>

          {openModalId === 1 && (
            <div id="modal-wrapper" className='fixed z-10 inset-0'>
              <div className='flex items-center justify-center min-h-screen bg-gray-300 bg-opacity-20 transition-all'>
                <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                  <h3 className='text-2xl font-medium tracking-wider'>Masters in Applied Computer Science</h3>
                  <p className='my-8 text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tempore consequuntur nihil vitae obcaecati distinctio minima nemo necessitatibus assumenda dolorum labore architecto temporibus veniam dicta mollitia, et voluptas commodi. Quidem.
                  </p>
                  <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='pl-0 pr-0 ml-0 mr-0'>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex justify-end'>
            <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300' onClick={() => openModal(2)}>
              <div className='items-center my-auto'>
                <Image src="/Oracle.png" alt="Not Found" width={500} height={700} className="w-[70px] h-[70px] rounded-full" />
              </div>
              <div className='ml-10 justify-end w-full'>
                <p className='text-gray-700 font-bold'>Software Developer</p>
                <p className='mt-3'>Oracle, India</p>
                <p>July 2022 - August 2023</p>
              </div>
            </div>
          </div>

          {openModalId === 2 && (
            <div id="modal-wrapper" className='fixed z-10 inset-0'>
              <div className='flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-20 transition-all'>
                <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                  <h3 className='text-2xl font-medium tracking-wider'>Software Developer</h3>
                  <p className='my-8 text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tempore consequuntur nihil vitae obcaecati distinctio minima nemo necessitatibus assumenda dolorum labore architecto temporibus veniam dicta mollitia, et voluptas commodi. Quidem.
                  </p>
                  <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='pl-0 pr-0 ml-0 mr-0'>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 justify-start w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300' onClick={() => openModal(3)}>
            <div className='items-center my-auto'>
              <Image src="/aic.png" alt="Not Found" width={500} height={700} className="w-[70px] h-[70px]" />
            </div>
            <div className='ml-10'>
              <p className='text-gray-700 font-bold'>Web Developer Intern</p>
              <p className='mt-3'>Ask In City, India</p>
              <p>Oct 2020 - Dec 2020</p>
            </div>
          </div>

          {openModalId === 3 && (
            <div id="modal-wrapper" className='fixed z-10 inset-0'>
              <div className='flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-20 transition-all'>
                <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                  <h3 className='text-2xl font-medium tracking-wider'>Web Developer Intern</h3>
                  <p className='my-8 text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tempore consequuntur nihil vitae obcaecati distinctio minima nemo necessitatibus assumenda dolorum labore architecto temporibus veniam dicta mollitia, et voluptas commodi. Quidem.
                  </p>
                  <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                </div>
              </div>
            </div>
          )}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem className='pl-0 pr-0 ml-0 mr-0'>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex justify-end'>
            <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300' onClick={() => openModal(4)}>
              <div className='items-center my-auto'>
                <Image src="/IIIT.png" alt="Not Found" width={500} height={700} className="w-[70px] h-[70px]" />
              </div>
              <div className='ml-10 justify-end w-full'>
                <p className='text-gray-700 font-bold'>B.E. in Information Technology</p>
                <p className='mt-3'>Savitribai Phule Pune University, India</p>
                <p>June 2018 - July 2022</p>
              </div>
            </div>

            {openModalId === 4 && (
              <div id="modal-wrapper" className='fixed z-10 inset-0'>
                <div className='flex items-center justify-center min-h-screen bg-gray-500 bg-opacity-20 transition-all'>
                  <div className='flex flex-col items-center justify-between bg-white p-10 rounded max-w-[750px]'>
                    <h3 className='text-2xl font-medium tracking-wider'>Bachelor of Engineering in Information Technology</h3>
                    <p className='my-8 text-xl'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, tempore consequuntur nihil vitae obcaecati distinctio minima nemo necessitatibus assumenda dolorum labore architecto temporibus veniam dicta mollitia, et voluptas commodi. Quidem.
                    </p>
                    <button id="close-modal-btn" className='bg-red-500 text-white py-3 px-10 rounded' onClick={closeModal}>Close</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
