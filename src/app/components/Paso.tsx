const Paso = ({etapa, nombre, descripcion} : {etapa: number, nombre:string, descripcion: string}) => {
    return(
        <div className="flex flex-col">
            <div className="flex w-full justify-center">
                <div className="flex justify-center self-center text-semitransparent place-items-center rounded-full border-2 border-semitransparent w-32 h-32 font-bold text-8xl">
                    {etapa}
                </div>
                <div className="absolute flex h-32 place-items-center text-4xl font-bold z-10">{nombre}</div>
            </div>
            <div className="flex text-center self-center p-5 m-5 rounded-2xl flex-col text-white bg-black w-2/5">
                <p className="font-bold text-2xl">Este paso se completa:</p>
                <p>{descripcion}</p>
            </div>
        </div>
    )
}

export default Paso