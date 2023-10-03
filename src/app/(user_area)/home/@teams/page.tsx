"use client";

import { useState } from "react";
import { Button, DLink } from "@/components/atoms";
import { AiOutlinePlus } from "react-icons/ai";
import { Empty, NewTeamModal } from "@/components/templates";

const Page = (): React.ReactNode => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [teamList, setTeamList] = useState<any[]>([]);

  const toggleModal = () => setModalOpen(!modalOpen);
  return (
    <>
      <NewTeamModal open={modalOpen} onClose={toggleModal} />

      <section className={`w-full py-2 px-5 border border-[#8CAAB944] rounded-md h-[19rem]`}>
        {/**Header Section */}
        <div className={`flex justify-between w-full items-center`}>
          <article className={`text-white`}>
            <h3 className={`lg:text-xl text-lg py-1`}>
              My Team
            </h3>
            <p className={`text-sm text-[#FFFFFF55]`}>
              All team members
            </p>
          </article>

          <Button icon={<AiOutlinePlus />} onClick={() => { toggleModal() }} disabled={false}>
            Team
          </Button>
        </div>

        {/**Main Content Here */}
        <section className={`flex items-center justify-center py-7`}>
          {(teamList.length < 1)
            ?
            (
              <Empty title="No teams has been created" image="/images/emptys/no-teams.svg">
                Click to add <DLink onClick={() => { toggleModal() }}>New team</DLink>
              </Empty>
            )
            :
            (null)}
        </section>
      </section>
    </>
  )
}

export default Page;
