'use client'
import Image from "next/image"
import HeaderItem from "./HeaderItem"
import Link from "next/link"
import { useUserContext } from "../providers";

export default function Header(){
    const { userData } = useUserContext();
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
            {userData && (<HeaderItem text="Registra tus Prácticas" href="/form" />)}
            <HeaderItem text="Envía tu CV" href="/"/>
            <HeaderItem text="Vacantes" href="/"/>
            {userData ? 
                (
                    <p className="font-light italic text-gray-700 flex self-center text-xs"><Link href="/login">{userData.Matricula}</Link></p>
                ):
                (
                    <HeaderItem text="Login" href="/login"/>
                )
            }
        </span>
    )
}