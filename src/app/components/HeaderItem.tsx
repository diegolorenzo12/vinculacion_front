'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function HeaderItem({text, href} : {text:string, href:string}){
    const isActive = usePathname() === href
    return(
        <div className={`flex self-center place-items-center justify-center text-center font-bold h-min w-32 ${isActive ? 'border-b-2 border-yellow' : ''}`}>
            <Link href={href}>{text}</Link>
        </div>
    )
}