'use client'
import React from 'react'
import {
    Table,
    TableHeader,
    TableBody,
    TableColumn,
    TableRow,
    TableCell, 
    Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure
  } from "@nextui-org/react";

export default function Review() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

const handlechange= ()=>{
    console.log("cahnge and open")
    onOpen();
}
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
    <h1 className="text-2xl font-bold my-4">Aprobar Reportes Pendientes</h1>
    <Table 
      selectionMode="single" 
      aria-label="Example static collection table"
      onSelectionChange={handlechange}
      className='w-3/4'
    >
      <TableHeader>
        <TableColumn>NOMBRE</TableColumn>
        <TableColumn>CARRERA</TableColumn>
        <TableColumn>SEMESTRE</TableColumn>
        <TableColumn>STATUS</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow key="1">
          <TableCell>Tony Reichert</TableCell>
          <TableCell>ICC</TableCell>
          <TableCell>5</TableCell>
          <TableCell>Reporte Inicial</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Zoey Lang</TableCell>
          <TableCell>ICE</TableCell>
          <TableCell>5</TableCell>
          <TableCell>Reporte Inicial</TableCell>
        </TableRow>
        <TableRow key="3">
          <TableCell>Jane Fisher</TableCell>
          <TableCell>LAE</TableCell>
          <TableCell>7</TableCell>
          <TableCell>Reporte Parcial</TableCell>
        </TableRow>
        <TableRow key="4">
          <TableCell>William Howard</TableCell>
          <TableCell>ICE</TableCell>
          <TableCell>8</TableCell>
          <TableCell>Reporte Final</TableCell>
        </TableRow>
      </TableBody>
    </Table>
    <ModalComponent isOpen={isOpen} onOpenChange={onOpenChange}></ModalComponent>
  </div>
  )
}



function ModalComponent({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: (isOpen: boolean) => void}) {
  return (
    <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        size='5xl'
        scrollBehavior="inside"
    >
    <ModalContent>
      {(onClose) => (
        <>
          <ModalHeader className="flex flex-col gap-1">Nombre del alumno</ModalHeader>
          <ModalBody>
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

                    
                    <div className="flex flex-col my-2">
                        <h3 className="font-semibold">Firma del alumno: </h3>
                        <p>
                            Firma debe ir aqui
                        </p>
                    </div>
                    <div className="flex flex-col my-2">
                        <h3 className="font-semibold">Firma del coordinador de carrera: </h3>
                        <p>
                            Firma debe ir aqui
                        </p>
                    </div>
                    <div className="flex flex-col my-2">
                        <h3 className="font-semibold">Firma de RH: </h3>
                        <p>
                            Firma debe ir aqui
                        </p>
                    </div>
                    <div className="flex flex-col my-2">
                        <h3 className="font-semibold">Firma del jefe directo: </h3>
                        <p>
                            Firma debe ir aqui
                        </p>
                    </div>
                </div>
            </div>
          </div>
                    
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onClose}>
              Close
            </Button>
            <Button color="primary" onPress={onClose}>
              Approve
            </Button>
          </ModalFooter>
        </>
      )}
    </ModalContent>
  </Modal>
  )
}
