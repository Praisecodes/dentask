"use client";

import { Button } from "@/components/atoms";
import { SettingsBoard } from "@/components/templates";
import { useState } from "react";
import { BsCheck2 } from "react-icons/bs";

const Page = (): JSX.Element => {
  const [generalNotif, setGeneralNotif] = useState<boolean>(false);
  const [newUserNotif, setNewUserNotif] = useState<boolean>(false);
  const [newTaskNotif, setNewTaskNotif] = useState<boolean>(false);

  return (
    <SettingsBoard title="Notification Settings">
      <div className={`w-full space-x-2 py-4 flex justify-between items-center border-b border-b-[#8CAAB933]`}>
        <p className={`text-white text-base font-bold`}>
          General email notification
        </p>

        <input type="checkbox" onChange={() => { setGeneralNotif(!generalNotif) }} className={`toggle`} checked={generalNotif} />
      </div>

      <div className={`w-full space-x-2 py-6 flex justify-between items-center border-b border-b-[#8CAAB933]`}>
        <p className={`text-white text-base font-bold`}>
          Email for every new user joining in team
        </p>

        <input type="checkbox" onChange={() => { setNewUserNotif(!newUserNotif) }} className={`toggle`} checked={newUserNotif} />
      </div>

      <div className={`w-full space-x-2 py-6 flex justify-between items-center border-b border-b-[#8CAAB933]`}>
        <p className={`text-white text-base font-bold`}>
          Email when team member create new task
        </p>

        <input type="checkbox" onChange={() => { setNewTaskNotif(!newTaskNotif) }} className={`toggle`} checked={newTaskNotif} />
      </div> <br />

      <section className={`flex items-center mt-3 space-x-3`}>
        <Button disabled={false} icon={<BsCheck2 />} onClick={() => { }}>
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
