const SettingsBoard = ({ children, title }: { children: React.ReactNode; title: string; }): JSX.Element => {
  return (
    <section className={`w-full border border-[#8CAAB955] py-4 lg:px-5 px-3 rounded-md`}>
      <h2 className={`lg:text-2xl text-xl text-white`}>
        {title}
      </h2>
      <div className={`w-full bg-[#ffffff22] h-[1px] my-4`}></div>
      {children}
    </section>
  )
}

export default SettingsBoard;
