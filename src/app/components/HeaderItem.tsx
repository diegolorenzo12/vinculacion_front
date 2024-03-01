import Link from "next/link"

export default function HeaderItem({text, href} : {text:string, href:string}){
    return(
        <div className="flex self-center text-center font-bold w-32">
            <Link href={href}>{text}</Link>
        </div>
    )
}