'use client'

import { Input } from "@/components/molecules";
import { HiOutlineEnvelope } from 'react-icons/hi2';
import { CiLock } from 'react-icons/ci';
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = (): JSX.Element => {
  const router = useRouter();
  const handleLogin = async (e: any) => {
    e.preventDefault();
    router.push('/home');
  }

  return (
    <section className="w-full flex flex-col items-center">
      <h2 className="text-white text-2xl lg:w-[80%] w-full">
        Login to your account
      </h2>

      <form className="lg:w-[80%] w-full">
        <br />
        <p className="py-2">
          Email Address
        </p>
        <Input
          placeholder="Example@gmail.com"
          type="email"
          icon={<HiOutlineEnvelope />}
          width="100%"
        />
        <br />
        <p className="py-2">
          Password
        </p>
        <Input
          placeholder="Your Password"
          type="password"
          icon={<CiLock />}
          width="100%"
        />
        <br />
        <p className="text-right">
          <Link className="text-[#FFE5B1]" href={'/forgot'}>
            Forgot Password?
          </Link>
        </p>
        <br />
        <button
          className={`btn w-full text-black text-base bg-[#FFE5B1] rounded-md normal-case hover:bg-[#FFE5B1]`}
          onClick={(e) => { handleLogin(e) }}
        >
          Login
        </button> <br /><br />
        <div className="flex items-center justify-center">
          <p className="bg-[#849EAB1A] flex-1 h-[1px]"></p>
          <p className="text-white px-4">
            Or
          </p>
          <p className="bg-[#849EAB1A] flex-1 h-[1px]"></p>
        </div> <br />
        <button className="text-[#FFE5B1] text-base border-2 normal-case rounded-md border-[#FFE5B1] btn w-full bg-transparent hover:bg-transparent hover:border-[#FFE5B1]">
          Google
        </button>

        <p className={`py-2 lg:hidden`}>
          Don&apos;t have an account? <Link href={`/signup`}> <span className={`text-[#FFE5B1] underline`}>Get One Here</span> </Link>
        </p>
      </form>

    </section>
  )
}

export default Page;
