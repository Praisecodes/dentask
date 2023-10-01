import { Input } from "@/components/molecules";
import { HiOutlineEnvelope } from 'react-icons/hi2';

const Page = ():JSX.Element => {
  return (
    <section className="lg:w-[80%] w-full">
      <h2 className="text-white text-2xl w-full">
        Forgot Password
      </h2>

      <form className="w-full">
        <br />
        <p className="text-sm py-2">
          Email
        </p>
        <Input 
          placeholder="Example@gmail.com"
          icon={<HiOutlineEnvelope />}
          type="email"
          width="100%"
        /> <br />

        <button className="bg-[#FFE5B1] hover:bg-[#FFE5B1] text-black btn w-full rounded-md normal-case text-sm">
          Continue
        </button>
      </form>
    </section>
  )
}

export default Page;
