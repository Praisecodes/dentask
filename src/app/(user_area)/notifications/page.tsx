"use client";

import { NoNotification } from "@/components/templates";
import { useState } from "react";
import notifications from '@/json/notifications.json';
import Image from "next/image";

const Page = (): React.ReactNode => {
  return (
    notifications.length < 1 ? (<NoNotification />) : (
      <>
        {notifications.map((notification, index)=>(
          <div key={index} className={`flex justify-between space-x-2 py-5 items-center`}>
            <section className={`flex flex-1 items-center space-x-4`}>
              <Image  
                src={notification.icon}
                alt="Notification Icon"
                width={40}
                height={40}
                className={`lg:w-[2.5rem] w-[2.2rem]`}
              />

              <div className={``}>
                <h3 className={`text-white font-bold lg:text-base text-sm`}>
                  {notification.title}
                </h3>
                <p className={`text-[#FFFFFF80] text-xs`}>
                  {notification.message.length>40 ? notification.message.substring(0, 40) + '...' : notification.message}
                </p>
              </div>
            </section>

            <p className={`text-[#FFFFFF80] font-bold text-sm`}>
              {notification.time}
            </p>
          </div>
        ))}
      </>
    )
  )
}

export default Page;
