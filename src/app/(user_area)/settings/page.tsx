'use client'

import { Button } from "@/components/atoms";
import { SettingsBoard } from "@/components/templates";
import { FiUploadCloud } from 'react-icons/fi';
import { BsCheck2 } from 'react-icons/bs';

const Page = (): JSX.Element => {
  return (
    <>
      <SettingsBoard title="Personal Details">
        {/**Upload Profile Photo */}
        <div className={`flex items-center`}>
          <div className={`w-16 h-16 rounded-full bg-[#8CAAB9]`}>
            <img src="/images/emptys/no-photo.svg" alt="" className={`w-full p-4`} />
          </div>

          <div className={`mx-7 w-fit my-3`}>
            <input type="file" id="image" className={`hidden`} />
            <label htmlFor="image" className={`flex bg-[#FFE5B166] cursor-pointer text-[#FFE5B1] px-4 py-3 w-[17rem] rounded-md`}>
              <span className={`text-2xl mx-2`}>
                <FiUploadCloud />
              </span>
              <p>
                Upload Profile Image
              </p>
            </label>
          </div>
        </div>

        {/**Form Section */}
        <div className={`flex items-center justify-between my-4`}>
          <div className={`block w-[47%]`}>
            <label htmlFor="" className={`text-[#ffffff55] text-sm`}>Full Name</label> <br />
            <input type="text" placeholder="John Doe" className={`border outline-none text-white text-sm px-4 py-4 border-[#ffffff33] rounded-sm w-full bg-transparent`} />
          </div>

          <div className={`block w-[47%]`}>
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
        <section className={`w-[60%] py-4`}>
          <div className={`flex w-full items-end`}>
            <div className={`flex-1 mr-4`}>
              <label htmlFor="" className="text-sm text-[#ffffff55]">Full Name</label> <br />
              <input type="text" placeholder="John Doe" className={`w-full outline-none py-2 rounded-md px-4 bg-transparent text-base text-white border border-[#ffffff44]`} />
            </div>

            <Button disabled={false} onClick={() => { }} icon={null}>
              Update
            </Button>
          </div> <br />

          <div className={`w-full py-3 px-4 my-3 bg-[#2B3441] text-[#ffffff77]`}>
            <p className={`text-sm`}>
              <b className={`text-[#ffffff88]`}>Note:</b> You'll get a confirmation email within 30 minutes
            </p>
          </div>
        </section>
      </SettingsBoard>
    </>
  )
}

export default Page;
