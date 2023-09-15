import Image from "next/image";

const NoNotification = (): React.ReactNode => {
  return (
    <>
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
    </>
  )
}

export default NoNotification;
