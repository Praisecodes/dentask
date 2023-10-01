'use client'

import { useState } from "react";
import { HiOutlineHome } from 'react-icons/hi';
import { PiUsersThreeThin } from 'react-icons/pi';
import { IoFileTrayFullOutline } from 'react-icons/io5';
import { VscSettings } from 'react-icons/vsc';
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import NavOptions from '@/json/navBar.json';

const SideBar = (): JSX.Element => {
  const [options] = useState<any[]>([
    {
      title: 'Home',
      icon: <HiOutlineHome />,
      route: '/home'
    },
    {
      title: 'Team',
      icon: <PiUsersThreeThin />,
      route: '/team'
    },
    {
      title: 'Board',
      icon: <IoFileTrayFullOutline />,
      route: '/board'
    },
    {
      title: 'Settings',
      icon: <VscSettings />,
      route: '/settings'
    },
  ]);
  const pathname = usePathname();

  return (
    <section className="lg:w-[21vw] overflow-hidden w-0 whitespace-nowrap duration-200 h-[100vh] bg-[#2B3441] lg:px-4 py-5">
      <Image width={10} height={10} src="/images/logo_var.svg" alt="DenTask Logo" className="w-[10rem]" />
      <br />
      <section>
        {NavOptions.map((option, index) => (
          <Link key={index} href={option.route} className="">
            <p className={`py-3 px-2 flex items-center whitespace-nowrap text-lg w-[78%] rounded-md my-2 hover:bg-[#475464] duration-100 ${pathname.startsWith(option.route) ? 'bg-[#475464] text-[#FFE5B1]': 'bg-transparent'}`}>
              <Image 
                src={pathname.startsWith(option.route) ? `${option.icon}-yellow.svg` : `${option.icon}.svg`}
                alt="Icon"
                width={30}
                height={30}
                className={`w-[28px] mr-3 object-cover object-center`}
              />
              {option.title}
            </p>
          </Link>
        ))}
      </section>
    </section>
  )
}

export default SideBar;
