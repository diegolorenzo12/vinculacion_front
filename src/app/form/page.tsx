'use client'
import FormComponent from "./form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Paso from "../components/Paso";

export default function Form(){
    return(
        <>
        <div className="p-4">
            <Header />
        </div>
        <main>
            <div className="bg-yellow py-10">
                <p className="font-bold text-5xl text-center">Registra tus Prácticas</p>
                <p className="text-center font-bold m-5">Actualmente estás en el paso:</p>
                <div className="mt-5">
                    <Paso etapa={1} nombre="Solicitud" descripcion="Antes o justo al inicio de las prácticas profesionales."/>
                    <FormComponent />
                </div>
            </div>
        </main>
        <Footer />
        </>
    )
}