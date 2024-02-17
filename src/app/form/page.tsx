'use client'
import { Input , Button, Textarea, Popover, PopoverTrigger, PopoverContent} from "@nextui-org/react";
import DragII from "../components/Drag";
import { useState } from "react";
import Image from "next/image";
import { useUserContext } from "../providers";


type Line = { x: number; y: number }[];
type Lines = Line[];

export default function Form() {
    const [signCoordinador, setSignCoordinador] = useState<Lines>([]);
    const [signStudent, setSignStudent] = useState<Lines>([]);
    const [signRH, setSignRH] = useState<Lines>([]);
    const [signBoss, setSignBoss] = useState<Lines>([]);
    const { userData } = useUserContext();


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-[#ffdc14]">
        <Image
            src="/cetys_logo.png"
            width={200}
            height={200}
            alt="Cetys logo"
        />
        <h1 className="text-2xl font-bold">Reporte de Practicas Profesionales</h1>
        <form className="m-2 flex flex-col justify-center items-center w-full">
            <div className="w-2/3">
                <h2>Datos del alumno</h2>
                {
                    userData && (
                        <>
                            <Input 
                                type="text"  
                                label="Nombre" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                value={userData.FirstName}
                                //value={variable}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Apellido" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                value={userData.LastNameP + " " + userData.LastNameM}
                                //value={variable}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Matricula" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                value={userData.Matricula}
                                //value={variable}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="number"  
                                label="Telefono" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                value={userData.Cel.toString()}
                                //value=123456
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Carrera" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                value={userData.Mayor}
                                //value={variable}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Correo Institucional" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                value={userData.Email}
                                //value={variable}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                        </>)
                }

                <h2>Datos de la empresa</h2>
                <Input 
                    type="Text" 
                    placeholder="" 
                    label="Nombre Comercial" 
                    isRequired 
                    className="py-3" 
                    //value={variable}
                    //onChange={(e) => setUser(e.target.variable)}
                />
                <Input 
                    type="number" 
                    placeholder="" 
                    label="Telefono" 
                    isRequired 
                    className="py-3" 
                    //value={variable}
                    //onChange={(e) => setUser(e.target.variable)}
                />

                <Textarea
                    type="text"
                    label="Resume en máximo 100 caracteres las principales actividades realizadas de Prácticas Profesionales durante este periodo:"
                    isRequired
                    className="py-3" 
                />

                <Textarea
                    type="text"
                    label="Describe las actividades realizadas de Prácticas Profesionales en el periodo (mínimo 300 caracteres):"
                    isRequired
                    className="py-3" 
                />
            </div>

            <div className="flex flex-row w-full justify-around flex-wrap my-6">
                <div className="flex flex-col justify-center items-center">
                    <h2>Firma de Coordinador de Carrera</h2>
                    <DragII lines={signCoordinador} setLines={setSignCoordinador} width={400} height={200}/>
                    <div className="flex flex-row justify-around w-full">
                        <Button onPress={()=>setSignCoordinador([])}> Borrar </Button>
                        <Button> Crear Link </Button>
                    </div> 
                </div>
                <div className="">
                    <h2>Firma de Jefe Directo</h2>
                    <DragII lines={signBoss} setLines={setSignBoss} width={400} height={200}/> 
                    <Button onPress={()=>setSignBoss([])}> Borrar </Button> 
                </div>
                <div className="">
                    <h2>Firma de recursos humanos</h2>
                    <DragII lines={signRH} setLines={setSignRH} width={400} height={200}/> 
                    <Button onPress={()=>setSignRH([])}> Borrar </Button> 
                </div>

                <div className="">
                    <h2>Firma del alumno</h2>
                    <DragII lines={signStudent} setLines={setSignStudent} width={400} height={200}/>  
                    <Button onPress={()=>setSignStudent([])}> Borrar </Button>
                </div>
            </div>

            <Button type="submit" className="p-5 mt-10">Enviar</Button>
        </form>
    </main>
  );
}
