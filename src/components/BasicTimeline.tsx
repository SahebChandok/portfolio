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
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}