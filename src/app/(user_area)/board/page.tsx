'use client'

import { Empty } from "@/components/templates";
import { DLink, Button } from "@/components/atoms";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";

const Page = ():JSX.Element => {
  const [boards, setBoards] = useState<any[]>([]);

  return (
    <main className={`flex flex-col`}>
      <section className={`flex justify-between items-center`}>
        <div>
          <h2 className={`text-2xl text-white`}>
            Task Board
          </h2>
          <p className={`text-[#ffffff66]`}>
            Create a board and complete tasks using board
          </p>
        </div>

        <Button icon={<AiOutlinePlus />} onClick={() => { }} disabled={false}>
          Create Board
        </Button>
      </section>

      <section className={`min-h-[50vh] flex ${boards.length < 1 && 'items-center' } my-2 justify-center`}>
        {
          boards.length < 1 ?
            <Empty title="No board has been created" image="/images/emptys/no-board.svg">
              Create a board using <DLink href={'/'}>+Create Board</DLink> button
            </Empty>
            :
            (null)
        }
      </section>
    </main>
  )
}

export default Page;
