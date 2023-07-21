'use client'

import Link from "next/link";

const DLink = ({ href, children }: { href: any; children: any; }): JSX.Element => {
  return (
    <Link href={href}>
      <span className={`text-[#FFE5B1]`} style={{ fontFamily: 'inherit', fontSize: 'inherit' }}>
        {children}
      </span>
    </Link>
  )
}

export default DLink;
