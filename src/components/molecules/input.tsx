type InputType = {
  placeholder: string;
  icon: React.ReactNode;
  type: 'email' | 'text' | 'password';
  width: string;
}

const Input = ({ placeholder, icon, type, width }: InputType): JSX.Element => {
  return (
    <div className={`input items-center bg-[#455A64] rounded-sm  px-6 flex`} style={{ width: width }}>
      <p className={`text-[#8CAAB9] text-xl`}>
        {icon}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        className={`flex-1 input text-sm bg-transparent focus:outline-none`}
      />
    </div>
  )
}

export default Input;
