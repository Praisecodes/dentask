import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="flex justify-between items-center">
      <div>
        <Image width={100} height={100} src="/images/logo_var.svg" alt="Logo" className={`lg:w-[12rem] w-[8rem] object-cover object-center`} />
      </div>

      <Link href={`/signup`} className=" text-white border-[#FFE5B1] border bg-[#858173] px-8 py-3 ">
        Get Started
      </Link>
    </header>
  );
}

export default Navbar