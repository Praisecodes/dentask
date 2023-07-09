import { Input } from "@/components/molecules";
import { HiOutlineUser } from 'react-icons/hi';
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CiLock } from 'react-icons/ci';
import Link from "next/link";

const Page = (): JSX.Element => {
  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-white text-2xl lg:w-[80%] w-full">
        Create your account
      </h2>

      <form className="lg:w-[80%] w-full">
        <br />
        <p className={`py-2`}>
          Full Name
        </p>
        <Input
          placeholder="John Doe"
          type="text"
          icon={<HiOutlineUser />}
          width="100%"
        />
        <br />

        <p className={`py-2`}>
          Email Address
        </p>
        <Input
          placeholder="Example@gmail.com"
          type="email"
          icon={<HiOutlineEnvelope />}
          width="100%"
        /> <br />

        <p className={`py-2`}>
          Password
        </p>
        <Input
          placeholder="Your Password"
          type="email"
          icon={<CiLock />}
          width="100%"
        /> <br />

        <p className="flex items-center text-sm">
        <input type='checkbox' className='checkbox' />
        <span className="px-2">
          I have read & agreed to DenTask <Link href={'/'} className="text-[#FFE5B1]">
            Privacy Policy, Terms & Conditions
          </Link>
        </span>
        </p> <br />

        <button className={`btn normal-case bg-[#FFE5B1] text-black text-sm w-full rounded-md hover:bg-[#FFE5B1]`}>
          Create Account
        </button> <br /> <br />

        <div className="flex items-center">
          <p className="flex-1 bg-[#849EAB1A] h-[1px]"></p>
          <p className="px-4 text-white">
            Or
          </p>
          <p className="flex-1 bg-[#849EAB1A] h-[1px]"></p>
        </div> <br />

        <button className="normal-case text-[#FFE5B1] btn border-2 border-[#FFE5B1] rounded-md w-full bg-transparent hover:bg-transparent hover:border-[#FFE5B1]">
          Google
        </button>
      </form>
    </section>
  )
}

export default Page;
