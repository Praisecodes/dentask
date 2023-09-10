import Navbar from "@/components/molecules/Navbar";
import Image from "next/image";

const Page = (): JSX.Element => {
  return (
    <main className="bg-gradient-to-r from-[#474948] to-[#29313b]">
      <div className="px-12 pt-10">
        <Navbar />
        <div>
          <h1 className="text-[70px] text-white text-center pt-8">
            The Easiest Way To
          </h1>

          <h1 className="text-[70px] text-white text-center text-gradient-to-r from-[#FFE5B1] to-[#8CAAB9] mt-[-15px] fontWeight-[700]" style={{ backgroundClip: 'text', WebkitBackgroundClip: 'text', color: 'transparent', backgroundImage: 'linear-gradient(90deg, #FFE5B1, #8CAAB9)' }}>Manage Your Task</h1>

          <p className="pt-3 text-[20px] text-white text-center">
            Dentask allows you to manage your task and also gives you opportunity<br />
            to mingle with team members
          </p>
        </div>
        <div className="items-center mt-10 w-4/5 m-auto">
          <Image width={10} height={10} src="/images/Dashboard.png" alt="Logo" />
        </div>

      </div>

    </main>
  )
}

export default Page;
