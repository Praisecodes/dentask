'use client'

import { useState } from "react";
import { CiFileOn } from 'react-icons/ci';
import { HiAtSymbol } from 'react-icons/hi';
import { VscCalendar } from 'react-icons/vsc';

const Page = (): JSX.Element => {
  const [taskMeasurements] = useState<any[]>([
    {
      title: 'Completed Tasks',
      count: 0,
      icon: <CiFileOn />,
    },
    {
      title: 'Assigned Tasks',
      count: 0,
      icon: <HiAtSymbol />,
    },
    {
      title: 'Scheduled Tasks',
      count: 0,
      icon: <VscCalendar />,
    },
  ]);

  return (
    <>
      {/**Count Section */}
      <section className="w-fit mx-auto whitespace-nowrap overflow-x-auto max-w-full flex items-center">
        {taskMeasurements.map((taskMeasurement, index) => (
          <div key={index} className={`bg-[#2C3542] text-[#FFFFFF80] flex rounded-md items-center mx-2 py-5 w-[18rem] px-4`}>
            <p className="lg:text-3xl text-2xl bg-[#FFE5B14D] p-3 text-[#FFE5B1] border border-[#FFE5B1] rounded-full">
              {taskMeasurement.icon}
            </p>
            <h3 className="lg:text-lg text-base px-3">
              {taskMeasurement.title} <br />
              <span className="text-white lg:text-2xl text-xl">
                {taskMeasurement.count}
              </span>
            </h3>
          </div>
        ))}
      </section>
    </>
  )
}

export default Page;
