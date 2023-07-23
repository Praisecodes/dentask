'use client'

import { SettingsMenu } from "@/components/templates";
import { usePathname } from "next/navigation";

const Layout = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const pathname = usePathname();

  return (
    <main className={`flex`}>
      <SettingsMenu />
      <section className={`flex-1 px-3 max-h-[83.92vh] overflow-y-auto`}>
        {children}
      </section>
    </main>
  )
}

export default Layout;
