"use client";

import NavOptions from '@/json/navBar.json';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const BottomBar = (): React.ReactNode => {
  const pathname = usePathname();

  return (
    <nav className={`absolute bottom-0 left-0 font-sans-expanded w-full overflow-hidden flex duration-200 rounded-t-xl lg:h-0 h-fit lg:py-0 py-3 md:px-7 px-4 items-center justify-between bg-[#2B3441]`}>
      {NavOptions.map((option, index)=>(
        <Link key={index} href={option.route}>
          <div>
            <Image 
              src={pathname.startsWith(option.route) ? `${option.icon}-yellow.svg` : `${option.icon}.svg`}
              alt='Icon'
              width={30}
              height={30}
              className={`w-[28px] mx-auto mb-2 object-cover object-center`}
            />

            <p className={`text-sm ${pathname.startsWith(option.route) && 'text-[#FFE5B1]'}`}>
              {option.title}
            </p>
          </div>
        </Link>
      ))}
    </nav>
  )
}

export default BottomBar;
