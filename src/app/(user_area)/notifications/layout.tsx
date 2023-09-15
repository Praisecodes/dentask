const Layout = ({ children }: { children: React.ReactNode; }): React.ReactNode => {
  return (
    <>
      <br />
      <div className={`mx-auto w-[45rem] max-w-full border py-2 border-[#8CAAB94D] px-6 rounded-lg min-h-[25rem]`}>
        <header className={`border-b border-b-[#8CAAB91A] py-3`}>
          <h2 className={`text-white font-bold text-lg`}>
            Notification
          </h2>
          <p className={`text-[#FFFFFF80] text-sm`}>
            You can find all notifications here
          </p>
        </header>

        {children}
      </div>
    </>
  )
}

export default Layout;
