import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <Image width={100} height={100} src="/images/logo_var.svg" alt="Logo" className={`lg:w-[12rem] w-[7rem] object-cover object-center`} />
      </div>

      <Link href={`/signup`} className="lg:text-base text-sm text-white border-[#FFE5B1] font-sans-expanded border-2 rounded-md bg-[#858173] px-5 py-2 lg:px-8 lg:py-3 ">
        Get Started
      </Link>
    </header>
  );
}

export default Navbar