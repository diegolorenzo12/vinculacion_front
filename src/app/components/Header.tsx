import Image from "next/image"
import HeaderItem from "./HeaderItem"
import Link from "next/link"

export default function Header(){
    return(
        <span className="flex justify-between px-10 w-full mb-3">
            <Link href="/">
                <Image
                    src="/Logo-cetys-color.png"
                    width={80}
                    height={80}
                    alt="Logo CETYS"
                    quality={100}
                />
            </Link>
            <HeaderItem text="Carta de Presentación" href="/"/>
            <HeaderItem text="Registra tus Prácticas" href="/form" />
            <HeaderItem text="Envía tu CV" href="/"/>
            <HeaderItem text="Vacantes" href="/"/>
            <p className="font-light italic text-gray-700 flex self-center text-xs"><Link href="/login">m036078</Link></p>
        </span>
    )
}