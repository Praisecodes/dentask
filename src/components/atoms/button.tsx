type ButtonType = {
  children: string | any;
  onClick: () => any;
  disabled: boolean;
  icon?: any;
}

const Button = ({ children, onClick, disabled, icon }: ButtonType): JSX.Element => {
  return (
    <button
      onClick={() => { !disabled && onClick() }}
      className={`text-base whitespace-nowrap w-fit rounded-md flex items-center py-2 px-5 text-[#FFE5B1] bg-[#FFE5B155]`}>
      {icon && <span className={`mx-2 text-xl`}>
        {icon}
      </span>}
      {children}
    </button>
  )
}

export default Button;
