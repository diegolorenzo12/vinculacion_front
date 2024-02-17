'use client'
import { useState } from "react";
import Image from "next/image";
import DragII from "../components/Drag";
import { Button} from "@nextui-org/react";


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
    <div className="bg-white px-20 py-8 m-5 w-full flex flex-col justify-center items-center">
        <h1 className="text-2xl font-extrabold">REPORTE PARCIAL DE PRÁCTICAS PROFESIONALES</h1>
        <div className="my-4">
            <div className="flex-col justify-evently min-w-1/2">
                <h2 className="font-semibold text-lg">Datos del alumno</h2>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-evently m-2">
                        <h3 className="mr-3">Nombre: </h3>
                        <p>Nombre del alumnos aqui</p>
                    </div>
                    <div className="flex flex-row justify-evently m-2">
                        <h3 className="mr-3">Matricula: </h3>
                        <p>m012345</p>
                    </div>
                    <div className="flex flex-row justify-evently m-2">
                        <h3 className="mr-3">Carrera: </h3>
                        <p>Ing. en algo</p>
                    </div>
                    <div className="flex flex-row justify-evently m-2">
                        <h3 className="mr-3">Email: </h3>
                        <p>algo.algomas@cetys.edu.mx</p>
                    </div>
                    <div className="flex flex-row justify-evently m-2">
                        <h3 className="mr-3">Telefono: </h3>
                        <p>686 12345</p>
                    </div>
                </div>
            </div>
            <div className="flex-col items-center justify-evently">
                <h2 className="font-semibold text-lg">Datos de la empresa</h2>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-between">
                        <h3>Nombre Comercial: </h3>
                        <p>Nombre del empresa aqui</p>
                    </div>
                    <div className="flex flex-row">
                        <h3>Telefono: </h3>
                        <p>686 123455</p>
                    </div>
                    <div className="flex flex-row">
                        <h3>Jefe Directo: </h3>
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
                </div>
            </div>
            <div className="flex-col items-center justify-evently my-4">
                <h2 className="font-semibold text-lg">Actividades de las practicas profecionales</h2>
                <div className="flex flex-col">
                <div className="flex flex-col my-2">
                        <h3 className="font-semibold">Total de horas del periodo: </h3>
                        <p>
                            200                    
                        </p>
                    </div>
                    <div className="flex flex-col my-2">
                        <h3 className="font-semibold">Resume las principales actividades realizadas de prácticas profesionales durante este periodo: </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean m
                        </p>
                    </div>
                    <div className="flex flex-col my-2">
                        <h3 className="font-semibold">Describe las actividades realizadas de prácticas profesionales en el periodo: </h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center my-3">
                <h2>Firma del coordinador</h2>
                <DragII lines={signature} setLines={setSignature} width={400} height={200}></DragII>
                <Button onPress={()=>setSignature([])}>Borrar</Button>
            </div>
        </div>
        <Button className="px-10 py-3">Enviar</Button>
    </div>
    </main>
  );
}
