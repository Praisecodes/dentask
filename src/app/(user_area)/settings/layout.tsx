'use client'

import { SettingsMenu } from "@/components/templates";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const pathname = usePathname();

  return (
    <main className={`flex lg:flex-row flex-col`}>
      <SettingsMenu />
      <section className={`flex-1 px-3 lg:max-h-[83.92vh] lg:overflow-y-auto`}>
        {children}
      </section>
    </main>
  )
}

export default Layout;
