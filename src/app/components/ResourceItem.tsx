import Link from "next/link";
import Image from "next/image";


export default function ResourceItem({nombre, path, href, alt} : {nombre: string, path: string, href: string, alt: string}){
    return(
        <Link href={href}>
            <div className="flex flex-col justify-center text-center place-items-center w-20">
                <div className="relative w-16 h-16">
                    <Image
                        src={path}
                        fill={true}
                        style={{objectFit: "contain"}}
                        alt={alt}
                    />
                </div>
                <p className="font-bold text-lg">{nombre}</p>
            </div>
        </Link>
    )
}