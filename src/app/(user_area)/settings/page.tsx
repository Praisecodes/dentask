'use client'

import { Button } from "@/components/atoms";
import { SettingsBoard } from "@/components/templates";
import { FiUploadCloud } from 'react-icons/fi';
import { BsCheck2 } from 'react-icons/bs';
import Image from "next/image";

const Page = (): JSX.Element => {
  return (
    <>
      <SettingsBoard title="Personal Details">
        {/**Upload Profile Photo */}
        <div className={`flex lg:flex-row md:flex-row flex-col items-center`}>
          <div className={`lg:w-16 lg:h-16 w-14 h-14 rounded-full bg-[#8CAAB9]`}>
            <Image width={10} height={10} src="/images/emptys/no-photo.svg" alt="" className={`w-full p-4`} />
          </div>

          <div className={`lg:mx-7 mx-4 w-fit my-3`}>
            <input type="file" id="image" className={`hidden`} />
            <label htmlFor="image" className={`flex bg-[#FFE5B166] cursor-pointer text-[#FFE5B1] px-4 py-3 lg:w-[17rem] rounded-md`}>
              <span className={`lg:text-2xl text-xl mx-2`}>
                <FiUploadCloud />
              </span>
              <p className={`lg:text-base text-sm`}>
                Upload Profile Image
              </p>
            </label>
          </div>
        </div>

        {/**Form Section */}
        <div className={`flex lg:flex-row lg:space-y-0 space-y-2 flex-col items-center justify-between my-4`}>
          <div className={`block lg:w-[47%] w-full`}>
            <label htmlFor="" className={`text-[#ffffff55] text-sm`}>Full Name</label> <br />
            <input type="text" placeholder="John Doe" className={`border outline-none text-white text-sm px-4 py-4 border-[#ffffff33] rounded-sm w-full bg-transparent`} />
          </div>

          <div className={`block lg:w-[47%] w-full`}>
            <label htmlFor="" className={`text-[#ffffff55] text-sm`}>Username</label> <br />
            <input type="text" placeholder="John123" className={`border outline-none text-white text-sm px-4 py-4 border-[#ffffff33] rounded-sm w-full bg-transparent`} />
          </div>
        </div>

        {/**Note Section */}
        <div className={`w-full py-3 px-4 my-3 bg-[#2B3441] text-[#ffffff77]`}>
          <p className={`text-sm`}>
            <b className={`text-[#ffffff88]`}>Note:</b> You can change username 24days once, so check the username before process.
          </p>
        </div>
        <br />

        <Button icon={<BsCheck2 />} disabled={false} onClick={() => { }}>
          Save Changes
        </Button>
      </SettingsBoard> <br />

      <SettingsBoard title="Email Details">
        <section className={`lg:w-[60%] w-full py-4`}>
          <div className={`flex lg:flex-row md:flex-row flex-col w-full lg:items-end lg:space-y-0 space-y-2`}>
            <div className={`flex-1 lg:mr-4`}>
              <label htmlFor="" className="text-sm text-[#ffffff55]">Full Name</label> <br />
              <input type="text" placeholder="John Doe" className={`w-full outline-none py-2 rounded-md px-4 bg-transparent text-base text-white border border-[#ffffff44]`} />
            </div>

            <Button disabled={false} onClick={() => { }} icon={null}>
              Update
            </Button>
          </div> <br />

          <div className={`w-full py-3 px-4 my-3 bg-[#2B3441] text-[#ffffff77]`}>
            <p className={`text-sm`}>
              <b className={`text-[#ffffff88]`}>Note:</b> You&apos;ll get a confirmation email within 30 minutes
            </p>
          </div>
        </section>
      </SettingsBoard>
    </>
  )
}

export default Page;
