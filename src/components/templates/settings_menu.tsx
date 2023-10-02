'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { PiGearDuotone, PiLockSimpleBold, PiBellDuotone } from 'react-icons/pi';
import { AiOutlineBars } from 'react-icons/ai';

const SettingsMenu = (): JSX.Element => {
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState<boolean>(false);

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
      <div className={`flex items-center mb-3 lg:mb-0 justify-between`}>
        <section>
          <h2 className={`lg:text-2xl text-xl text-white`}>
            Settings
          </h2>
          <p className={`text-[#ffffff55] text-sm py-1`}>
            You can find all settings here
          </p>
        </section>

        {/** Mobile Nav Bar for settings page */}
        <div className={`relative`}>
          <button onClick={() => { setNavOpen(!navOpen) }} className={`text-2xl text-white p-3`}>
            <AiOutlineBars />
          </button>

          <div onClick={() => { setNavOpen(!navOpen) }} className={`absolute ${navOpen ? "h-fit py-1" : "h-0 py-0"} space-y-4 top-[90%] px-3 w-[15rem] overflow-hidden right-3 bg-[#2B3441] rounded-md duration-200`}>
            {settingsMenus.map((settingsMenu, index) => (
              <Link key={index} href={settingsMenu.route}>
                <p className={`flex rounded-sm w-full items-center ${settingsMenu.route == pathname && 'bg-[#475464] text-white'} text-[#FFFFFF55] my-2 py-3 text-sm`}>
                  <span className={`text-base mx-3`}>
                    {settingsMenu.icon}
                  </span>
                  {settingsMenu.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className={`lg:w-full w-0 duration-150 overflow-hidden lg:h-fit h-0`}>
        {settingsMenus.map((settingsMenu, index) => (
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
