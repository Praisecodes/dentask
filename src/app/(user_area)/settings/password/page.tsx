"use client";

import { BiCheck } from 'react-icons/bi';
import { Button, PasswordInput } from "@/components/atoms";
import { SettingsBoard } from "@/components/templates";

const Page = (): JSX.Element => {
  return (
    <SettingsBoard title="Password Settings">
      <div className={`w-[65%] max-w-full`}>
        <label className={`font-bold text-sm`}>Current Password</label>
        <PasswordInput
          placeholder="Enter password"
        />
      </div> <br />

      <div className={`w-[65%] max-w-full`}>
        <label className={`font-bold text-sm`}>New Password</label>
        <PasswordInput
          placeholder="Enter New Password"
        />
      </div> <br />

      <div className={`w-[65%] max-w-full`}>
        <label className={`font-bold text-sm`}>Confirm Password</label>
        <PasswordInput
          placeholder="Confirm New Password"
        />
      </div> <br />

      <Button onClick={()=>{}} icon={<BiCheck />} disabled>
        Change Password
      </Button>
    </SettingsBoard>
  )
}

export default Page;
