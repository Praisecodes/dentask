'use client'

import { SearchInput } from "@/components/atoms";
import { HeaderActions } from "@/components/molecules";
import { SideBar } from "@/components/templates";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const pathname = usePathname();

  return (
    <main className="bg-[#212832] flex h-[100vh] w-[100vw]">
      <SideBar />

      <section className="w-[79vw] overflow-x-hidden">
        <header className="h-[12.4vh] px-6 flex justify-between items-center border-b border-b-[#455A6480]">
          <h3 className="text-white text-xl">
            {pathname == '/home' ? "Home Task" : pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1,)}
          </h3>
          <SearchInput />
          <HeaderActions />
        </header>

        <main className={`overflow-y-auto h-[87.6vh] px-6 py-3`}>
          {children}
        </main>
      </section>
    </main>
  )
}

export default Layout;
