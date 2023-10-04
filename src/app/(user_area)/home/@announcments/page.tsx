"use client";

import { useState } from "react";
import { DLink } from "@/components/atoms";
import { Empty, NewAnnouncementModal } from "@/components/templates";

const Page = (): React.ReactNode => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [announcements, setAnnouncements] = useState<any[]>([]);

  const toggleModal = (): any => setModalOpen(!modalOpen);

  return (
    <>
      <NewAnnouncementModal open={modalOpen} onClose={toggleModal} />

      <div className={`py-4 px-4 border flex flex-col border-[#8CAAB944] rounded-md lg:w-[49%] w-full h-[23rem]`}>
        <header className={`w-full flex justify-between items-center`}>
          <div>
            <h3 className={`lg:text-lg text-base text-white`}>
              Announcement
            </h3>
            <p className={`text-[#FFFFFF66] lg:text-sm text-xs`}>
              From personal and Team Reading
            </p>
          </div>
        </header>

        <section className={`flex-1 flex overflow-y-auto flex-col ${announcements.length < 1 ? 'justify-center' : 'justify-normal'} items-center`}>
          {(announcements.length < 1)
            ?
            (
              <Empty title="No announcements here" image="/images/emptys/no-task.svg">
                Click to add <DLink onClick={() => { toggleModal() }}>New annoncement</DLink>
              </Empty>
            )
            :
            (null)}
        </section>
      </div>
    </>
  )
}

export default Page;
