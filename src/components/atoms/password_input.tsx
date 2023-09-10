import { AiOutlineEye } from 'react-icons/ai';

type InputProps = {
  placeholder: string;
  className?: string;
}

const PasswordInput = ({ placeholder, className }: InputProps): React.ReactNode => {
  return (
    <div className={`bg-transparent w-full flex mt-2 items-center border border-[#8CAAB94D] rounded-sm`}>
      <input
        type="password"
        placeholder={placeholder}
        className={className || `flex-1 py-3 px-5 outline-none text-sm bg-transparent`}
      />

      <button className={`mx-2 text-lg`}>
        <AiOutlineEye />
      </button>
    </div>
  )
}

export default PasswordInput;
