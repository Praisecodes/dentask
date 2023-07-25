const Navbar = () => {
  return (
    <div className="flex justify-between ">
      <div>
        <img src="/images/logo_var.svg" alt="Logo" />
      </div>

      <button className=" text-white border-[#FFE5B1] border bg-[#858173] px-5 py-0 ">
        Get Started
      </button>
    </div>
  );
}

export default Navbar