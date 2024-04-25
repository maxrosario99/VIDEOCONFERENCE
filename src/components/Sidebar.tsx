"use client"
import React from 'react'
import {usePathname} from "next/navigation"
import { sidebarLinks } from '@/app/(root)/constants';
import Link from 'next/link';
import { cn } from '@/lib/utils';
const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className="sticky left-0 top -0 flex h-screen w-fit flex-col
    justify-between bg-dark-1 p-6 pt-28 text-white max-sm:hidden lg:w-[264]">
        <div className="flex flex- flex-col gap-6">
            {sidebarLinks.map((item) =>{
                const isActive = pathname === item.route || pathname.startsWith(item.route);
                return(
                    <Link
                        href={item.route}
                        key={item.label}
                        className={cn("flex gap-4 items-center p-4 rounded-lg justify-start", {
                            "bg-blue-1": isActive,
                        })}
                    >
                        {item.label}
                    </Link>
                )
})
                
            }
        </div>
    </section>
  )
}

export default Sidebar
