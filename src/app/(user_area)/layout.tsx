'use client'

import { SearchInput } from "@/components/atoms";
import { BottomBar, HeaderActions } from "@/components/molecules";
import { SideBar } from "@/components/templates";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const pathname = usePathname();

  return (
    <main className="bg-[#212832] flex h-[100vh] w-[100vw]">
      <SideBar />

      <section className="lg:w-[79vw] relative lg:mb-0 w-full overflow-x-hidden">
        <header className="h-[12.4vh] lg:px-6 px-3 flex justify-between items-center border-b border-b-[#455A6480]">
          <h3 className="text-white font-bold text-xl">
            {pathname == '/home' ? "Home Task" : pathname.split('/')[1].charAt(0).toUpperCase() + pathname.split('/')[1].slice(1,)}
          </h3>
          <div className={`lg:block md:block hidden`}>
            <SearchInput />
          </div>
          <HeaderActions />
        </header>

        <main className={`overflow-y-auto h-[87.6vh] lg:px-6 px-3 py-3 lg:mb-0 pb-24`}>
          {children}
        </main>

        <BottomBar />
      </section>
    </main>
  )
}

export default Layout;
