"use client";

import Image from 'next/image';
import { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { IoNotificationsOutline } from 'react-icons/io5';

const HeaderActions = (): JSX.Element => {
  const [newTaskModalIsOpen, setNewTaskModalIsOpen] = useState<boolean>(false);
  const [profileModalIsOpen, setProfileModalIsOpen] = useState<boolean>(false);
  const [notificationModalIsOpen, setNotificationModalIsOpen] = useState<boolean>(false);

  return (
    <section className="flex h-full items-center">
      <button
        onClick={() => { setNewTaskModalIsOpen(!newTaskModalIsOpen) }}
        className="text-[#FFE5B1] relative mx-3 bg-[#2B3441] p-3 rounded-full text-lg"
      >
        <AiOutlinePlus />
        <div className={`absolute ${newTaskModalIsOpen ? "block" : "hidden"} rounded-sm right-0 w-[16rem] shadow-md py-2 px-4 bg-[#2B3441] top-[112%]`}>
          <button className={`flex space-x-2 items-center w-full py-3 px-1 bg-transparent`}>
            <Image 
              src={`/icons/create-new.svg`}
              width={40}
              height={40}
              alt="Create New Icon"
              className={`w-[55px]`}
            />

            <div className={`w-full`}>
              <p className={`text-white w-full font-bold text-left text-base`}>
                Create Task
              </p>
              <p className={`text-[#FFFFFF80] w-full text-left text-sm`}>
                Create your task now
              </p>
            </div>
          </button>

          <button className={`flex space-x-2 items-center w-full py-3 px-1 bg-transparent`}>
            <Image 
              src={`/icons/create-team.svg`}
              width={40}
              height={40}
              alt="Create New Icon"
              className={`w-[55px]`}
            />

            <div className={`w-full`}>
              <p className={`text-white w-full font-bold text-left text-base`}>
                Create Team
              </p>
              <p className={`text-[#FFFFFF80] w-full text-left text-sm`}>
                Create your team now
              </p>
            </div>
          </button>

          <button className={`flex space-x-2 items-center w-full py-3 px-1 bg-transparent`}>
            <Image 
              src={`/icons/create-team.svg`}
              width={40}
              height={40}
              alt="Create New Icon"
              className={`w-[55px]`}
            />

            <div className={`w-full`}>
              <p className={`text-white w-full font-bold text-left text-base`}>
                Create Board
              </p>
              <p className={`text-[#FFFFFF80] w-full text-left text-sm`}>
                Create your board now
              </p>
            </div>
          </button>
        </div>
      </button>

      <button
        className="text-[#FFE5B1] relative mx-3 px-4 py-2 text-xl"
        onClick={() => { setNotificationModalIsOpen(!notificationModalIsOpen) }}
      >
        <IoNotificationsOutline />

        <div className={`absolute ${notificationModalIsOpen ? "block" : "hidden"} rounded-sm right-0 w-[16rem] shadow-md py-4 px-4 bg-[#2B3441] top-[112%]`}>

        </div>
      </button>

      <div
        onClick={() => { setProfileModalIsOpen(!profileModalIsOpen) }}
        className="px-4 py-2 relative rounded-full bg-[#8CAAB9] mx-3 text-black text-lg"
      >
        C

        <div className={`absolute ${profileModalIsOpen ? "block" : "hidden"} rounded-sm right-0 w-[16rem] shadow-md py-4 px-4 bg-[#2B3441] top-[112%]`}>

        </div>
      </div>
    </section>
  )
}

export default HeaderActions;
