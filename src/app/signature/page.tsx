'use client'
import { useState } from "react";
import Image from "next/image";
import DragII from "../components/Drag";
import { Button, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow} from "@nextui-org/react";


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
        <div className="flex justify-center items-center h-48 relative text-center">
            <h2 className="text-9xl font-extrabold absolute opacity-20">1</h2>
            <h1 className="text-2xl font-bold z-10">Reporte de Practicas Profesionales</h1>
        </div>
        <div className="my-4">
            <div className="flex-col justify-evently min-w-1/2">
                <h2 className="font-semibold text-lg text-center">Datos del alumno</h2>
                <div className="flex flex-col">
                    <div className="flex flex-row justify-evently my-2">
                        <h3 className="mr-3 font-medium">Nombre: </h3>
                        <p>Nombre completo del alumnos aqui</p>
                    </div>
                    <div className="flex flex-row justify-evently my-2">
                        <h3 className="mr-3 font-medium">Matricula: </h3>
                        <p>m012345</p>
                    </div>
                    <div className="flex flex-row justify-evently my-2">
                        <h3 className="mr-3 font-medium">Carrera: </h3>
                        <p>Ing. en algo</p>
                    </div>
                    <div className="flex flex-row justify-evently my-2">
                        <h3 className="mr-3 font-medium">Email: </h3>
                        <p>algo.algomas@cetys.edu.mx</p>
                    </div>
                    <div className="flex flex-row justify-evently my-2">
                        <h3 className="mr-3 font-medium">Telefono: </h3>
                        <p>686 12345</p>
                    </div>
                </div>
            </div>
            <div className="flex-col items-center justify-evently">
                <h2 className="font-semibold text-lg  text-center">Datos de la empresa</h2>
                <div className="flex flex-col">
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Nombre Comercial: </h3>
                        <p>Nombre del empresa aqui</p>
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Giro de la empresa: </h3>
                        <p>grio aqui</p>
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Razon social: </h3>
                        <p>Razon social aqui aqui</p>
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Calle y numero: </h3>
                        <p>Direccion aqui</p>
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Razon social: </h3>
                        <p>Razon social aqui aqui</p>
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Telefono: </h3>
                        <p>686 123455</p>
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Pagina Web: </h3>
                        <p>Pagina.com</p>
                    </div>
                    <Table className="my-4">
                        <TableHeader>
                            <TableColumn> </TableColumn>
                            <TableColumn>Jefe Directo</TableColumn>
                            <TableColumn>Recursos Humanos</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>
                                    Nombre jefe
                                </TableCell>
                                <TableCell>
                                    Nombre rh
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Correo</TableCell>
                                <TableCell>
                                   correo jefe
                                </TableCell>
                                <TableCell>
                                    correo RH
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Telefono</TableCell>
                                <TableCell>
                                    telefono Jefe
                                </TableCell>
                                <TableCell>
                                    telefono RH
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Puesto</TableCell>
                                <TableCell>
                                    puesto Jefe
                                </TableCell>
                                <TableCell>
                                    puesto RH
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Departamento</TableCell>
                                <TableCell>
                                    Departamento jefe
                                </TableCell>
                                <TableCell>
                                    Departmento rh
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className="flex-col items-center justify-evently my-4">
                <h2 className="font-semibold text-lg text-center">Actividades de las practicas profecionales</h2>
                <div className="flex flex-col">
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Total de horas del periodo: </h3>
                        <p>200</p>
                    </div>
                    <div className="flex flex-row my-2">
                        <h3 className="mr-3 font-medium">Fechas del periodo: </h3>
                        <p>Agosto 30 2023 - Febrero 29 2024</p>
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
                <h2>Firma del coordinador de carrera</h2>
                <DragII lines={signature} setLines={setSignature} width={400} height={200}></DragII>
                <Button onPress={()=>setSignature([])}>Borrar</Button>
            </div>
        </div>
        <Button className="px-10 py-3">Enviar</Button>
    </div>
    </main>
  );
}
