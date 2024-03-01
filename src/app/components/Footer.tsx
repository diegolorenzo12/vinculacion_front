import Image from "next/image"

const Footer = () => {
    return(
        <div className="flex flex-row w-screen h-32 bg-black px-24 justify-between text-white">
            <div className="flex justify-center w-fit h-full">
                <Image
                    className="self-center"
                    src="/cetys_logo_blanco.png"
                    width={120}
                    height={120}
                    alt="Logo CETYS"
                    quality={100}
                />
            </div>
            <div className="flex flex-row justify-between w-3/5 self-center">
                <div>
                    <p className="font-bold">Contacto</p>
                    <p className="underline">Help Desk</p>
                    <p className="underline">Contacto para dudas</p>
                </div>
                <div>
                    <p className="font-bold">Información</p>
                    <p className="underline">Reglamento</p>
                    <p className="underline">Aviso de privacidad</p>
                </div>
                <div>
                    <p className="font-bold">Mi Perfil</p>
                    <p className="underline">Mis datos</p>
                </div>
            </div>
            <div className="flex justify-center self-center place-items-center rounded-full border-2 border-yellow w-14 h-14 font-bold text-4xl">
                ?
            </div>
        </div>
    )
}

export default Footer