'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Select, SelectItem, Selection } from '@nextui-org/react';
import { schools } from '../Schools';

import {
    Chart as ChartJS,
    CategoryScale,
    ArcElement,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Pie, Bar } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const PieOptions = {
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Alumnos haciendo practicas',
        },
    },
    responsive: true,
  };

const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Alumnos haciendo practicas por semestre',
      },
    },
  };


  
const randomNumberBetween = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
    
const labelsPie = ['Haciendo Practicas', 'Sin empezar', "Terminadas"];

const PieData = {
  labels: ['Haciendo Practicas', 'Sin empezar', "Terminadas"],
  datasets: [
    {
      label: '# of students',
      data: labelsPie.map(() => randomNumberBetween(100, 1000)),
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
      ],
      borderWidth: 1,
    },
  ],
};


const LabelsSemester=  ['1', '2', '3', '4', '5', '6', '7', "8"];

const BarData = {
  labels: ['1', '2', '3', '4', '5', '6', '7', "8"],
  datasets: [
    {
        label: '# of students',
        data: LabelsSemester.map(() => randomNumberBetween(100, 5000)),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};


export default function Admin() {
    const [schoolRaw, setSchoolRaw] = React.useState<Selection>(new Set([]));
    const [mayorRaw, setMayorRaw] = React.useState<Selection>(new Set([]));
    const [semesterRaw, setSemesterRaw] = React.useState<Selection>(new Set([]));

    // State for chart data
    const [pieChartData, setPieChartData] = useState(PieData);
    const [barChartData, setBarChartData] = useState(BarData);

    const updateChartData = () => {
        const updatedPieData = {
          ...PieData,
          datasets: [
            {
              ...PieData.datasets[0],
              data: labelsPie.map(() => randomNumberBetween(100, 1000)),
            },
          ],
        };
    
        const updatedBarData = {
          ...BarData,
          datasets: [
            {
              ...BarData.datasets[0],
              data: LabelsSemester.map(() => randomNumberBetween(100, 5000)),
            },
          ],
        };
    
        setPieChartData(updatedPieData);
        setBarChartData(updatedBarData);
      };

      useEffect(() => {
        updateChartData();
        // This effect should run when selectedSchool or selectedMajor changes
      }, [schoolRaw, mayorRaw, semesterRaw]);

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-4 bg-[#e2e2e2]">
        <h1 className="text-2xl font-bold mt-1">Stadistics</h1>
        <div className='flex flex-row w-2/3 justify-between'>
            <Select
                label="Escuela"
                className="py-3"
                placeholder="Filter By"
                selectedKeys={schoolRaw}
                onSelectionChange={setSchoolRaw}
            >
                {
                    schools.map((item, index) => (<SelectItem key={index} value={index}>{item.name}</SelectItem>))
                }
            </Select>

            <Select
                label="Carrera"
                className="py-3"
                placeholder="Filter By"
                selectedKeys={mayorRaw}
                onSelectionChange={setMayorRaw}
            >
                {
                     schools.flatMap((item, schoolIndex) => 
                     item.mayors.map((mayor, mayorIndex) => (
                         <SelectItem key={`${schoolIndex}-${mayorIndex}`} value={mayor}>
                             {mayor}
                         </SelectItem>
                     ))
                    )

                }
            </Select>

            <Select
                label="Semestre"
                className="py-3"
                placeholder="Filter By"
                selectedKeys={semesterRaw}
                onSelectionChange={setSemesterRaw}
            >
                {
                    LabelsSemester.map((item, index)=> (<SelectItem  key={`${index}-${item}`} value={item}>{item}</SelectItem>))
                }
            </Select>

        </div>
        <div className='flex flex-row w-full px-5 justify-center items-center'>
            <div className='w-1/2'>
            <Pie data={pieChartData} options={PieOptions}/>
            </div>
            <div className='w-1/2'>
            <Bar options={BarOptions} data={barChartData} />
            </div>
        </div>
    </main>
  )
}
