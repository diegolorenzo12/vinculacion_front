'use client'

import { useEffect, useState } from "react"
import useFetch from "@/hooks/useFetch"

export default function Page(){
    const [data, setData] = useState<any[]>([]) 
    const {fetchCsvData} = useFetch()

    useEffect(() => {
        fetchCsvData('/csv/vacantes.csv', setData)
    }, [])

    console.log(data)

    return(
        <div className="p-5">
            <div className="mb-5">Encuentra las vacantes que envían las empresas para todas las escuelas y envía tu CV según se indique, ya sea al correo de contacto o a la página oficial de la empresa.</div>
            {data.map(vacante => (
                <>
                    <p className="font-bold text-xl">{vacante["Nombre comercial de la empresa:"]}</p>
                    <p className="italic text-xs">{vacante["Submission Date"]}</p>
                    <p className="mb-3">{vacante["Nombre de la Vacante de Prácticas Profesionales:"]}</p>
                </>
            ))}
        </div>
    )
}