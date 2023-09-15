"use client";

import { useRouter } from "next/navigation"

const Page = (): React.ReactNode => {
  const router = useRouter();
  return (
    <section onClick={() => { router.back() }} className={`backdrop-blur-sm bg-[#00000033] px-4 py-3 fixed top-0 left-0 flex items-center justify-center h-screen w-screen`}>
      <div onClick={(e) => { e.stopPropagation() }} className={`min-h-[14rem] w-[35rem] max-w-full bg-[#2B3441]`}>

      </div>
    </section>
  )
}

export default Page;
