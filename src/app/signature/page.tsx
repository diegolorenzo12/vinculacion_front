'use client'
import { useState } from "react";
import Image from "next/image";
import DragII from "../components/Drag";

type Line = { x: number; y: number }[];
type Lines = Line[];


export default function Home() {
const [signature, setSignature] = useState<Lines>([]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-evently p-4 bg-[#ffdc14]">  
    <Image
        src="/cetys_logo.png"
        width={200}
        height={200}
        alt="cetys logo"
    />
    <div className="bg-white px-20 py-8 m-5 w-full">
        <h1 className="text-2xl font-bold">REPORTE PARCIAL DE PRÁCTICAS PROFESIONALES</h1>
        <div className="flex-col items-center justify-evently">
            <h2 className="font-semibold text-lg">Datos del alumno</h2>
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-row justify-between">
                    <h3>Nombre: </h3>
                    <p>Nombre del alumnos aqui</p>
                </div>
                <div className="flex flex-row">
                    <h3>Matricula: </h3>
                    <p>m012345</p>
                </div>
                <div className="flex flex-row">
                    <h3>Carrera: </h3>
                    <p>Ing. en algo</p>
                </div>
                <div className="flex flex-row">
                    <h3>Email: </h3>
                    <p>algo.algomas@cetys.edu.mx</p>
                </div>
                <div className="flex flex-row">
                    <h3>Email: </h3>
                    <p>algo.algomas@cetys.edu.mx</p>
                </div>
            </div>
        </div>
        <div className="flex-col items-center justify-evently">
            <h2 className="font-semibold text-lg">Datos de la empresa</h2>
            <div className="flex flex-row flex-wrap">
                <div className="flex flex-row justify-between">
                    <h3>Nombre: </h3>
                    <p>Nombre del alumnos aqui</p>
                </div>
                <div className="flex flex-row">
                    <h3>Matricula: </h3>
                    <p>m012345</p>
                </div>
                <div className="flex flex-row">
                    <h3>Carrera: </h3>
                    <p>Ing. en algo</p>
                </div>
                <div className="flex flex-row">
                    <h3>Email: </h3>
                    <p>algo.algomas@cetys.edu.mx</p>
                </div>
                <div className="flex flex-row">
                    <h3>Email: </h3>
                    <p>algo.algomas@cetys.edu.mx</p>
                </div>
            </div>
        </div>
        <h2>Firma aqui</h2>
        <div className="border-1 border-black">
            <DragII lines={signature} setLines={setSignature} width={300} height={200}></DragII>
        </div>
    </div>
    </main>
  );
}
