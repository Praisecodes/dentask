"use client";

import { useState, Dispatch, SetStateAction } from "react";
import { Button, DLink } from "@/components/atoms";
import { AiOutlinePlus } from "react-icons/ai";
import { Empty } from "@/components/templates";

const Page = (): React.ReactNode => {
  const [filter, setFilter] = useState<string>("Upcoming");
  const [taskList, setTaskList] = useState<any[]>([]);
  const [newTaskModalOpen, setNewTaskModalOpen] = useState<boolean>(false);
  const [counts, setCounts] = useState<any[]>([
    {
      title: 'Upcoming',
      count: 0,
    },
    {
      title: 'Overdue',
      count: 0,
    },
    {
      title: 'Completed',
      count: 0,
    },
  ]);

  const toggleModal = (setter: Dispatch<SetStateAction<boolean>>, value: boolean) => setter(!value);

  return (
    <div className={`py-4 px-4 border flex flex-col border-[#8CAAB944] rounded-md lg:w-[49%] w-full h-[23rem]`}>
      <header className={`w-full flex justify-between items-center`}>
        <div>
          <h3 className={`lg:text-xl text-base text-white`}>
            Task Priorities
          </h3>
          <p className={`text-[#FFFFFF66] lg:text-base text-sm`}>
            Team task stored by priority
          </p>
        </div>
        <Button icon={<AiOutlinePlus />} onClick={() => { toggleModal(setNewTaskModalOpen, newTaskModalOpen) }} disabled={false}>
          Task
        </Button>
      </header>

      <section className={`flex my-2 w-full overflow-x-auto space-x-4 items-center`}>
        {counts.map((count, index) => (
          <div
            key={index}
            className={`rounded-sm font-epilogue py-2 cursor-pointer px-3 ${count.title == filter ? 'bg-[#2B3441] text-white' : 'bg-transparent text-[#FFFFFF66]'} border border-[#2B3441]`}
            onClick={() => { setFilter(count.title) }}
          >
            <p className={`whitespace-nowrap`}>
              {count.count} {' '} {count.title}
            </p>
          </div>
        ))}
      </section>

      <section className={`flex-1 flex overflow-y-auto flex-col ${taskList.length < 1 ? 'justify-center' : 'justify-normal'} items-center`}>
        {(taskList.length < 1)
          ?
          (
            <Empty title="No tasks has been found" image="/images/emptys/no-task.svg">
              Click to add <DLink onClick={() => { toggleModal(setNewTaskModalOpen, newTaskModalOpen) }}>New task</DLink>
            </Empty>
          )
          :
          (null)}
      </section>
    </div>
  )
}

export default Page;
