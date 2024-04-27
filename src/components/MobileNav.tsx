import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

const MobileNav = () => {
  return (
    <section className="w-full max-w-[264]">
        <Sheet>
  <SheetTrigger asChild>
    <Image 
    src="/icons/hamburger.svg"
    width={36}
    height={36}
    alt="hamburger icon"
    className='curser-pointer sm:hidden'
    />
  </SheetTrigger>
  <SheetContent side="left" className="border-none bg-dark-1" >
  <Link href="/" className= "flex items-center gap-1">
        <Image
        src="/icons/logo.svg"
        width={32}
        height={32}
        alt="Yoom logo"
        className="max-sm:size-10"
        
        />
        </Link>
    
  </SheetContent>
</Sheet>
    </section>
  )
}

export default MobileNav
