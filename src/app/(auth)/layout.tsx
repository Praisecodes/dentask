'use client'

import { SideView } from "@/components/templates";
import { usePathname } from 'next/navigation';

type LayoutType = {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: LayoutType): JSX.Element => {
  const pathname = usePathname();
  return (
    <main className={`flex ${pathname == '/' ? 'flex-row' : 'flex-row-reverse'} overflow-hidden h-[100vh]`}>
      <section className="lg:w-[65%] w-full flex flex-col justify-center bg-transparent px-16 overflow-y-auto py-14">
        {children}
      </section>
      <SideView />
    </main>
  )
}

export default AuthLayout;
