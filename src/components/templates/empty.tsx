type EmptyType = {
  image: string;
  title: string;
  children: any;
}

const Empty = ({ image, title, children }: EmptyType): JSX.Element => {
  return (
    <section className={`flex flex-col items-center justify-center`}>
      <img src={image} alt="Display Image" className={`w-[7rem]`} />
      <h3 className={`text-lg`}>
        {title}
      </h3>
      <p className={`text-sm`}>
        {children}
      </p>
    </section>
  )
}

export default Empty;
