'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideView = (): JSX.Element => {
  const pathname = usePathname();

  return (
    <section className="bg-[#FFE5B1] hidden flex-1 lg:flex flex-col justify-center items-center">
      <div>
        <h3 className="text-xl font-bold text-[#212832]">
          Welcome {pathname == '/login' ? 'Back' : ''} To
        </h3>
        <Image width={10} height={10} src="/images/logo.svg" alt="Dentask Logo" className="w-[16rem]" />
      </div>

      <p className={`text-base text-black py-2`}>
        {pathname=='/login'?'Don\'t have an account?':'Already have an account?'}
      </p>

      <Link
        href={pathname == '/login' ? '/signup' : '/login'}
        className={`btn w-[17rem] duration-100 text-sm bg-transparent hover:bg-transparent text-black`}
      >
        {pathname == '/login' ? 'Create Account' : 'LOGIN'}
      </Link>
    </section>
  )
}

export default SideView;
