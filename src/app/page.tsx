import Navbar from "@/components/molecules/Navbar";
import Image from "next/image";

const Page = (): JSX.Element => {
  return (
    <main className="bg-gradient-to-r min-h-screen font-epilogue from-[#474948] to-[#29313b]">
      <div className="lg:px-12 px-4 pt-10">
        <Navbar /> <br />
        <div>
          <h1 className="lg:text-[70px] font-sans-expanded text-[30px] text-white text-center pt-8 pb-3">
            The Easiest Way To
          </h1>

          <h1 className="lg:text-[70px] text-[40px] text-white text-center text-gradient-to-r from-[#FFE5B1] to-[#8CAAB9] mt-[-15px] fontWeight-[700]" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(90deg, #FFE5B1, #8CAAB9)' }}>
            Manage Your Tasks As A Student
          </h1>

          <p className="pt-3 lg:text-[20px] text-[16px] text-white text-center">
            Dentask allows you to manage your task and also gives you opportunity<br />
            to mingle with team members
          </p>
        </div>
        <div className="flex items-center justify-center self-baseline mt-10 lg:w-4/5 w-full mx-auto">
          <Image width={900} height={900} src="/images/Dashboard.png" alt="Logo" className={`w-full object-cover object-center`} />
        </div>

      </div>

    </main>
  )
}

export default Page;
