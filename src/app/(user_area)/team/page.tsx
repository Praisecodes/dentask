'use client'

import { Button, DLink } from "@/components/atoms";
import { Empty } from "@/components/templates";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const Page = (): JSX.Element => {
  const [teamList, setTeamList] = useState<any[]>([]);

  return (
    <main className={`flex flex-col`}>
      <section className={`flex justify-between items-center`}>
        <div>
          <h2 className={`text-2xl text-white`}>
            My Team
          </h2>
          <p className={`text-[#ffffff66]`}>
            0 Total Teams are Added
          </p>
        </div>

        <Button icon={<AiOutlinePlus />} onClick={() => { }} disabled={false}>
          Team
        </Button>
      </section>

      <section className={`min-h-[50vh] flex ${teamList.length < 1 && 'items-center' } my-2 justify-center`}>
        {
          teamList.length < 1 ?
            <Empty title="No teams has been created" image="/images/emptys/no-teams.svg">
              Click to add <DLink onClick={()=>{}}>New team</DLink>
            </Empty>
            :
            (null)
        }
      </section>
    </main>
  )
}

export default Page;
