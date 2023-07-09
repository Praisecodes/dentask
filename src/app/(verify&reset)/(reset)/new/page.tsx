import { Input } from "@/components/molecules";
import { CiLock } from 'react-icons/ci';

const Page = (): JSX.Element => {
  return (
    <section className="w-full lg:w-[80%]">
      <h2 className="w-full text-2xl text-white">
        Change Password
      </h2>

      <form className="w-full">
        <br />
        <p className="text-sm py-2">
          New Password
        </p>
        <Input
          icon={<CiLock />}
          placeholder="New Password"
          width="100%"
          type="password"
        /> <br />

        <p className="text-sm py-2">
          Confirm Password
        </p>
        <Input
          icon={<CiLock />}
          placeholder="Confirm Password"
          width="100%"
          type="password"
        /> <br />

        <button className="bg-[#FFE5B1] btn w-full hover:bg-[#FFE5B1] text-sm text-black normal-case rounded-md my-3">
          Change Password
        </button>
      </form>
    </section>
  )
}

export default Page;
