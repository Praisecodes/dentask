'use client'

import { useState } from "react";
import { CiFileOn } from 'react-icons/ci';
import { HiAtSymbol } from 'react-icons/hi';
import { VscCalendar } from 'react-icons/vsc';
import { AiOutlinePlus } from 'react-icons/ai';
import { Empty } from "@/components/templates";
import { DLink, Button } from "@/components/atoms";

const Page = (): JSX.Element => {
  const [taskMeasurements] = useState<any[]>([
    {
      title: 'Completed Tasks',
      count: 0,
      icon: <CiFileOn />,
    },
    {
      title: 'Assigned Tasks',
      count: 0,
      icon: <HiAtSymbol />,
    },
    {
      title: 'Scheduled Tasks',
      count: 0,
      icon: <VscCalendar />,
    },
  ]);

  const [teamList, setTeamList] = useState<any[]>([]);
  const [taskList, setTaskList] = useState<any[]>([]);
  const [announcements, setAnnouncements] = useState<any[]>([]);
  const [upcoming, setUpcoming] = useState<any[]>([]);
  const [overdue, setOverdue] = useState<any[]>([]);
  const [completed, setCompleted] = useState<any[]>([]);
  const [filter, setFilter] = useState<string>("Upcoming");

  const [counts, setCounts] = useState<any[]>([
    {
      title: 'Upcoming',
      count: upcoming.length,
    },
    {
      title: 'Overdue',
      count: overdue.length,
    },
    {
      title: 'Completed',
      count: completed.length,
    },
  ]);

  return (
    <>
      {/**Count Section */}
      <section className="w-full flex justify-center items-center flex-wrap">
        {taskMeasurements.map((taskMeasurement, index) => (
          <div key={index} className={`bg-[#2C3542] text-[#FFFFFF80] flex rounded-md items-center mx-2 py-5 w-[18rem] px-4`}>
            <p className="text-3xl bg-[#FFE5B14D] p-3 text-[#FFE5B1] border border-[#FFE5B1] rounded-full">
              {taskMeasurement.icon}
            </p>
            <h3 className="text-lg px-3">
              {taskMeasurement.title} <br />
              <span className="text-white text-2xl">
                {taskMeasurement.count}
              </span>
            </h3>
          </div>
        ))}
      </section>

      {/**Task Priorities and Announcement Section */}
      <section className={`py-6 my-2 flex justify-between items-center w-full`}>
        {/**Task Priorities */}
        <div className={`py-4 px-4 border flex flex-col border-[#8CAAB944] rounded-md w-[49%] h-[23rem]`}>
          <header className={`w-full flex justify-between items-center`}>
            <div>
              <h3 className={`text-xl text-white`}>
                Task Priorities
              </h3>
              <p className={`text-[#FFFFFF66]`}>
                Team task stored by priority
              </p>
            </div>
            <Button icon={<AiOutlinePlus />} onClick={() => { }} disabled={false}>
              Task
            </Button>
          </header>

          <section className={`flex my-2 w-[80%] justify-between items-center`}>
            {counts.map((count, index) => (
              <div
                key={index}
                className={`rounded-sm py-2 cursor-pointer px-3 ${count.title == filter ? 'bg-[#2B3441] text-white' : 'bg-transparent text-[#FFFFFF66]'} border border-[#2B3441]`}
                onClick={() => { setFilter(count.title) }}
              >
                <p>
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
                  Click to add <DLink href={'/new_task'}>New task</DLink>
                </Empty>
              )
              :
              (null)}
          </section>
        </div>

        {/**Announcement */}
        <div className={`py-4 px-4 border flex flex-col border-[#8CAAB944] rounded-md w-[49%] h-[23rem]`}>
          <header className={`w-full flex justify-between items-center`}>
            <div>
              <h3 className={`text-xl text-white`}>
                Announcement
              </h3>
              <p className={`text-[#FFFFFF66]`}>
                From personal and Team Reading
              </p>
            </div>
          </header>

          <section className={`flex-1 flex overflow-y-auto flex-col ${announcements.length < 1 ? 'justify-center' : 'justify-normal'} items-center`}>
            {(announcements.length < 1)
              ?
              (
                <Empty title="No announcements here" image="/images/emptys/no-task.svg">
                  Click to add <DLink href={'/new_announcement'}>New annoncement</DLink>
                </Empty>
              )
              :
              (null)}
          </section>
        </div>
      </section>

      {/**My Team */}
      <section className={`w-full py-2 px-5 border border-[#8CAAB944] rounded-md h-[19rem]`}>
        {/**Header Section */}
        <div className={`flex justify-between w-full items-center`}>
          <article className={`text-white`}>
            <h3 className={`text-2xl py-1`}>
              My Team
            </h3>
            <p className={`text-sm text-[#FFFFFF55]`}>
              All team members
            </p>
          </article>

          <Button icon={<AiOutlinePlus />} onClick={() => { }} disabled={false}>
            Team
          </Button>
        </div>

        {/**Main Content Here */}
        <section className={`flex items-center justify-center py-7`}>
          {(teamList.length < 1)
            ?
            (
              <Empty title="No teams has been created" image="/images/emptys/no-teams.svg">
                Click to add <DLink href={'/new_team'}>New team</DLink>
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
