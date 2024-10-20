'use client';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

interface navLinkType {
  name: string,
  href: string,
}

const links: navLinkType[] = [
  {name: 'Home', href: '/home'},
  {name: 'Add Recipe', href: '/add-recipe'},
]

export default function NavLinks(){
  const pathName = usePathname();
  return (
    <>
     {links.map((link)=>{
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              `flex h-[48px] grow items-center
              justify-center gap-2 rounded-md 
              bg-white p-3 text-sm text-emerald-600
              font-medium
              hover:bg-emerald-200 hover:text-emerald-600
              md:flex-none md:justify-start
              md:p-2 md:px-3`,
              {'bg-emerald-200 text-emerald-800': pathName === link.href}
            )}>
            <p className='hidden md:block'>{link.name}</p>
          </Link>
        )
     })}
    </>
  )
}