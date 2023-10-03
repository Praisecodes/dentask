import { BiSearch } from 'react-icons/bi';

const SearchInput = (): JSX.Element => {
  return (
    <div className="flex font-epilogue items-center input w-[20rem] bg-[#2B3441]">
      <button className="text-white text-xl">
        <BiSearch />
      </button>
      <input
        type='search'
        placeholder="Search..."
        className="flex-1 input bg-transparent text-white focus:outline-none"
      />
    </div>
  )
}

export default SearchInput;
