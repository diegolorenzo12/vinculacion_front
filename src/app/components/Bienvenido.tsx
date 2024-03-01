import EtapaDesc from "./EtapaDesc"

const Bienvenido = () => {
    return(
        <div className="flex flex-row h-96 w-4/5 m-10 text-black mb-20">
            <div className="flex flex-col justify-between w-3/5 h-full bg-yellow rounded-l-[50px]">
                <div>
                    <div className="font-bold text-center w-full my-5 text-6xl">¡Bienvenido!</div>
                    <div className="w-full text-center">Ahora, el proceso de las prácticas profesionales...</div>
                    <div className="w-full text-center font-bold">¡Es tan fácil como 1-2-3!</div>
                </div>
                <div className="relative h-1/2">
                    <div className="absolute bg-white rounded-full w-60 h-60 justify-center border-4 border-yellow -left-8">
                        <div className="flex flex-col h-full justify-center p-5 text-center my-auto">
                            <p className="font-bold text-lg">¡Importante!</p>
                            <p className="text-sm">Toda comunicación deberá hacerse a través de tu correo institucional con terminación &quot;@cetys.edu.mx&quot;.</p>
                        </div>
                    </div>
                    <div className="absolute bottom-0 right-0 h-36 w-1/2">
                        <p className="font-bold text-lg my-1">*Estudiante de psicología</p>
                        <p className="text-sm">Completar únicamente:</p>
                        <ul className="list-disc list-inside text-sm">
                            <li>El paso (1) al iniciar.</li>
                            <li>El paso (3) al concluir.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col w-2/5 h-full bg-black rounded-r-[50px] justify-around px-5">
                <EtapaDesc posicion={1} titulo="Solicitud de Prácticas" descripcion="Lorem ipsum dolor sit amet." />
                <div className="w-full pl-10">
                    <EtapaDesc posicion={2} titulo="Reporte Parcial" descripcion="Lorem ipsum dolor sit amet." />
                </div>
                <EtapaDesc posicion={3} titulo="Reporte Final" descripcion="Lorem ipsum dolor sit amet." />
            </div>
        </div>
    )
}

export default Bienvenido