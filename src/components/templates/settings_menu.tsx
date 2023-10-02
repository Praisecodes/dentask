'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiGearDuotone, PiLockSimpleBold, PiBellDuotone } from 'react-icons/pi';

const SettingsMenu = (): JSX.Element => {
  const pathname = usePathname();

  const [settingsMenus] = useState<any[]>([
    {
      name: 'General Settings',
      route: '/settings',
      icon: <PiGearDuotone />,
    },
    {
      name: 'Password Settings',
      route: '/settings/password',
      icon: <PiLockSimpleBold />,
    },
    {
      name: 'Notifications Settings',
      route: '/settings/notifications',
      icon: <PiBellDuotone />,
    },
  ]);

  return (
    <section className={`lg:w-[22vw] w-full`}>
      <h2 className={`text-2xl text-white`}>
        Settings
      </h2>
      <p className={`text-[#ffffff55] text-sm py-1`}>
        You can find all settings here
      </p>

      <div className={`lg:w-full w-0 duration-150 overflow-hidden lg:h-fit h-0`}>
        {settingsMenus.map((settingsMenu, index)=>(
          <Link key={index} href={settingsMenu.route}>
            <p className={`flex rounded-sm w-[75%] items-center ${settingsMenu.route == pathname && 'bg-[#475464] text-white'} text-[#FFFFFF55] my-4 py-3 text-base`}>
              <span className={`text-lg mx-3`}>
                {settingsMenu.icon}
              </span>
              {settingsMenu.name}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SettingsMenu;
