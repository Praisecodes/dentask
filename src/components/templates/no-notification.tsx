import Image from "next/image";

const NoNotification = (): React.ReactNode => {
  return (
    <>
      <br />
      <div className={`mx-auto w-[45rem] max-w-full border py-2 border-[#8CAAB94D] px-6 rounded-lg h-[25rem]`}>
        <header className={`border-b border-b-[#8CAAB91A] py-3`}>
          <h2 className={`text-white font-bold text-lg`}>
            Notification
          </h2>
          <p className={`text-[#FFFFFF80] text-sm`}>
            You can find all notifications here
          </p>
        </header>

        <section className={`w-full py-16 flex flex-col items-center justify-center`}>
          <Image 
            src={`icons/no-notif.svg`}
            width={100}
            height={100}
            alt="No Notifications Icon"
            className={`w-[6rem]`}
          />

          <div className={`text-center my-2`}>
            <h2 className={`font-bold text-[#FFFFFFCC] text-lg`}>No notifications found</h2>
            <p className={`text-[#FFFFFFCC] text-sm`}>
              You&apos;ll get notifications soon
            </p>
          </div>
        </section>
      </div>
    </>
  )
}

export default NoNotification;
