const Layout = ({ children, tasks, teams, announcments }: { children: React.ReactNode; tasks: React.ReactNode; teams: React.ReactNode; announcments: React.ReactNode; }): React.ReactNode => {
  return (
    <main>
      {children}
      <section className={`py-6 my-2 lg:space-y-0 space-y-8 flex lg:flex-row flex-col justify-between items-center w-full`}>
        {tasks}
        {announcments}
      </section>
      {teams}
    </main>
  )
}

export default Layout;
