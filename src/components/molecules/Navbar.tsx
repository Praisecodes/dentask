import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <img src="/images/logo_var.svg" alt="Logo" />
      </div>

      <Link href={`/login`} className=" text-white border-[#FFE5B1] border bg-[#858173] px-8 py-3 ">
        Get Started
      </Link>
    </header>
  );
}

export default Navbar