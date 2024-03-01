'use client'
import { Input , Button, Textarea, Popover, PopoverTrigger, PopoverContent, Select, SelectItem, Link} from "@nextui-org/react";
import {  Table,  TableHeader,  TableBody,  TableColumn,  TableRow,  TableCell} from "@nextui-org/react";
import DragII from "../components/Drag";
import { useState } from "react";
import Image from "next/image";
import { useUserContext } from "../providers";
import { DateRangePicker } from 'react-dates';
import moment, { Moment } from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/lib/css/_datepicker.css';


type Line = { x: number; y: number }[];
type Lines = Line[];

export default function Form() {
    const [signCoordinador, setSignCoordinador] = useState<Lines>([]);
    const [signStudent, setSignStudent] = useState<Lines>([]);
    const [signRH, setSignRH] = useState<Lines>([]);
    const [signBoss, setSignBoss] = useState<Lines>([]);
    const { userData } = useUserContext();
    const [startDate, setStartDate] = useState<Moment | null>(moment());
    const [endDate, setEndDate] = useState<Moment | null>(moment());
    const [focusedInput, setFocusedInput] = useState<"startDate" | "endDate" | null>(null);

    const giros: string[] = ["Agencia Aduanal", "Agencia de Autos", "Agencia de Mercadotecnia y Comunicación", "Agencia de Relaciones Públicas", "Agrícola - Ganadera", "Alimentos - Bebidas", "Arte y diseño", "Bancario - Financiero", "Centro Comercial", "Comercio", "Construcción - Inmobiliaria - Arquitectura", "Consultoría", "Deportes", "Despacho Contable - Fiscal", "Despacho Legal", "Educación", "Gasolinera", "Hotel", "Industria: BioTech", "Industria Creativa: Moda, Música, Cinematografía, Diseño, Audiovisual, Videojuegos", "Industria: Aeroespacial - Aeronáutico", "Industria: Automotriz", "Industria: Clean Tech", "Industria: Eléctrica - Electrónica", "Industria: Energía", "Industria: Metalmecánica", "Industria: Nanotech", "Industria: Papel", "Industria: Plásticos", "Industria: Productos Médicos", "Industria: Semiconductores", "Industria: Textil", "Industria: Utiles Escolares", "Industria: Vidrio", "Ingeniería", "Logística - Transporte - Distribución - Almacenamiento", "Minería - Recursos Naturales", "Mueblería", "Música", "Notaria", "Parque o Desarrollo Industrial", "Psicología", "Reciclado", "Recreativo", "Recursos Humanos - Becas (outsourcing)", "Seguros", "Servicios generales", "Servicios Médicos", "Shelter", "Sombras", "Telecomunicaciones - Radio - TV", "TIC's - Sistemas - Servicios de Nube", "Turismo", "Otro"];

    const pais: string[] = [
        "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán",
        "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Birmania", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi",
        "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Ciudad del Vaticano", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba",
        "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía",
        "Filipinas", "Finlandia", "Fiyi", "Francia",
        "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guyana", "Guinea", "Guinea ecuatorial", "Guinea-Bisáu",
        "Haití", "Honduras", "Hungría",
        "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia",
        "Jamaica", "Japón", "Jordania",
        "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait",
        "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo",
        "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique",
        "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda",
        "Omán",
        "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal",
        "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumanía", "Rusia",
        "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam",
        "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu",
        "Ucrania", "Uganda", "Uruguay", "Uzbekistán",
        "Vanuatu", "Venezuela", "Vietnam",
        "Yemen", "Yibuti",
        "Zambia", "Zimbabue"
      ];
      


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 bg-[#ffdc14]">
        <Image
            src="/cetys_logo.png"
            width={200}
            height={200}
            alt="Cetys logo"
        />
        <div className="flex justify-center items-center h-48 relative text-center">
            <h2 className="text-9xl font-extrabold absolute opacity-20">1</h2>
            <h1 className="text-2xl font-bold z-10">Reporte de Practicas Profesionales</h1>
        </div>
        <form className="m-2 flex flex-col justify-center items-center w-full">
            <div className="w-2/3 mt-3">
                <h2 className="text-lg font-semibold">Datos del alumno</h2>
                {
                    !userData && (
                        <>
                            <Input 
                                type="text"  
                                label="Nombre" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                //value={userData.FirstName}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Apellido" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                //value={userData.LastNameP + " " + userData.LastNameM}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Matricula" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                //value={userData.Matricula}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="number"  
                                label="Telefono" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                //value={userData.Cel.toString()}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Carrera" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                //value={userData.Mayor}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                            <Input 
                                type="text"  
                                label="Correo Institucional" 
                                isRequired 
                                className="py-3" 
                                isReadOnly
                                isDisabled
                                //value={userData.Email}
                                //onChange={(e) => setUser(e.target.variable)}
                            />
                        </>)
                }
                </div>
                
                <div className="w-2/3 mt-3">

                    <h2 className="text-lg font-semibold">Datos de la empresa</h2>
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
                        type="text"
                        placeholder=""
                        label="Razon Social"
                        isRequired
                        className="py-3"
                    />
                    <Select
                        label="Giro de empresa"
                        className="py-3"
                        placeholder=""
                        isRequired
                    >
                        {
                        giros.map((giro, index) => (<SelectItem key={index} value={index}>{giro}</SelectItem>))
                        }
                    </Select>

                    <Input
                        type="number"
                        placeholder="ej: 23"
                        label="Numero de empleados"
                        isRequired
                        className="py-3"
                    />
                    <Input
                        type="text"
                        placeholder=""
                        label="Calle y numero"
                        isRequired
                        className="py-3"
                    />
                    <Input
                        type="text"
                        placeholder=""
                        label="Colonia o Parque Industrial"
                        isRequired
                        className="py-3"
                    />
                    <Input
                        type="text"
                        placeholder=""
                        label="Ciudad"
                        isRequired
                        className="py-3"
                    />
                    <Input
                        type="text"
                        placeholder=""
                        label="Estado / Provincia"
                        isRequired
                        className="py-3"
                    />
                    <Input
                        type="number"
                        placeholder=""
                        label="Codigo Postal"
                        isRequired
                        className="py-3"
                    />

                    <Select
                        label="Pais"
                        className="py-3"
                        placeholder=""
                        isRequired
                    >
                        {
                        pais.map((pais, index) => (<SelectItem key={index} value={index}>{pais}</SelectItem>))
                        }
                    </Select>
                        
                    <Input 
                        type="number" 
                        placeholder="(000) 000-0000" 
                        label="Telefono" 
                        isRequired 
                        className="py-3" 
                        //value={variable}
                        //onChange={(e) => setUser(e.target.variable)}
                    />
                    
                    <Input
                        type="text"
                        placeholder=""
                        label="Pagina web"
                        className="py-3"
                    />

                    <Table>
                        <TableHeader>
                            <TableColumn> </TableColumn>
                            <TableColumn>Jefe Directo</TableColumn>
                            <TableColumn>Recursos Humanos</TableColumn>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell>Nombre</TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Correo</TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Telefono</TableCell>
                                <TableCell>
                                    <Input
                                        type="number"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="number"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Puesto</TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Departamento</TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                                <TableCell>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        isRequired
                                        className="py-3"
                                    />
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>

            <div className="w-2/3 mt-4">
                <h2 className="text-lg font-semibold">Actividades de la Practica Profesional</h2>
                <Textarea
                    type="text"
                    label="Describe en máximo 100 caracteres las principales actividades realizadas de Prácticas Profesionales durante este periodo:"
                    isRequired
                    className="py-3" 
                />
                <Input
                    type="number"
                    placeholder="ej: 400"
                    label="Total de horas"
                    isRequired
                    className="py-3 pb-6"
                />
                <div className="text-foreground-500">
                        Fechas del periodo
                </div>
                <DateRangePicker 
                    
                    startDate={startDate}
                    startDateId="start_date"
                    endDate={endDate}
                    endDateId="end_date" 
                    onDatesChange={({startDate, endDate}) => {
                        setStartDate(startDate);
                        setEndDate(endDate);
                    }}
                    focusedInput={focusedInput}
                    onFocusChange={(focusedInput) => setFocusedInput(focusedInput)}
                    isOutsideRange={(day) => {
                        const today = moment();
                        const oneWeekAgo = moment().subtract(1, 'weeks');
                        return day.isBefore(oneWeekAgo, 'day');
                    }}
                />
                

            </div>

            <div className="flex flex-row w-full justify-around flex-wrap my-6">
                <div className="flex flex-col justify-center items-center my-4">
                    <h2>Firma del alumno</h2>
                    <DragII lines={signStudent} setLines={setSignStudent} width={400} height={200}/>  
                    <Button onPress={()=>setSignStudent([])}> Borrar </Button>
                </div>
                <div className="flex flex-col justify-center items-center my-4">
                    <h2>Firma de Coordinador de Carrera</h2>
                    <DragII lines={signCoordinador} setLines={setSignCoordinador} width={400} height={200}/>
                    <div className="flex flex-row justify-around w-full">
                        <Button onPress={()=>setSignCoordinador([])}> Borrar </Button>
                        <Button as={Link} href="/signature" target="_blank"> Enviar link</Button>
                    </div> 
                </div>
                <div className="flex flex-col justify-center items-center my-4">
                    <h2>Firma de Jefe Directo</h2>
                    <DragII lines={signBoss} setLines={setSignBoss} width={400} height={200}/> 
                    <div className="flex flex-row justify-around w-full">
                        <Button onPress={()=>setSignBoss([])}> Borrar </Button> 
                        <Button> Enviar link</Button>
                    </div> 
                </div>
                <div className="flex flex-col justify-center items-center my-4">
                    <h2>Firma de recursos humanos</h2>
                    <DragII lines={signRH} setLines={setSignRH} width={400} height={200}/> 
                    <div className="flex flex-row justify-around w-full">
                        <Button onPress={()=>setSignRH([])}> Borrar </Button> 
                        <Button> Enviar link</Button>
                    </div> 
                </div>
            </div>
            <div className="flex flex-row w-1/2 justify-evenly">
                <Button type="submit" className="p-5 mt-10 bg-black text-white">
                    <div className="p-5">
                        Guardar progreso
                    </div>
                </Button>

                <Button type="submit" className="p-5 mt-10 bg-black text-white" isDisabled>
                    <div className="p-5">
                        Enviar
                    </div>
                </Button>
            </div>
        </form>
    </main>
  );
}
