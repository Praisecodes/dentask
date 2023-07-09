import { Input } from "@/components/molecules";
import { CiLock } from 'react-icons/ci';

const Page = (): JSX.Element => {
  return (
    <section className="lg:w-[80%] w-full">
      <h2 className="text-white text-2xl w-full">
        Email Verification
      </h2>

      <form className="w-full">
        <br />
        <p className="text-sm py-2">
          Enter Code
        </p>
        <Input
          placeholder="2345"
          type="text"
          icon={<CiLock />}
          width="100%"
        /> <br />

        <button className={`btn normal-case hover:bg-[#FFE5B1] rounded-md text-sm bg-[#FFE5B1] text-black w-full`}>
          Verify
        </button> <br />

        <button className="text-[#FFE5B1] text-sm mx-auto w-full py-5 my-1">
          Resend Code
        </button>
      </form>


    </section>
  )
}

export default Page;
