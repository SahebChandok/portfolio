import React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Image from "next/image";

export default function BasicTimeline() {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 justify-start max-w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='items-center my-auto'>
              <Image src="/concordia.png" alt="Not Found" width={500} height={700} className="w-[50px] h-[50px]" />
            </div>
            <div className='ml-10'>
              <p className='text-gray-700 font-bold'>Masters in Applied Computer Science</p>
              <p className='mt-3'>Concordia University, Canada</p>
              <p>Sept 2023 - Present</p>
            </div>
          </div>

        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
        <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2  max-w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300 ml-[275px]'>
            <div className='items-center my-auto'>
              <Image src="/Oracle.png" alt="Not Found" width={500} height={700} className="w-[70px] h-[70px] rounded-full" />
            </div>
            <div className='ml-10 justify-end w-full'>
              <p className='text-gray-700 font-bold'>Software Developer</p>
              <p className='mt-3'>Oracle, India</p>
              <p>July 2022 - August 2023</p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
        <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2 justify-start max-w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='items-center my-auto'>
              <Image src="/aic.png" alt="Not Found" width={500} height={700} className="w-[70px] h-[70px]" />
            </div>
            <div className='ml-10'>
              <p className='text-gray-700 font-bold'>Web Developer Intern</p>
              <p className='mt-3'>Ask In City, India</p>
              <p>Oct 2020 - Dec 2020</p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent >
        <div className='flex bg-gray-100 p-6 rounded-lg border-gray-300 border-2  max-w-[500px] shadow-lg hover:shadow-2xl transition-shadow duration-300 ml-[275px]'>
            <div className='items-center my-auto'>
              <Image src="/IIIT.png" alt="Not Found" width={500} height={700} className="w-[70px] h-[70px]" />
            </div>
            <div className='ml-10 justify-end w-full'>
              <p className='text-gray-700 font-bold'>B.E. in Information Technology</p>
              <p className='mt-3'>Savitribai Phule Pune University, India</p>
              <p>June 2018 - July 2022</p>
            </div>
          </div>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}