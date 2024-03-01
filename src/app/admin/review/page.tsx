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

export default function review() {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

const handlechange= ()=>{
    console.log("cahnge and open")
    onOpen();
}
  return (
    <div className="flex flex-col gap-3">
    <h1 className="text-2xl font-bold mt-1">Aprobar Reportes Pendientes</h1>
    <Table 
      selectionMode="single" 
      aria-label="Example static collection table"
      onSelectionChange={handlechange}
      
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
    {/* <Button onPress={onOpen}>Open Modal</Button> */}
  </div>
  )
}



function ModalComponent({isOpen, onOpenChange}: {isOpen: boolean, onOpenChange: Function}) {
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
                    <div className="flex flex-row">
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
                        <h3 className="font-semibold">Fechas: </h3>
                        <p>
                            agosto 30 2023 - diciembre 3 2023                  
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
