'use client'

import Link from "next/link";

const DLink = ({ children, onClick }: { children: any; onClick: () => any; }): JSX.Element => {
  return (
    <span onClick={onClick} className={`text-[#FFE5B1] cursor-pointer`} style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
      {children}
    </span>
  )
}

export default DLink;
