"use client";

import { NoNotification } from "@/components/templates";
import { useState } from "react";
import notifications from '@/json/notifications.json';
import Image from "next/image";

const Page = (): React.ReactNode => {
  return (
    notifications.length < 1 ? (<NoNotification />) : (
      <>
        {notifications.map((notification)=>(
          <div className={`flex justify-between py-5 items-center`}>
            <section className={`flex items-center space-x-4`}>
              <Image  
                src={notification.icon}
                alt="Notification Icon"
                width={40}
                height={40}
                className={`w-[2.5rem]`}
              />

              <div className={`max-w-[60%] whitespace-nowrap`}>
                <h3 className={`text-white font-bold text-base`}>
                  {notification.title}
                </h3>
                <p className={`text-[#FFFFFF80] text-xs`}>
                  {notification.message}
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
