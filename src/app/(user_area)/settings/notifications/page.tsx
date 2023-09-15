"use client";

import { Button } from "@/components/atoms";
import { SettingsBoard } from "@/components/templates";
import { useState } from "react";

const Page = (): JSX.Element => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <SettingsBoard title="Notification Settings">
      <div className={`w-full py-4 flex justify-between items-center border-b border-b-[#8CAAB933]`}>
        <p className={`text-white text-base font-bold`}>
          General email notification
        </p>

        <input type="checkbox" className={`toggle`} checked />
      </div>

      <div className={`w-full py-6 flex justify-between items-center border-b border-b-[#8CAAB933]`}>
        <p className={`text-white text-base font-bold`}>
          Email for every new user joining in team
        </p>

        <input type="checkbox" className={`toggle`} checked />
      </div>

      <div className={`w-full py-6 flex justify-between items-center border-b border-b-[#8CAAB933]`}>
        <p className={`text-white text-base font-bold`}>
          Email when team member create new task
        </p>

        <input type="checkbox" className={`toggle`} checked />
      </div> <br />

      <section className={`flex items-center mt-3 space-x-3`}>
        <Button disabled={false} icon={<></>} onClick={() => { }}>
          Save Changes
        </Button>

        <button className={`bg-[#8CAAB94D] font-bold text-[#FFFFFF80] rounded-md py-2 px-5`}>
          Cancel
        </button>
      </section> <br />
    </SettingsBoard>
  )
}

export default Page;
