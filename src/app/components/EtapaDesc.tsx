const EtapaDesc = ({posicion, titulo, descripcion} : {posicion: number, titulo: string, descripcion: string}) => {
    return(
        <div className="flex flex-col text-white p-3">
            <div className="flex flex-row w-full h-14">
                <div className="flex justify-center place-items-center rounded-full border-2 border-yellow w-14 h-inherit font-bold text-4xl">
                    {posicion}
                </div>
                <div className="flex ml-2 justify-center place-items-center font-bold text-xl">
                    Solicitud de Prácticas
                </div>
            </div>
            <p>{descripcion}</p>
        </div>
    )
}

export default EtapaDesc