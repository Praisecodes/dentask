import {AiOutlinePlus} from 'react-icons/ai';
import {IoNotificationsOutline} from 'react-icons/io5';

const HeaderActions = (): JSX.Element => {
  return (
    <section className="flex h-full items-center">
      <button className="text-[#FFE5B1] mx-3 bg-[#2B3441] p-3 rounded-full text-lg">
        <AiOutlinePlus />
      </button>

      <button className="text-[#FFE5B1] mx-3 text-lg">
        <IoNotificationsOutline />
      </button>

      <div className="px-4 py-2 rounded-full bg-[#8CAAB9] mx-3 text-black text-lg">
        C
      </div>
    </section>
  )
}

export default HeaderActions;
